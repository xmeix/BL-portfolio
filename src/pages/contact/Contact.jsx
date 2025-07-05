import "./Contact.css";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com"; // ✅ import
import Titles from "../../components/titles/Titles";
import { FaJsSquare } from "react-icons/fa";

const Contact = () => {
  const [typed, setTyped] = useState("");
  const message = "/// Let's connect. I'm just one request away...";
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      if (i >= message.length) {
        clearInterval(interval);
        return;
      }

      setTyped((prev) => prev + message.charAt(i));
      i++;
    }, 50);

    return () => clearInterval(interval);
  }, [message]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_1kjjhkw", "template_iohixld", form, "9xbUk5Ytol45vMF6-")
      .then(
        () => {
          alert("📨 Email sent! I'll get back to you soon.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("⚠️ Something went wrong. Try again later.");
        }
      );
  };

  const inputArray = [
    {
      type: "text",
      name: "name",
      placeholder: "John Doe",
    },
    {
      type: "email",
      name: "email",
      placeholder: "john@example.com",
    },
    {
      type: "textarea",
      name: "message",
      placeholder: "Let’s build something awesome together.",
    },
  ];

  return (
    <div className="contact">
      <Titles
        title1="Contact Me"
        title2="Send an email or reach out directly"
      />
      <section className="contact-terminal" id="contact">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="code-page-header">
              <div className="code-page-icon">
                <FaJsSquare />
              </div>
              <div className="code-page-title">Contact.js </div>
              <div className="code-page-buttons">x</div>
            </div>
          </div>

          <div className="terminal-body">
            <pre className="typed-line">
              {typed}
              <span className="cursor" />
            </pre>

            <form className="contact-form" onSubmit={sendEmail}>
              {inputArray.map((input, index) => (
                <label
                  key={index}
                  style={{
                    display: "flex",
                    justifyContent:
                      input.type === "textarea"
                        ? "flex-start"
                        : "space-between",
                    alignItems:
                      input.type === "textarea" ? "flex-start" : "center",
                  }}
                >
                  <div
                    className="var-icon"
                    style={{
                      marginTop:
                        input.type === "textarea" ? "0.4em" : "inherit",
                    }}
                  >
                    <span className="var-key">const&#160;</span>
                    <span className="var-name">{input.name}</span> ={" "}
                    <span style={{ color: "#ce9178" }}>"</span>
                  </div>
                  {input.type === "textarea" ? (
                    <textarea
                      required
                      type={input.type}
                      name={input.name}
                      value={form[input.name] || ""}
                      onChange={handleChange}
                      placeholder={input.placeholder}
                      className="code-input"
                    />
                  ) : (
                    <input
                      required
                      type={input.type}
                      name={input.name}
                      value={form[input.name] || ""}
                      onChange={handleChange}
                      placeholder={input.placeholder}
                      className="code-input"
                    />
                  )}
                  <span style={{ color: "#ce9178" }}>"</span>;
                </label>
              ))}

              <button type="submit" className="run-button">
                build() ▶
              </button>
            </form>
          </div>
        </div>
      </section>{" "}
    </div>
  );
};

export default Contact;
