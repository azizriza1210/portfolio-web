import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const { name, email, message } = parsed.data;

  // TODO: Wire up Resend or email service here
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
