import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { transporter } from "./nodemailer.config.js";

export const sendVerficationEmail = async (email, verificationToken) => {
  const recipient = email;

  try {
    await transporter.sendMail({
      from: "One Trip",
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.error(`Error sending verification`, error);

    throw new Error(`Error sending verification email: ${error}`);
  }
};
