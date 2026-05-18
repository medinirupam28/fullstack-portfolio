import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import mongoose from "mongoose";
import Message from "./models/Message.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(
  cors({
    origin: "https://fullstack-portfolio-jet.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {

    const { name, email, message } = req.body;

    await Message.create({
      name,
      email,
      message,
    });

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({

      from: process.env.EMAIL_USER,

      replyTo: email,

      to: process.env.EMAIL_USER,

      subject: `New Portfolio Message from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #111827; color: white; border-radius: 10px;">

          <h2 style="color: #a855f7;">
            New Portfolio Contact Message
          </h2>

          <hr style="border: 1px solid #374151;" />

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <div style="background-color: #1f2937; padding: 15px; border-radius: 8px;">
            ${message}
          </div>

        </div>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Email failed",
    });
  }
});

app.get("/api/messages", async (req, res) => {
  try {

    const messages = await Message.find().sort({
      createdAt: -1,
    });

    res.status(200).json(messages);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch messages",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});