import React, { RefObject, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { notify } from "../custom/notify";

const ContactForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const formRef: RefObject<HTMLFormElement> = useRef(null);
  const handleSendEmail = (e: any) => {
    e.preventDefault();
    setIsDisabled(true);

    emailjs
      .sendForm("service_2s5syai", "template_kv8nrvy", formRef.current!, {
        publicKey: "SwAK-bLgnrzkm4rih",
      })
      .then(
        () => {
          notify("Your message was received", "success");
        },
        (error: any) => {
          // console.log('FAILED...', error.text);
          notify("Your message was not sent, please try again", "error");
        }
      );
    setIsDisabled(false);
    e.target.reset();
  };
  return (
    <section>
      <form className="mt-12" ref={formRef} onSubmit={handleSendEmail}>
        <div className="flex lg:flex-row flex-col gap-6">
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="formInput"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            className="formInput"
            placeholder="Email Address"
            required
          />
        </div>

        <div className="mt-6">
          <textarea
            rows={4}
            id="message"
            name="message"
            className="formInput"
            placeholder="Your Message"
            required
          />
      

          <button className="bg-[#00D288] mt-6 text-center text-base text-[#090909] w-full py-[23px]" disabled={isDisabled}>
            {isDisabled ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
