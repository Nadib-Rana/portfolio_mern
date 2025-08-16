import nodemailer from 'nodemailer';

export const sendVerificationEmail = async (email: string, url: string) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Gmail SMTP server
      port: 465, // SSL port
      secure: true, // true for port 465
      auth: {
        user: process.env.SMTP_USERNAME!,
        pass: process.env.SMTP_PASSWORD!,
      },
    });

    await transporter.sendMail({
      from: `"Your App" <${process.env.SMTP_USERNAME}>`,
      to: email,
      subject: 'Verify your email - Your App',
      html: `
        <div style="font-family: Arial, sans-serif; text-align: center;">
          <h2>Welcome to Our App 🎉</h2>
          <p>Thanks for signing up! Please verify your email by clicking the button below:</p>
          <a href="${url}" 
            style="display: inline-block; padding: 10px 20px; margin-top: 10px;
            background-color: #4F46E5; color: white; text-decoration: none; border-radius: 5px;">
            Verify Email
          </a>
          <p>If the button doesn't work, copy this link into your browser:</p>
          <p>${url}</p>
        </div>
      `,
    });

    console.log(`✅ Verification email sent to ${email}`);
  } catch (error) {
    console.error('❌ Failed to send verification email:', error);
  }
};
