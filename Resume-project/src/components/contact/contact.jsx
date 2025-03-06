import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.email) tempErrors.email = "Email is required.";
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      tempErrors.email = "Invalid email format.";
    if (!formData.message) tempErrors.message = "Message cannot be empty.";
    return tempErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error on typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xzzeppgy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };
  const handleResumeClick = () => {
    // Construct the full path to the PDF in the public folder
    const pdfUrl = `assets/Somya Burman - Product Designer Resume.pdf`;
    window.open(pdfUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 bg-white"
    >
      <div className="text-center">
        {/* Social Icons */}
        <div className="mb-10">
          <p className="text-lg font-medium mb-4">My socials -</p>
          <div className="flex justify-center gap-6">
            <div className="iconButton">
              <a
                href="https://www.behance.net/somyaburmac0aa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black"
              >
                <span className="font-bold">
                  <img src="/assets/behance_icon.png" />
                </span>
              </a>
            </div>
            <div className="iconButton">
              <a
                href="https://www.linkedin.com/in/somyaburman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black"
              >
                <span className="font-bold">
                  <img src="/assets/linkedin_icon.png" />
                </span>
              </a>
            </div>
            <div className="iconButton">
              <a
                href="https://www.instagram.com/penfreak_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black"
              >
                <span className="font-bold">
                  <img src="/assets/insta_icon.png" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Link */}
      <div className="mb-10 flex flex-col items-center text-center">
        <p className="text-lg font-medium mb-4">View my resume -</p>
        <div className="iconButton">
          <img
            onClick={handleResumeClick}
            src="/assets/resume.png"
            alt="Resume Icon"
            className="cursor-pointer w-12 h-12"
          />
        </div>
      </div>

      <div className="text-center max-w-md w-full p-6 rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Feel free to drop in your feedback, suggestions or simply to connect!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-[#FFE9E4]"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-[#FFE9E4]"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border rounded-lg p-3 focus:outline-none focus:ring-2 ${
                errors.message
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-[#FFE9E4]"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full font-medium py-3 rounded-lg bg-[#FFE9E4] text-black hover:bg-[#FFD3C9] transition"
          >
            Send
          </button>
        </form>
        {status && <p className="mt-4 text-green-600">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;
