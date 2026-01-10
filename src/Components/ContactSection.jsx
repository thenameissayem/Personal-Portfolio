import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_44dszsb";
    const templateId = "template_x70zz98";
    const publicKey = "3ZELy5qMVR_Rl4xeu";

    // ✅ MUST MATCH EMAILJS TEMPLATE VARIABLES
    const templateParams = {
      title: "New message from",
      name: name,
      from_name: name,
      to_name: "Sayem Ansari",
      email: email,
      message: message,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        alert("Message sent successfully ✅");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message ❌");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    ansari.sayem.20@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:123456789"
                    className="text-muted-foreground hover:text-primary"
                  >
                    +91 9637223082
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">DiwanShah, Bhiwandi, Thane</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
               <a href="https://www.linkedin.com/in/sayem-ansari-0b82b83a4/" target="_blank">
                <Linkedin />
                </a>
                <a href="https://x.com/sayemansari11" target="_blank">
                <Twitter />
                </a>
                <a href="#" target="_blank">
                <Instagram />
                </a>
                <a href="#" target="_blank">
                <Facebook />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className={cn(
                  "w-full px-4 py-3 rounded-md border bg-background",
                  "focus:outline-none focus:ring-2 focus:ring-primary"
                )}
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className={cn(
                  "w-full px-4 py-3 rounded-md border bg-background",
                  "focus:outline-none focus:ring-2 focus:ring-primary"
                )}
              />

              <textarea
                placeholder="Hello, I'd like to talk about..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className={cn(
                  "w-full px-4 py-3 rounded-md border bg-background resize-none",
                  "focus:outline-none focus:ring-2 focus:ring-primary"
                )}
              />

              <button
                type="submit"
                disabled={loading}
                className="cosmic-button w-full flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
