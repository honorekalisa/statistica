"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaRoad, FaXTwitter } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { FaTowerBroadcast } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";

const MobileNav = ({}) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const menuVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "100%", opacity: 0 },
  };

  const links = [
    {
      link: "/",
      icon: <MdSpaceDashboard className="h-4 w-4" />,
      text: "Overview",
    },
    {
      link: "/education",
      icon: <IoSchoolSharp className="h-4 w-4" />,
      text: "Education",
    },
    {
      link: "/transport",
      icon: <FaRoad className="h-4 w-4" />,
      text: "Transport",
    },
    {
      link: "/communication",
      icon: <FaTowerBroadcast className="h-4 w-4" />,
      text: "Communication",
    },
  ];

  const handeNav = (link: string) => {
    setOpen(false);
    router.push(link);
  };

  return (
    <div className="lg:hidden">
      <Menu className="text-kenabuBlue" onClick={() => setOpen(true)} />

      <motion.div
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-screen w-screen bg-white z-20"
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="font-semibold text-lg md:text-2xl text-primary">
            Statistica
          </h2>
          <X
            className="text-kenabuBlue cursor-pointer"
            size={20}
            onClick={() => setOpen(false)}
          />
        </div>
        <nav>
          <ul>
            {links.map((link, index) => (
              <li key={index} className="p-4 border-b border-gray-200">
                <a
                  href={link.link}
                  onClick={() => handeNav(link.link)}
                  className="font-medium hover:text-kenabuBlue text-sm"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-center pt-4 text-sm">Follow us</div>
        <div className="flex items-center justify-center gap-3 p-4">
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebook size={16} className="text-blue-500" />
          </a>
          <a href="https://www.instagram.com">
            <AiFillInstagram size={20} className="text-rose-500" />
          </a>
          <a href="https://www.twitter.com">
            <FaXTwitter size={16} />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <IoLogoLinkedin size={20} className="text-blue-700" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
