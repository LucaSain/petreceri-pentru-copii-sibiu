import { Client } from "node-mailjet";

const mailjetClient = new Client({
  apiKey: process.env.MAILJET_APIKEY,
  apiSecret: process.env.MAILJET_SECRET,
});

export async function sendEmail({
  subject,
  message,
}: {
  subject: string;
  message: string;
}) {
  const emailData = {
    Messages: [
      {
        From: {
          Email: "contact@petreceri-copii.com",
          Name: "Lucas Ainenco",
        },
        To: [
          {
            Email: "teddy.mika@gmail.com",
            Name: "Rezervare",
          },
          {
            Email: "sainencoa@gmail.com",
            Name: "Rezervare",
          },
        ],
        Subject: subject,
        TextPart: message,
      },
    ],
  };

  try {
    const result = await mailjetClient
      .post("send", { version: "v3.1" })
      .request(emailData);
    console.log("Email sent successfully!");
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
