const express = require("express");
const dotenv = require("dotenv");
const nodeMailer = require("nodemailer");
const app = express();
const port = 3000;

dotenv.config({ path: "./config.env" });
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const transporter = nodeMailer.createTransport({
  service: process.env.SERVICE,
  host: process.env.HOST,
  port: process.env.PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/send-email", (req, res) => {
  const { name, surname, message, recipient, sender } = req.body;
  if (!name || !surname || !message || !recipient || !sender) {
    return res.status(400).send("All fields are required");
  }

  const mailOptions = {
    from: {
      name: sender,
      address: process.env.EMAIL_USER,
    },
    to: recipient,
    subject: `Wiadomość od ${name} ${surname}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send("Error sending email");
    } else {
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
