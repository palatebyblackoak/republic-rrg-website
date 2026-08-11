/**
 * Republic of the Rio Grande - Website form intake.
 * Receives POSTs from /contact, /employment, /events forms,
 * appends a row to the matching tab, and emails owners.
 */

var OWNER_EMAILS = 'republicmanagement1411@gmail.com,info@blackoakagency.co';

var SHEET_CONFIG = {
  contact: {
    tab: 'Contact',
    headers: ['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message'],
    row: function(d) { return [new Date(), d.name, d.email, d.phone, d.subject, d.message]; },
    subject: function(d) { return '[RRG Website] Contact - ' + d.name; }
  },
  employment: {
    tab: 'Employment',
    headers: ['Timestamp', 'First Name', 'Last Name', 'Email', 'Phone', 'Position', 'Address', 'City', 'State', 'Zip'],
    row: function(d) { return [new Date(), d.firstName, d.lastName, d.email, d.phone, d.position, d.address, d.city, d.state, d.zip]; },
    subject: function(d) { return '[RRG Website] Employment - ' + d.firstName + ' ' + d.lastName; }
  },
  events: {
    tab: 'Events & Catering',
    headers: ['Timestamp', 'Occasion', 'Event Date', 'Guests', 'Delivery Time', 'Venue', 'First Name', 'Last Name', 'Email', 'Phone', 'Notes'],
    row: function(d) { return [new Date(), d.occasion, d.date, d.guests, d.deliveryTime, d.venue, d.firstName, d.lastName, d.email, d.phone, d.notes]; },
    subject: function(d) { return '[RRG Website] ' + (d.occasion || 'Event') + ' - ' + d.firstName + ' ' + d.lastName; }
  }
};

function doPost(e) {
  try {
    var payload = JSON.parse(e.postData.contents);
    var cfg = SHEET_CONFIG[payload.type];
    if (!cfg) throw new Error('Unknown form type: ' + payload.type);

    var data = payload.data || {};
    var sheet = getOrCreateSheet(cfg.tab, cfg.headers);
    var row = cfg.row(data).map(function(v) { return (v === undefined || v === null) ? '' : v; });
    sheet.appendRow(row);

    var lines = [];
    for (var i = 0; i < cfg.headers.length; i++) {
      lines.push(cfg.headers[i] + ': ' + formatCell(row[i]));
    }
    var body = lines.join('\n') + '\n\n---\nAll submissions: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl();

    MailApp.sendEmail({
      to: OWNER_EMAILS,
      subject: cfg.subject(data),
      body: body,
      replyTo: data.email || undefined
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
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(tabName);
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
  return v === '' ? '-' : v;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
