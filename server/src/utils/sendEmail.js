import { transporter } from "../config/mail.js";

const sendEmail = async ({ to, subject, html }) => {
  await transporter.sendMail({
    from: `"Real Estate App" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
};

export default sendEmail;
