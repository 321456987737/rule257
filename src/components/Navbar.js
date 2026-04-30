"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // scrolling down → shrink
        setScrolled(true);
      } else {
        // scrolling up → expand
        setScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Contact", href: "/Contact" },
    { name: "Menu", href: "/Menu" },
    { name: "Gallery", href: "/Gallery" },
    { name: "Location", href: "/Location" },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="w-full fixed top-0 left-0 z-50 text-[20px] heading">
        <motion.div
          className={`flex justify-between items-center max-w-6xl mx-auto bg-[#FEFCF8] backdrop-blur-md px-6 md:px-16 py-4 md:h-[80px] transition-all duration-300 rounded-none md:rounded-full ${
            scrolled ? "md:mt-0 md:scale-95 " : "md:mt-8 scale-100"
          }`}
        >
          {/* LEFT LINKS */}
          <ul className="hidden md:flex gap-6 items-center">
            {links.slice(0, 3).map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: i * 0.2 }}
              >
                <Link
                  href={link.href}
                  className="nav-item Satisfy"
                  data-active={pathname === link.href}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            className={`transition-all duration-300 ${
              scrolled ? "md:scale-75 md:w-[100px]" : "md:scale-85 md:w-[120px]"
            } w-[70px]`}
          >
            <Image
              src="/logo.jpg"
              alt="logo"
              width={100}
              height={100}
              className="rounded-full  w-full h-auto"
            />
          </motion.div>

          {/* RIGHT LINKS */}
          <ul className="hidden md:flex gap-6 items-center">
            {links.slice(3).map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.4 + i * 0.2 }}
              >
                <Link
                  href={link.href}
                  className="nav-item Satisfy"
                  data-active={pathname === link.href}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1 cursor-pointer"
          >
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
            <span className="w-6 h-[2px] bg-black"></span>
          </button>
        </motion.div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#ffffff] z-50"
          >
            {/* HEADER */}
            <div className="flex justify-between p-6">
              <Image
                src="/logo.jpg"
                alt="logo"
                loading="eager"
                width={100}
                height={100}
                className="w-[70px] rounded-full border border-black"
              />

              <button onClick={() => setOpen(false)} className="text-3xl">
                ✕
              </button>
            </div>

            {/* LINKS */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col heading items-center gap-6 mt-10 text-2xl"
            >
              {links.map((link) => (
                <motion.div key={link.href} variants={item}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="nav-item Satisfy"
                    data-active={pathname === link.href}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/About" },
//     { name: "Contact", href: "/Contact" },
//     { name: "Menu", href: "/Menu" },
//     { name: "Gallery", href: "/Gallery" },
//     { name: "Location", href: "/Location" },
//   ];

//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, x: -30 },
//     show: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.5, ease: "easeInOut" },
//     },
//   };

//   return (
//     <>
//       {/* NAVBAR */}
//       <div className="w-full fixed top-0 left-0 z-50 text-[20px] heading transition-all duration-300">
//         <motion.div
//           className={`flex justify-between items-center max-w-6xl md:rounded-full bg-[#F0BDD0] mx-auto py-4 px-6 h-22 md:h-[80px] md:px-16 transition-all duration-300 ${
//             scrolled ? "md:mt-0" : "md:mt-12"
//           }`}
//         >
//           {/* LEFT LINKS */}
//           <ul className="hidden md:flex gap-6 items-center">
//             {links.slice(0, 3).map((link, i) => (
//               <motion.li
//                 key={link.href}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.2, delay: i * 0.2 }}
//               >
//                 <Link
//                   href={link.href}
//                   className="nav-item"
//                   data-active={pathname === link.href}
//                 >
//                   {link.name}
//                 </Link>
//               </motion.li>
//             ))}
//           </ul>

//           {/* LOGO */}
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2, delay: 0.5 }}
//             className={`transition-all duration-300 ${
//               scrolled ? "scale-90 md:w-[80px]" : "scale-100 md:w-[140px]"
//             } w-[70px]`}
//           >
//             <Image
//               src="/logo.jpg"
//               alt="logo"
//               width={100}
//               height={100}
//               className="rounded-full border border-black w-full h-auto"
//             />
//           </motion.div>

//           {/* RIGHT LINKS */}
//           <ul className="hidden md:flex gap-6 items-center">
//             {links.slice(3).map((link, i) => (
//               <motion.li
//                 key={link.href}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.2, delay: 0.6 + i * 0.2 }}
//               >
//                 <Link
//                   href={link.href}
//                   className="nav-item"
//                   data-active={pathname === link.href}
//                 >
//                   {link.name}
//                 </Link>
//               </motion.li>
//             ))}
//           </ul>

//           {/* MOBILE MENU ICON */}
//           <button
//             onClick={() => setOpen(true)}
//             className="md:hidden p-2 flex flex-col gap-1 cursor-pointer"
//           >
//             <span className="w-6 h-[2px] bg-black"></span>
//             <span className="w-6 h-[2px] bg-black"></span>
//             <span className="w-6 h-[2px] bg-black"></span>
//           </button>
//         </motion.div>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed top-0 left-0 h-screen w-full bg-[#F0BDD0] z-50"
//           >
//             <div className="flex justify-between p-6 py-2">
//               <Image
//                 src="/logo.jpg"
//                 alt="logo"
//                 width={100}
//                 height={100}
//                 className="w-[70px] rounded-full border border-black"
//               />

//               <button onClick={() => setOpen(false)} className="text-3xl">
//                 ✕
//               </button>
//             </div>

//             <motion.div
//               variants={container}
//               initial="hidden"
//               animate="show"
//               className="flex flex-col items-center gap-6 text-2xl mt-10"
//             >
//               {links.map((link) => (
//                 <motion.div key={link.href} variants={item}>
//                   <Link
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                     className="nav-item"
//                     data-active={pathname === link.href}
//                   >
//                     {link.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );

// }






// "use client";
// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/About" },
//     { name: "Contact", href: "/Contact" },
//     { name: "Menu", href: "/Menu" },
//     { name: "Gallery", href: "/Gallery" },
//     { name: "Location", href: "/Location" },
//   ];

//   /* ---------------- ANIMATION VARIANTS ---------------- */

//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const item = {
//     hidden: {
//       opacity: 0,
//       x: -30,
//     },
//     show: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//       },
//     },
//   };
//   const itemsbovrmedium = {
//     hidden: {
//       opacity: 0,
//       y: -100,
//     },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//       },
//     },
//   };

//   return (
//     <>
//       {/* NAVBAR */}
//       <div
//         // initial={{ opacity: 0 }}
//         // animate={{ opacity: 1 }}
//         // transition={{ duration: 0.5 }}
//         className="w-full  fixed top-0 left-0 z-50 text-[20px]  heading "
//       >
//         <motion.div
//           //      initial={{ opacity: 0, y: -20 }}
//           // animate={{ opacity: 1, y: 0 }}
//           // transition={{ duration: 0.5 }}
//           className="flex justify-between  items-center  max-w-6xl md:rounded-full bg-[#F0BDD0] mx-auto py-4 px-6 h-25 md:h-[80px] md:mt-12 md:px-16"
//         >
//           {/* LEFT LINKS DESKTOP */}
//           {/* LEFT LINKS DESKTOP */}
//           <ul className="hidden md:flex gap-6 items-center">
//             <motion.li
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.2 }}
//             >
//               <Link
//                 href="/"
//                 className="nav-item"
//                 data-active={pathname === "/"}
//               >
//                 Home
//               </Link>
//             </motion.li>

