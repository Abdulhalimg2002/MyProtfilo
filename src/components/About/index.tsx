import { motion } from "framer-motion";

import Imag from "../Imag";
import Title from "../Title";
import Prag from "../Prag";
import AnimatedSection from "../Anmation/AnimatedSection";

const languages = ["Arabic", "English"];

const Index = () => {
  return (
    <section
      id="About"
      className="
        w-full
        overflow-hidden
        px-4
        sm:px-6
        lg:px-8
        py-12
        sm:py-16
        md:py-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-screen-xl
          grid
          grid-cols-1
          lg:grid-cols-[minmax(280px,420px)_minmax(0,1fr)]
          items-center
          gap-10
          md:gap-12
          lg:gap-16
        "
      >
        {/* ================= IMAGE ================= */}
        <AnimatedSection direction="left" stagger={0.2}>
          <div className="flex justify-center items-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
              }}
              className="
                relative
                w-full
                max-w-[280px]
                sm:max-w-[340px]
                md:max-w-[380px]
                lg:max-w-[420px]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  -inset-2
                  rounded-3xl
                  bg-[#3396D3]/10
                  blur-2xl
                "
              />

              <Imag
                src="/d.png.jpg"
                alt="Abdul Halim Gherra - Software Engineer"
                className="
                  relative
                  block
                  w-full
                  h-auto
                  rounded-3xl
                  object-cover
                  object-center
                  shadow-xl
                  transition-all
                  duration-300
                "
              />
            </motion.div>
          </div>
        </AnimatedSection>

        {/* ================= CONTENT ================= */}
        <AnimatedSection direction="right" stagger={0.2}>
          <div className="min-w-0 w-full flex flex-col space-y-6 sm:space-y-7">
            
            {/* About */}
            <div className="min-w-0">
              <Title
                className="
                  mb-4
                  text-3xl
                  sm:text-4xl
                  md:text-5xl
                  font-bold
                  break-words
                  text-center
                "
              >
                About Me
              </Title>

              <div className="space-y-4">
                <Prag
                  className="
                    text-white
                    text-sm
                    sm:text-base
                    md:text-lg
                    leading-relaxed
                    break-words
                  "
                >
                  I’m a Full-Stack Software Engineer specializing in React,
                  Next.js, and Node.js, passionate about building modern web
                  applications and turning ideas into practical products.
                </Prag>

                <Prag
                  className="
                    text-gray-300
                    text-sm
                    sm:text-base
                    md:text-lg
                    leading-relaxed
                    break-words
                  "
                >
                  I have built AI-powered applications, e-commerce platforms,
                  and booking websites, with hands-on experience in PostgreSQL,
                  MySQL, MongoDB, REST APIs, authentication, and third-party
                  integrations.
                </Prag>

                <Prag
                  className="
                    text-gray-300
                    text-sm
                    sm:text-base
                    md:text-lg
                    leading-relaxed
                    break-words
                  "
                >
                  I enjoy solving practical problems, improving user
                  experiences, and continuously learning new technologies while
                  building clean and maintainable solutions.
                </Prag>
              </div>
            </div>

            {/* ================= INFO CARDS ================= */}
            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
                w-full
              "
            >
              {/* Based In */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="
                  min-w-0
                  w-full
                  border
                  border-gray-700
                  bg-gray-900/40
                  p-4
                  sm:p-5
                  rounded-xl
                  transition-colors
                  duration-300
                  hover:border-[#3396D3]/50
                "
              >
                <Title className="mb-2 text-lg sm:text-xl md:text-2xl">
                  Based in
                </Title>

                <Prag className="text-sm sm:text-base text-gray-300 break-words">
                  Istanbul, Türkiye
                </Prag>

                <Prag className="text-xs sm:text-sm text-gray-400 mt-1">
                  Open to Relocate
                </Prag>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                whileHover={{ y: -3 }}
                className="
                  min-w-0
                  w-full
                  border
                  border-gray-700
                  bg-gray-900/40
                  p-4
                  sm:p-5
                  rounded-xl
                  transition-colors
                  duration-300
                  hover:border-[#3396D3]/50
                "
              >
                <Title className="mb-2 text-lg sm:text-xl md:text-2xl">
                  Education
                </Title>

                <Prag className="text-sm sm:text-base text-gray-300 break-words">
                  Software Engineering
                </Prag>

                <Prag className="text-xs sm:text-sm text-gray-400 mt-1 break-words">
                  Üsküdar University • 2025
                </Prag>

                <Prag className="text-xs sm:text-sm text-gray-400">
                  GPA: 3.27 / 4.00
                </Prag>
              </motion.div>
            </div>

            {/* ================= LANGUAGES ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="
                w-full
                border
                border-gray-700
                bg-gray-900/40
                p-4
                sm:p-5
                rounded-xl
              "
            >
              <Title className="mb-3 text-lg sm:text-xl md:text-2xl">
                Languages
              </Title>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {languages.map((lang, index) => (
                  <motion.span
                    key={lang}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + index * 0.1,
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    className="
                      px-3
                      sm:px-4
                      py-1.5
                      sm:py-2
                      rounded-full
                      text-xs
                      sm:text-sm
                      font-semibold
                      bg-gray-800
                      text-white
                      border
                      border-gray-700
                      hover:border-[#3396D3]
                      hover:bg-[#3396D3]/10
                      transition-all
                      duration-300
                    "
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* ================= CURRENT FOCUS ================= */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="
                w-full
                border
                border-[#3396D3]/30
                bg-[#3396D3]/5
                p-4
                sm:p-5
                rounded-xl
              "
            >
              <Title className="mb-2 text-lg sm:text-xl md:text-2xl">
                Current Focus
              </Title>

              <Prag
                className="
                  text-sm
                  sm:text-base
                  text-gray-300
                  leading-relaxed
                  break-words
                "
              >
                Building scalable web applications, exploring AI-powered
                solutions, and improving my skills through real-world projects.
              </Prag>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Index;