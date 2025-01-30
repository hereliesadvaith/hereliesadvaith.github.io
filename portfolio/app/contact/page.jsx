"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const Contact = () => {
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
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent-default">
                Let's work together
              </h3>
              <p className="text-white/60">
                I’m open to freelance work, collaborations, or full-time
                opportunities. Drop a message and I’ll get back to you soon.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              <Textarea placeholder="Your Message" className="h-[200px]" />
              <Button
                variant="outline"
                size="lg"
                className="uppercase border-2 border-accent-default cursor-pointer hover:bg-accent-default hover:text-primary hover:transition-all duration-500 max-w-40"
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
