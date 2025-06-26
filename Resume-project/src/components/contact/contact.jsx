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
    const pdfUrl = `resume/Somya Burman - Product Designer.pdf`;
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
          <p className="text-lg font-medium mb-4">My socials </p>
          <div className="flex justify-center gap-6">
            <div className="icon-button">
              <a
                href="https://www.behance.net/somyaburmac0aa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black"
              >
                <span className="font-bold">
                  <img src="/images/behance_icon.png" className="icon-Images" />
                </span>
              </a>
            </div>
            <div className="icon-button">
              <a
                href="https://www.linkedin.com/in/somyaburman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black"
              >
                <span className="font-bold">
                  <img
                    src="/images/linkedin_icon.png"
                    className="icon-Images"
                  />
                </span>
              </a>
            </div>
            <div className="icon-button">
              <a
                href="https://www.instagram.com/penfreak_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-black"
              >
                <span className="font-bold">
                  <img src="/images/insta_icon.png" className="icon-Images" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Link */}
      <div className="mb-10 flex flex-col items-center text-center">
        <p className="text-lg font-medium mb-4">View my resume </p>
        <div className="icon-button">
          <img
            onClick={handleResumeClick}
            src="/images/resume.png"
            alt="Resume Icon"
            className="cursor-pointer w-12 h-12"
          />
        </div>
      </div>

      <div className="text-center max-w-md w-full p-6 rounded-lg border-2 border-[#373737] bg-[#fffeec]">
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
              className={`w-full rounded-lg p-3 focus:outline-none 
              ${
                errors.name
                  ? "border border-red-500"
                  : "border-[1.5px] border-[#373737]"
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
              className={`w-full rounded-lg p-3 focus:outline-none 
  ${errors.name ? "border border-red-500" : "border-[1.5px] border-[#373737]"}`}
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
              className={`w-full rounded-lg p-3 focus:outline-none 
  ${errors.name ? "border border-red-500" : "border-[1.5px] border-[#373737]"}`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 text-left">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="send-button w-full font-medium py-3 rounded-lg bg-[#e3d7ff] text-black hover:bg-[#c5adfd] transition"
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
