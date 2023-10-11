"use client";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import two from "@/../public/images/m-two.jpg";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { motion } from "framer-motion";
import AutoPlay from "@/components/Slider";

export default function Home() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        pt: "100px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={two} alt="Mohamed Hamed" className="image" />
      </motion.div>
      <motion.div className="text">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi I&apos;m
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mohamed Hamed
        </motion.h2>
      </motion.div>
      <motion.div
        className="links"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link className="link" href="https://www.facebook.com/profile.php?id=100048371870954&mibextid=ZbWKwL">
          Facebook <FacebookIcon />
        </Link>
        <Link className="link" href="https://instagram.com/mohamed._hamed0?igshid=NTc4MTIwNjQ2YQ==">
          Instagram<InstagramIcon />
        </Link>
        <Link className="link" href="https://wa.me/+201010033362">
          Whatsapp<WhatsAppIcon />
        </Link>
        <Link className="link" href="http://t.me/201010033362">
          Telegram<TelegramIcon />
        </Link>
        <Link className="link" href="https://www.threads.net/@mohamed._hamed0">
          Threads<AlternateEmailIcon />
        </Link>
        <Link className="link" href="https://www.tiktok.com/@mohamedhamed9428?_t=8gQe0nlsfsj&_r=1">
          Tiktok<ArrowDropDownCircleIcon />
        </Link>
      </motion.div>
   
      <AutoPlay />

      <div className="footer">
        Made With &hearts; By Kareem Elgohary
      </div>

    </Container>
  );
}
