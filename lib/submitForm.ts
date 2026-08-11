export type FormType = "contact" | "employment" | "events";

export async function submitForm(type: FormType, data: Record<string, unknown>): Promise<void> {
  const url = process.env.NEXT_PUBLIC_FORMS_WEBAPP_URL;
  if (!url) throw new Error("Forms endpoint is not configured.");

  await fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ type, data }),
  });
}
