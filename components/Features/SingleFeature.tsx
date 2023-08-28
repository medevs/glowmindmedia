import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top border border-white shadow-solid-3 rounded-lg p-7.5 xl:p-12.5 transition-all hover:shadow-solid-4 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-blacksection z-40 bg-white relative"
      >
        <div className="flex items-center justify-center rounded-[4px] bg-primary w-16 h-16 relative">
          <Image src={icon} width={36} height={36} alt="title" />
        </div>
        <h3 className="font-semibold text-xl xl:text-itemtitle text-black dark:text-white mt-7.5 mb-5">
          {title}
        </h3>
        <p>{description}</p>
        <a
          href="#"
          className="flex items-center gap-2.5 text-black dark:text-white mt-7.5 hover:text-primary dark:hover:text-primary absolute bottom-0 left-0 w-full p-4"
        >
          <span className="hover:pr-2 duration-500">mehr erfahren</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
            className="dark:hidden"
          >
            <path
              d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
              fill="currentColor"
            />
          </svg>

          <svg
            className="hidden dark:block"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4766 6.16664L6.00658 1.69664L7.18492 0.518311L13.6666 6.99998L7.18492 13.4816L6.00658 12.3033L10.4766 7.83331H0.333252V6.16664H10.4766Z"
              fill="white"
            />
          </svg>
        </a>
      </motion.div>
    </>
  );
};

export default SingleFeature;
