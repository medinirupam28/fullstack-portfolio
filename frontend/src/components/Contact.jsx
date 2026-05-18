import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://portfolio-backend-wqmt.onrender.com/api/contact",
        formData
      );

      console.log(response.data);

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 3000);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      alert("Message failed");
    }
  };

  return (
    <section
      id="contact"
      className="py-28 bg-black text-white px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-12 text-lg">
          Feel free to reach out for collaborations,
          internships, or opportunities.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-gray-950 border border-gray-800 focus:border-purple-500 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-gray-950 border border-gray-800 focus:border-purple-500 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-gray-950 border border-gray-800 focus:border-purple-500 outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={success}
            className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-500 ${
              success
                ? "bg-green-500 scale-105"
                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105"
            }`}
          >
            {success
              ? "✓ Message Sent Successfully"
              : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;