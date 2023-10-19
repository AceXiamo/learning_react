"use client";

import Image from "next/image";
import ToastBtn from "@/app/(main)/ToastBtn";
import DialogBtn from "@/app/(main)/DialogBtn";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image alt="avatar" className="rounded-md" width={100} height={100} src={`https://axm.moe/avatar`}></Image>

      <div className="mt-[50px] flex flex-col items-center gap-[20px]">
        <div className="text-white flex gap-[10px] items-center">
          <Icon icon="devicon:npm-wordmark" className="text-[50px]" />
        </div>
        <div className="flex gap-[10px]">
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            className="w-[50px] h-[50px] grid place-content-center border border-solid rounded-md shadow-lg shadow-[#62DAFB60]"
            style={{ backgroundColor: `#62DAFB20`, borderColor: `#62DAFB` }}
          >
            <Icon icon="devicon:react" className="text-[20px]" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            className="w-[50px] h-[50px] grid place-content-center border border-solid rounded-md shadow-lg shadow-[#FFFFFF60]"
            style={{ backgroundColor: `#FAEDFF`, borderColor: `##E9D8FF20` }}
          >
            <Icon icon="devicon:nextjs" className="text-[20px]" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            className="w-[50px] h-[50px] grid place-content-center border border-solid rounded-md shadow-lg shadow-[#FFFFFF60]"
            style={{ backgroundColor: `#FAEDFF`, borderColor: `##E9D8FF20` }}
          >
            <Icon icon="devicon:framermotion" className="text-[20px]" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            className="w-[50px] h-[50px] grid place-content-center border border-solid rounded-md shadow-lg shadow-[#38BDF860]"
            style={{ backgroundColor: `#38BDF820`, borderColor: `#38BDF8` }}
          >
            <Icon icon="devicon:tailwindcss" className="text-[20px]" />
          </motion.div>
        </div>
      </div>

      <div className="mt-[50px] flex flex-col items-center gap-[20px]">
        <div className="text-white flex gap-[10px]">
          <span className="text-[20px]">⚒️</span>
          <span className="text-[20px]">Components</span>
        </div>
        <div className="flex gap-[30px]">
          <ToastBtn />
          <DialogBtn />
        </div>
      </div>
    </div>
  );
}
