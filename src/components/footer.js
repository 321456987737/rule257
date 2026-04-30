"use client"
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white border-t border-gray-200 py-16 px-6"
    >

      <div className="max-w-7xl mx-auto space-y-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-2xl Satisfy text-gray-900">
              Rule257 Coffee
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-md">
              Crafting fresh coffee experiences with simplicity, quality, and care.
            </p>
          </motion.div>

        </div>

        {/* LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">

          {[
            {
              title: "Company",
              links: ["About-us  ", "Home", "Contact-us"],
            },
            {
              title: "Explore",
              links: ["Our-Menu", "Our-Gallery", "Our-Location"],
            },
            {   
              title: "Support",
              links: ["Help Center", "FAQ", "Privacy"],
            },
            {
              title: "Social",
              links: ["Instagram", "Facebook", "Twitter"],
            },
          ].map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="space-y-3"
            >
              <h4 className="font-medium text-gray-900">
                {section.title}
              </h4>
              <div className="flex flex-col gap-2 text-gray-500">
                {section.links.map((link, idx) => (
                  <Link key={idx} href={`/${link.replace(/\s+/g, "-")}`} className="nav-item w-fit" data-active={false}>
                    {link}
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}

        </div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4"
        >

          <p>© {new Date().getFullYear()} Rule257 Coffee. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
          </div>

        </motion.div>

      </div>
    </motion.footer>
  );
};

export default Footer;