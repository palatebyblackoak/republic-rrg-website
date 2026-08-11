/**
 * Republic of the Rio Grande — Website form intake.
 *
 * Receives POSTs from /contact, /employment, and /events forms,
 * appends a row to the matching sheet tab, and emails owners.
 *
 * Setup:
 *   1. Open sheets.google.com → create a new blank spreadsheet
 *      titled "Republic RRG — Website Submissions".
 *   2. Extensions → Apps Script. Delete the boilerplate and paste this file.
 *   3. Update OWNER_EMAILS below with a comma-separated list.
 *   4. Save (disk icon).
 *   5. Deploy → New deployment → Type: Web app.
 *        Execute as: Me
 *        Who has access: Anyone
 *      Copy the resulting Web app URL.
 *   6. Set NEXT_PUBLIC_FORMS_WEBAPP_URL to that URL in Vercel
 *      (Project → Settings → Environment Variables → Production + Preview + Development)
 *      and in a local .env.local for dev.
 */

const OWNER_EMAILS = 'republicmanagement1411@gmail.com';

const SHEET_CONFIG = {
  contact: {
    tab: 'Contact',
    headers: ['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message'],
    row: (d) => [new Date(), d.name, d.email, d.phone, d.subject, d.message],
    subject: (d) => `[RRG Website] Contact — ${d.name}`,
  },
  employment: {
    tab: 'Employment',
    headers: ['Timestamp', 'First Name', 'Last Name', 'Email', 'Phone', 'Position', 'Address', 'City', 'State', 'Zip'],
    row: (d) => [new Date(), d.firstName, d.lastName, d.email, d.phone, d.position, d.address, d.city, d.state, d.zip],
    subject: (d) => `[RRG Website] Employment — ${d.firstName} ${d.lastName}`,
  },
  events: {
    tab: 'Events & Catering',
    headers: ['Timestamp', 'Occasion', 'Event Date', 'Guests', 'Delivery Time', 'Venue', 'First Name', 'Last Name', 'Email', 'Phone', 'Notes'],
    row: (d) => [new Date(), d.occasion, d.date, d.guests, d.deliveryTime, d.venue, d.firstName, d.lastName, d.email, d.phone, d.notes],
    subject: (d) => `[RRG Website] ${d.occasion || 'Event'} — ${d.firstName} ${d.lastName}`,
  },
};

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const cfg = SHEET_CONFIG[payload.type];
    if (!cfg) throw new Error('Unknown form type: ' + payload.type);

    const data = payload.data || {};
    const sheet = getOrCreateSheet(cfg.tab, cfg.headers);
    const row = cfg.row(data).map((v) => (v === undefined || v === null ? '' : v));
    sheet.appendRow(row);

    const emailBody = cfg.headers
      .map((h, i) => `${h}: ${formatCell(row[i])}`)
      .join('\n');

    MailApp.sendEmail({
      to: OWNER_EMAILS,
      subject: cfg.subject(data),
      body: `${emailBody}\n\n---\nAll submissions: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}`,
      replyTo: data.email || undefined,
    });

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err && err.message || err) });
  }
}

function doGet() {
  return jsonResponse({ ok: true, service: 'RRG forms intake' });
}

function getOrCreateSheet(tabName, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(tabName);
  if (!sheet) {
    sheet = ss.insertSheet(tabName);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function formatCell(v) {
  if (v instanceof Date) return Utilities.formatDate(v, Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm');
  return v === '' ? '—' : v;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
