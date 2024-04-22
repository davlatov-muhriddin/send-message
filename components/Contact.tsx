"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_3y1cx2k", "template_rau9n9k", form.current, {
          publicKey: "LcNAVOl5KqeCdewze",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      form.current.reset();
    }
  };

  return (
    <div>
      <h1>Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="full name" required />
        <input type="email" name="user_email" placeholder="email" required />
        <input type="text" name="subject" placeholder="subject" required />
        <textarea name="message" placeholder="message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
