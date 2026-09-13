"use client";

import { motion } from "framer-motion";

type RevealDirection = "up" | "left" | "right";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: RevealDirection;
  delay?: number;
  className?: string;
}) {
  const offset =
    direction === "left" ? { x: -28 } : direction === "right" ? { x: 28 } : { y: 28 };

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
