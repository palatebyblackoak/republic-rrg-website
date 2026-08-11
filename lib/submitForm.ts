export type FormType = "contact" | "employment" | "events";

const DEFAULT_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbw8TRpMkmnX0Y0hx4TfOOWqM21l_UO8QDlVC8ODatPiFmVISPB2g6mViPyRZ04yYeXI/exec";

export async function submitForm(type: FormType, data: Record<string, unknown>): Promise<void> {
  const url = process.env.NEXT_PUBLIC_FORMS_WEBAPP_URL || DEFAULT_ENDPOINT;

  await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ type, data }),
  });
}
