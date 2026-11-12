"use client";

import { useRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { toast } from "sonner";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const formSubmit = async () => {
    setLoading(true);
    const form = formRef.current;
    const firstName = form.elements["firstname"].value;
    const lastName = form.elements["lastname"].value;
    const email = form.elements["email"].value;
    const phone = form.elements["phone"].value;
    const message = form.elements["message"].value;
    if (firstName && email) {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbyzgKF0Mf7H4eKbKBk8SeTLg7vih8JS5pEJ0gDJm28IJUwjJHZlwOH10IeQIcTwEnL6kw/exec";
      const payload = {
        message: message,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
      };
      let result = {};
      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          body: JSON.stringify(payload),
        });
        result = await response.json();
      } catch (error) {
        console.error("Failed to send message:", error);
      }
      if (result.result === "success") {
        formRef.current.reset();
        toast("Success", {
          description: "Your request was completed successfully.",
        });
      } else {
        toast("Something went wrong.", {
          description: "Something went wrong please try again.",
        });
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const field =
    "w-full bg-transparent border-0 border-b border-line rounded-none px-0 py-3 text-[17px] placeholder:text-muted focus:outline-none focus:border-ink transition-colors";

  return (
    <section className="px-4 xl:px-10 pt-10 xl:pt-16 pb-24"
    >
      <div className="grid xl:grid-cols-2 gap-12">
        <div>
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="h1">Let's work together</h1>
          <p className="mt-6 max-w-[420px] text-[18px] leading-snug text-muted">
            I'm open to freelance work, collaborations and full-time roles.
            Drop a message and I'll get back to you soon.
          </p>
        </div>
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            formSubmit();
          }}
          className="flex flex-col gap-4 max-w-[560px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <input name="firstname" placeholder="First name *" required className={field} />
            <input name="lastname" placeholder="Last name" className={field} />
            <input name="email" type="email" placeholder="Email *" required className={field} />
            <input name="phone" type="tel" placeholder="Phone" className={field} />
          </div>
          <textarea
            name="message"
            placeholder="Your message"
            rows={6}
            className={`${field} resize-none`}
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-4 self-start inline-flex items-center gap-2 bg-ink text-paper text-[17px] font-medium px-4 py-2 rounded-[3px] hover:opacity-85 transition-opacity disabled:opacity-50 cursor-pointer"
          >
            {loading && <CgSpinner className="h-4 w-4 animate-spin" />}
            {loading ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
