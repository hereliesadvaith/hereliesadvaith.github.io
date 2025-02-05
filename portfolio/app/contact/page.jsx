"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const formSubmit = async () => {
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
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.result === "success") {
        toast("Success", {
          description: "Your request was completed successfully.",
        });
      } else {
        toast("Something went wrong.", {
          description: "Something went wrong please try again.",
        });
      }
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="mx-auto">
          {/* Form */}
          <div className="xl:h-[54%] xl:w-[60%] mx-auto">
            <form
              ref={formRef}
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent-default">
                Let's work together
              </h3>
              <p className="text-white/60">
                I’m open to freelance work, collaborations, or full-time
                opportunities. Drop a message and I’ll get back to you soon.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  type="firstname"
                  placeholder="First Name"
                  required
                />
                <Input
                  name="lastname"
                  type="lastname"
                  placeholder="Last Name"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
                <Input name="phone" type="phone" placeholder="Phone Number" />
              </div>
              <Textarea
                name="message"
                placeholder="Your Message"
                className="h-[200px]"
              />
              <Button
                variant="outline"
                size="lg"
                className="uppercase border-2 border-accent-default cursor-pointer hover:bg-accent-default hover:text-primary hover:transition-all duration-500 max-w-40"
                onClick={(e) => {
                  formSubmit();
                }}
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
