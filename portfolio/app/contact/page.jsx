"use client";

import { useRef, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { toast } from "sonner";
import { FiArrowUpRight } from "react-icons/fi";
import { socials } from "@/components/Social";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyzgKF0Mf7H4eKbKBk8SeTLg7vih8JS5pEJ0gDJm28IJUwjJHZlwOH10IeQIcTwEnL6kw/exec";
const EMAIL = "hereliesadvaith@gmail.com";

const field =
  "w-full bg-transparent border-0 border-b border-line rounded-none px-0 py-3 text-[17px] placeholder:text-muted focus:outline-none focus:border-ink transition-colors";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const formSubmit = async () => {
    const form = formRef.current;
    const payload = {
      firstName: form.elements["firstname"].value,
      lastName: form.elements["lastname"].value,
      email: form.elements["email"].value,
      phone: form.elements["phone"].value,
      message: form.elements["message"].value,
    };
    if (!payload.firstName || !payload.email) return;

    setStatus("sending");
    let result = {};
    try {
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      result = await response.json();
    } catch (error) {
      console.warn("Failed to send message:", error);
    }
    if (result.result === "success") {
      setStatus("sent");
    } else {
      setStatus("idle");
      toast("Something went wrong.", {
        description: `Please try again, or email me at ${EMAIL}.`,
      });
    }
  };

  return (
    <section className="min-h-[calc(100svh-72px)] xl:min-h-[calc(100svh-104px)] flex flex-col px-4 xl:px-10 pb-10">
      {/* Heading */}
      <div className="pt-10 xl:pt-16">
        <p className="eyebrow mb-4">Contact</p>
        <h1 className="font-bold leading-[0.9] tracking-[-0.055em] text-[clamp(52px,9.5vw,168px)]">
          Let's work together
        </h1>
      </div>

      <div className="flex-1 grid content-start xl:grid-cols-2 gap-14 xl:gap-12 mt-10 xl:mt-16 pt-8 xl:pt-10 border-t border-line">
        {/* Details */}
        <div className="flex flex-col gap-10">
          <p className="max-w-[440px] text-[20px] xl:text-[23px] font-medium leading-[1.2] tracking-[-0.025em]">
            Open to freelance work, collaborations and full-time roles.{" "}
            <span className="text-muted">
              Send a message or email me directly. I'll get back to you soon.
            </span>
          </p>
          <div>
            <p className="eyebrow mb-2">Email</p>
            <a
              href={`mailto:${EMAIL}`}
              className="link text-[22px] xl:text-[28px] font-medium tracking-[-0.03em] break-all"
            >
              {EMAIL}
            </a>
          </div>
          <div>
            <p className="eyebrow mb-2">Elsewhere</p>
            <ul className="flex gap-6 text-[17px] font-medium">
              {socials.map((s) => (
                <li key={s.path}>
                  <a
                    href={s.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1"
                  >
                    <span className="link">{s.name}</span>
                    <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form */}
        {status === "sent" ? (
          <div className="max-w-[560px]" role="status">
            <p className="h2">Thanks, message received.</p>
            <p className="mt-4 text-[18px] leading-snug text-muted">
              I'll reply to you by email soon.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="link mt-8 text-[15px] font-medium cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              formSubmit();
            }}
            className="flex flex-col gap-4 w-full max-w-[640px]"
          >
            <p className="eyebrow">Send a message</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <input name="firstname" aria-label="First name" placeholder="First name *" required className={field} />
              <input name="lastname" aria-label="Last name" placeholder="Last name" className={field} />
              <input name="email" aria-label="Email" type="email" placeholder="Email *" required className={field} />
              <input name="phone" aria-label="Phone" type="tel" placeholder="Phone" className={field} />
            </div>
            <textarea
              name="message"
              aria-label="Message"
              placeholder="Your message"
              rows={5}
              className={`${field} resize-none`}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-4 self-start inline-flex items-center gap-2 bg-ink text-paper text-[17px] font-medium px-4 py-2 rounded-[3px] hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
            >
              {status === "sending" ? (
                <CgSpinner className="h-4 w-4 animate-spin" />
              ) : null}
              {status === "sending" ? "Sending..." : "Send message"}
              {status !== "sending" && (
                <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
