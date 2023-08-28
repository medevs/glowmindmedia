"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";
import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top text-center mx-auto">
            <SectionHeader
              headerInfo={{
                title: `TESTIMONIALS`,
                subtitle: `Kundenbewertungen`,
                description: `In unseren Kundenbewertungen lassen wir unsere Kunden sprechen. Diese begeisterten Rückmeldungen sind nicht nur eine Bestätigung unserer Arbeit, sondern auch eine ständige Motivation, weiterhin exzellente Ergebnisse zu erzielen. Sie spiegeln unsere starken Partnerschaften und unsere Leidenschaft für soziale Medien wider.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 mt-15 xl:mt-20"
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper testimonial-01 pb-22.5 mb-20">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Devid Smith
                      </h4>
                      <p>Founter @democompany</p>
                    </div>
                    <Image
                      width={60}
                      height={50}
                      className=""
                      src="./images/user/user-01.svg"
                      alt="User"
                    />
                  </div>

                  <p>
                    GlowMind hat unsere Präsenz in den sozialen Medien auf ein völlig neues Level gebracht! Ihre Kreativität, strategisches Denken und Liebe zum Detail haben zu gesteigerter Interaktion und Markenloyalität geführt. Sie verstehen unser Publikum wirklich und liefern Inhalte, die Anklang finden.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Jhon Abraham
                      </h4>
                      <p>Founter @democompany</p>
                    </div>
                    <Image
                      width={60}
                      height={50}
                      className=""
                      src="./images/user/user-02.svg"
                      alt="User"
                    />
                  </div>

                  <p>
                    Die Kooperation mit GlowMind war bahnbrechend. Das Social-Media-Team zeigt sich im beeindruckenden Wachstum der Follower-Zahlen und den bedeutungsvollen Interaktionen mit unserer Zielgruppe. Unsere sozialen Plattformen sind nun blühende Gemeinschaften.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="bg-white rounded-lg shadow-solid-9 dark:shadow-none dark:bg-blacksection dark:border dark:border-strokedark p-9 pt-7.5">
                  <div className="flex justify-between border-b border-stroke dark:border-strokedark pb-6 mb-7.5">
                    <div>
                      <h4 className="text-black dark:text-white text-metatitle3 mb-1.5">
                        Devid Smith
                      </h4>
                      <p>Founter @democompany</p>
                    </div>
                    <Image
                      width={60}
                      height={50}
                      className=""
                      src="./images/user/user-01.svg"
                      alt="User"
                    />
                  </div>

                  <p>
                    GlowMind verwaltet nicht einfach nur soziale Medien; sie gestalten digitale Erlebnisse. Ihre Fähigkeit, unsere Markengeschichte mit fesselnden Bildern und authentischer Botschaft zu erzählen, hat eine tiefere Verbindung zu unseren Kunden geschaffen. Es ist, als hätten sie unsere Online-Präsenz in ein Kunstwerk verwandelt.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;
