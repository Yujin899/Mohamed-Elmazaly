"use client";
import { Box, Container } from "@mui/material";
import Image from "next/image";
import two from "@/../public/images/m-two.jpg";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
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
          <FacebookIcon />
        </Link>
        <Link className="link" href="https://instagram.com/mohamed._hamed0?igshid=NTc4MTIwNjQ2YQ==">
          <InstagramIcon />
        </Link>
        <Link className="link" href="https://wa.me/+201010033362">
          <WhatsAppIcon />
        </Link>
      </motion.div>
   
      <AutoPlay />

      <div className="footer">
        Made with &hearts; Kareem Elgohary
      </div>

    </Container>
  );
}
