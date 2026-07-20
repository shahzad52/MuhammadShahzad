import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(JSON.stringify({ error: 'All fields are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Invalid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: 'Email service not configured.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'imshahzad52@gmail.com',
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
          <h2 style="color: #111; font-size: 20px; margin-bottom: 4px;">New message from your portfolio</h2>
          <p style="color: #6b7280; font-size: 13px; margin-bottom: 24px;">Sent via shahzad-portfolio.vercel.app</p>
          <table style="width:100%; border-collapse:collapse; font-size:14px;">
            <tr>
              <td style="padding: 10px 0; color:#6b7280; width:80px; vertical-align:top;">Name</td>
              <td style="padding: 10px 0; color:#111; font-weight:600;">${name}</td>
            </tr>
            <tr style="border-top:1px solid #f3f4f6;">
              <td style="padding: 10px 0; color:#6b7280; vertical-align:top;">Email</td>
              <td style="padding: 10px 0; color:#111;">
                <a href="mailto:${email}" style="color:#4f46e5; text-decoration:none;">${email}</a>
              </td>
            </tr>
            <tr style="border-top:1px solid #f3f4f6;">
              <td style="padding: 10px 0; color:#6b7280; vertical-align:top;">Message</td>
              <td style="padding: 10px 0; color:#111; white-space:pre-wrap; line-height:1.6;">${message}</td>
            </tr>
          </table>
          <hr style="border:none; border-top:1px solid #f3f4f6; margin:24px 0;" />
          <p style="color:#9ca3af; font-size:12px;">Hit Reply to respond directly to ${name}.</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(JSON.stringify({ error: 'Failed to send. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