//             <motion.li
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.2, delay: 0.2 }}
//             >
//               <Link
//                 href="/About"
//                 className="nav-item"
//                 data-active={pathname === "/About"}
//               >
//                 About
//               </Link>
//             </motion.li>

//             <motion.li
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.2, delay: 0.4 }}
//             >
//               <Link
//                 href="/Contact"
//                 className="nav-item"
//                 data-active={pathname === "/Contact"}
//               >
//                 Contact
//               </Link>
//             </motion.li>
//           </ul>

//           {/* LOGO */}
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.2, delay: 0.5 }}
//             className="md:w-[140px] w-[90px]"
//           >
//             <Image
//               src="/logo.jpg"
//               alt="logo"
//               width={100}
//               height={100}
//               className="md:w-[140px] w-[72px] rounded-full border border-black "
//             />
//           </motion.div>

//           {/* RIGHT LINKS DESKTOP */}
//           {/* RIGHT LINKS DESKTOP */}
//           <ul className="hidden md:flex gap-6 items-center">
//             <motion.li
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.2, delay: 0.6 }}
//             >
//               <Link
//                 href="/Menu"
//                 className="nav-item"
//                 data-active={pathname === "/Menu"}
//               >
//                 Menu
//               </Link>
//             </motion.li>

//             <motion.li
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.2, delay: 0.8 }}
//             >
//               <Link
//                 href="/Gallery"
//                 className="nav-item"
//                 data-active={pathname === "/Gallery"}
//               >
//                 Gallery
//               </Link>
//             </motion.li>

//             <motion.li
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.2, delay: 1 }}
//             >
//               <Link
//                 href="/Location"
//                 className="nav-item"
//                 data-active={pathname === "/Location"}
//               >
//                 Location
//               </Link>
//             </motion.li>
//           </ul>

//           {/* MOBILE MENU ICON */}
//           <button
//             onClick={() => setOpen(true)}
//             className="md:hidden p-2 flex flex-col gap-1 cursor-pointer"
//           >
//             <span className="w-6 h-[2px] bg-black"></span>
//             <span className="w-6 h-[2px] bg-black"></span>
//             <span className="w-6 h-[2px] bg-black"></span>
//           </button>
//         </motion.div>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className="fixed top-0 left-0 h-screen w-full bg-[#F0BDD0] z-100"
//           >
//             {/* HEADER */}
//             <div className="flex justify-between p-6">
//               <motion.div
//                 initial={{ y: "-100%", opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.6 }}
//               >
//                 <Image
//                   src="/logo.jpg"
//                   alt="logo"
//                   width={100}
//                   height={100}
//                   className="md:w-[140px] w-[90px] rounded-full border border-black "
//                 />
//               </motion.div>

//               <motion.div
//                 initial={{ y: "-100%", opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="flex items-center"
//               >
//                 <button onClick={() => setOpen(false)} className="text-3xl">
//                   ✕
//                 </button>
//               </motion.div>
//             </div>

//             {/* NAV LINKS */}
//             <motion.div
//               variants={container}
//               initial="hidden"
//               animate="show"
//               className="flex flex-col items-center gap-6 h-full text-2xl"
//             >
//               {links.map((link) => (
//                 <motion.div variants={item} key={link.href}>
//                   <Link
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                     className="nav-item"
//                     data-active={pathname === link.href}
//                   >
//                     {link.name}
//                   </Link>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
