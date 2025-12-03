"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloater() {
    return (
        <motion.a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-colors hover:bg-[#20bd5a] md:px-6 md:py-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: 0,
                scale: [1, 1.05, 1],
            }}
            transition={{
                opacity: { duration: 0.3 },
                y: { duration: 0.3 },
                scale: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                },
            }}
        >
            {/* Notification Badge */}
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
                1
            </span>

            <MessageCircle className="h-6 w-6" />
            <span className="hidden font-bold md:inline">Commander sur WhatsApp</span>
        </motion.a>
    );
}
