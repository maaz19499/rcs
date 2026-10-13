'use server';

type ContactState = {
  success?: boolean;
  error?: string;
} | null;

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return { error: "Please fill in all fields." };
  }

  // TODO: integrate your email/CRM service here (e.g. Resend, SendGrid)
  console.log("Contact form submission:", { name, email, subject, message });

  return { success: true };
}
