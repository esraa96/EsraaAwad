import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-purple-400" />,
    title: "Email",
    detail: "esrawad99@gmail.com",
    href: "mailto:esrawad99@gmail.com",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: <MapPin className="w-6 h-6 text-pink-400" />,
    title: "Location",
    detail: "Behera, Egypt",
    href: "#",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: <FaLinkedin className="w-6 h-6 text-blue-400" />,
    title: "LinkedIn",
    detail: "in/esraa-a",
    href: "https://www.linkedin.com/in/esraa-a-73a693256/",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <FaWhatsapp className="w-6 h-6 text-green-400" />,
    title: "WhatsApp",
    detail: "+20 1144172992",
    href: "https://wa.me/201144172992",
    bgColor: "bg-green-500/10",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setFormStatus("Message sent successfully!");
          setIsLoading(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (err) => {
          console.log("FAILED...", err);
          setFormStatus("Failed to send message. Please try again.");
          setIsLoading(false);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-16 md:py-24"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-gray-300 text-lg">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>
          
          {/* هذا هو الجزء الذي كان ناقصاً */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
                <a href={item.href} key={index} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group">
                    <div className={`${item.bgColor} p-3 rounded-lg transition-transform duration-300 group-hover:scale-110`}>
                        {item.icon}
                    </div>
                    <div>
                        <h3 className="font-semibold text-white">{item.title}</h3>
                        <p className="text-gray-400 group-hover:text-cyan-400 transition-colors">{item.detail}</p>
                    </div>
                </a>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl border border-slate-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ... حقول النموذج ... */}
            <div>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors" required />
            </div>
            <div>
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors" required />
            </div>
            <div>
              <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors" />
            </div>
            <div>
              <textarea name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors resize-none" required></textarea>
            </div>
            <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-50">
                <span>{isLoading ? "Sending..." : "Send Message"}</span>
                {!isLoading && <Send className="w-4 h-4" />}
            </button>
            {formStatus && <p className={`text-center mt-4 text-sm ${formStatus.includes("Failed") ? "text-red-400" : "text-green-400"}`}>{formStatus}</p>}
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;