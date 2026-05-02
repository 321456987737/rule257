"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const StartingAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-white pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* 🔵 BACKGROUND GLOW */}
          {/* <motion.div
            className="absolute w-[400px] h-[400px] rounded-full bg-slate-50 blur-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          /> */}

          {/* 🔷 LOGO */}
          <motion.div
            className="relative z-10"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: [0.6, 1.1, 1],
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/logo.jpg"
              alt="logo"
              width={140}
              height={140}
              className="rounded-full object-cover"
              priority
            />
          </motion.div>

          {/* 🔁 PULSE RING */}
          <motion.div
            className="absolute w-[200px] h-[200px] rounded-full border border-white/20"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [0.8, 1.6],
              opacity: [0.4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StartingAnimation;