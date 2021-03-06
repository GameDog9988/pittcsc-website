import React, { useEffect } from "react";
import { Link } from "gatsby";
import Lottie from "react-lottie";

import animationData from "../animations/pittcscLogoAnimation.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faLinkedin,
  faSlack,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import {
  faVideo,
  faEnvelope,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

import { motion, useAnimation } from "framer-motion";
import { hotjar } from "react-hotjar";
import ReactGA from "react-ga";
import FallReport from "../downloads/Pitt_CSC_Fall_Report_2020.pdf";

import { useInView } from "react-intersection-observer";

// import heroImage from "../images/hero_image.png";
import MaskImage from "../images/Pitt_CSC_Mask.jpg";
import Layout from "../layouts/layout";

const logoAnimationOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData,
  renderSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const container = {
  hidden: { opacity: 0 },
  homeShow: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const text = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  homeShow: {
    opacity: 1,
    y: 0,
  },
};

const maskAnimate = {
  hidden: {
    opacity: 0,
    x: -25,
  },
  missionShow: {
    opacity: 1,
    x: 0,
  },
};

const missionAnimate = {
  hidden: {
    opacity: 0,
    x: 25,
  },
  missionShow: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
    },
  },
};

const socialAnimate = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  socialShow: {
    opacity: 1,
    y: 0,
  },
};

const underlineAnimate = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  homeShow: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const swirlyAnimate = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  missionShow: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};
const hitUnderlineAnimate = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  socialShow: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const IndexPage = ({ data }) => {
  const controls = useAnimation();
  const { ref: homeRef, inView: homeInView } = useInView({ triggerOnce: true });
  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });
  const { ref: socialRef, inView: socialInView } = useInView({
    triggerOnce: true,
    rootMargin: "-150px 0px",
  });

  useEffect(() => {
    if (homeInView) {
      controls.start("homeShow");
    }
    if (missionInView) {
      controls.start("missionShow");
    }
    if (socialInView) {
      controls.start("socialShow");
    }

    hotjar.initialize(2276434, 6);
    ReactGA.initialize("UA-58446605-1");
    ReactGA.pageview("/");
  }, [controls, homeInView, missionInView, socialInView]);

  return (
    <Layout title="Supporting the CS Community | Pitt Computer Science Club">
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="space-y-24 lg:space-y-40 min-h-screen my-8 mt-24 xl:my-32">
          <section className="container mx-auto flex w-full flex-col lg:flex-row justify-center items-center px-8 lg:w-10/12 lg:px-0">
            <motion.div
              variants={container}
              initial="hidden"
              animate={controls}
              ref={homeRef}
              className="xl:w-3/4 break-normal relative"
            >
              <motion.p
                variants={text}
                className="font-light text-lg xl:text-xl font-body z-10 relative"
              >
                2020-2021 SCHOOL YEAR
              </motion.p>
              <motion.h1
                variants={text}
                className="text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl font-bold font-body my-2 lg:my-4 w-full z-10 whitespace-pre relative"
              >
                Pitt Computer
                <br />
                Science Club
                <svg
                  className="relative z-10 w-64 lg:w-1/2 xl:w-3/4 svg-underline"
                  viewBox="0 0 422 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    variants={underlineAnimate}
                    d="M3 9C118.957 4.47226 364.497 -1.86658 419 9"
                  />
                </svg>
              </motion.h1>

              <motion.p
                variants={text}
                className="font-body text-sm md:text-base w-3/4 xl:w-3/4 2xl:text-lg leading-loose md:leading-loose xl:leading-loose 2xl:leading-loose z-10 relative"
              >
                The University of Pittsburgh's largest tech-related student
                organization. Proudly pushing the boundaries on what it means to
                be a Pitt student.
              </motion.p>
              <motion.div
                variants={text}
                className="pt-4 pb-12 lg:py-4 space-x-4 xl:space-x-8 z-20 relative"
              >
                <Link to="/join">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-primary font-body transition text-white font-bold py-2 px-4 rounded-full min-w-300 shadow-md hover:shadow-lg focus:outline-none"
                  >
                    Join the Club
                  </motion.button>
                </Link>
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="border-4 font-body transition border-primary bg-white font-bold py-2 px-4 rounded-full min-w-300 shadow-md hover:shadow-lg focus:outline-none"
                  >
                    What We Do
                  </motion.button>
                </Link>
              </motion.div>
              <div className="w-40 h-40 xl:w-80 xl:h-80 absolute bg-secondary-200 rounded-2xl top-0 -left-20 lg:-top-8 lg:-left-40 z-0 transform -rotate-12"></div>
            </motion.div>
            <div className="w-full lg:w-1/2 relative flex justify-center items-center flex-col">
              {/* <motion.img
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.2,
                }}
                className="w-3/4 md:w-1/2 lg:w-full z-20 mx-auto relative"
                src={heroImage}
                alt="pitt_csc_logo"
              /> */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.4,
                }}
                className=" svg-lottie z-20 relative"
              >
                <Lottie options={logoAnimationOptions} className="" />
              </motion.div>

              <motion.div
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: 0.4,
                }}
                className="polka-background absolute z-10 -top-10 -right-10 lg:-top-20"
              ></motion.div>
            </div>
          </section>
          <div className="w-screen bg-gradient-to-r from-primary to-blue-800">
            <section className="container relative z-10 mx-auto flex w-full flex-col lg:flex-row justify-center items-center py-24 lg:py-32">
              <div className="w-full lg:w-1/2 text-center my-4 xl:my-0 relative">
                <motion.svg
                  className="w-32 absolute -top-10 right-0 md:w-64 lg:w-48 xl:w-64 md:-top-20 svg-underline z-10"
                  viewBox="0 0 306 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    variants={swirlyAnimate}
                    initial="hidden"
                    animate={controls}
                    d="M29 3C71.5 3.5 152.3 10.3 183.5 73.5C214.7 136.7 281.5 155.167 305 151.5"
                  />
                  <motion.path
                    variants={swirlyAnimate}
                    initial="hidden"
                    animate={controls}
                    d="M1 48C43.5 48.5 124.3 55.3 155.5 118.5C186.7 181.7 253.5 200.167 277 196.5"
                  />
                </motion.svg>
                <motion.img
                  ref={missionRef}
                  src={MaskImage}
                  alt="Masked CSC Members"
                  variants={maskAnimate}
                  initial="hidden"
                  animate={controls}
                  className="w-3/4 xl:w-9/12 rounded-3xl mx-auto shadow-lg"
                />
                <motion.a
                  variants={maskAnimate}
                  initial="hidden"
                  animate={controls}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={FallReport}
                  target="_blank"
                  className="bg-white border-secondary-100 border-4 z-20 font-body relative bottom-4 text-center transition text-black font-bold py-2 px-4 rounded-full min-w-300 shadow-md hover:shadow-lg focus:outline-none"
                >
                  See Fall Report
                </motion.a>
              </div>
              <motion.div
                className="w-full lg:w-1/2 relative"
                variants={missionAnimate}
                initial="hidden"
                animate={controls}
              >
                <div className="w-3/4 xl:w-full bg-secondary-200 rounded-3xl p-8 xl:py-12 xl:px-8 max-w-lg my-4 xl:my-0 shadow-lg mx-auto">
                  <h2 className="font-bold text-3xl xl:text-4xl font-body mb-4 lg:my-4">
                    Our Mission
                  </h2>
                  <p className="font-body xl:text-md">
                    To help create an engaging atmosphere for students to learn
                    more about the field of computer science and develop
                    professionally.
                  </p>
                </div>
              </motion.div>
            </section>
          </div>

          <motion.section
            className="container mx-auto flex w-full flex-col lg:flex-row justify-center items-center py-8"
            variants={socialAnimate}
            ref={socialRef}
            initial="hidden"
            animate={controls}
          >
            {/* <div className="w-full my-4 lg:my-0 lg:w-1/2 text-center relative"> */}
            <div className="w-full my-4 lg:my-0 lg:w-1/2">
              <h2 className="font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-body text-center">
                Hit us up
              </h2>
              <svg
                className="mx-auto mb-8 lg:mb-16 w-64 lg:w-1/4 xl:w-1/2 svg-underline"
                viewBox="0 0 479 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  variants={hitUnderlineAnimate}
                  initial="hidden"
                  animate={controls}
                  d="M2.5 11.4996C106.5 -17.5 411.5 37.9996 476 7.49968"
                />
              </svg>
              <div className="w-5/6 max-w-md xl:max-w-lg mb-8 p-4 lg:px-6 lg:mb-0 lg:py-12 rounded-2xl bg-secondary-200 mx-auto flex justify-around items-center flex-wrap shadow-lg">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://discord.gg/bfMAYrsMFf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pitt Computer Science Club Discord"
                  className="p-4 lg:p-2"
                >
                  <FontAwesomeIcon
                    icon={faDiscord}
                    className="text-primary text-5xl xl:text-7xl"
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="http://pittcsc.slack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pitt Computer Science Club Slack"
                  className="p-4 lg:p-2"
                >
                  <FontAwesomeIcon
                    icon={faSlack}
                    className="text-primary text-5xl xl:text-7xl"
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/company/pittcsc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pitt Computer Science Club LinkedIn"
                  className="p-4 lg:p-2"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-primary text-5xl xl:text-7xl"
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/pittcsc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pitt Computer Science Club GitHub"
                  className="p-4 lg:p-2"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-primary text-5xl xl:text-7xl"
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:pittcsc@gmail.com"
                  aria-label="Pitt Computer Science Club Email"
                  className="p-4 lg:p-2"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-primary text-5xl xl:text-7xl"
                  />
                </motion.a>
              </div>
            </div>
            <div className="w-full mb-8 lg:w-1/2 p-4 bg-secondary-200 rounded-2xl flex flex-col justify-center items-center font-body relative shadow-lg">
              <svg
                className="w-32 absolute -bottom-10 -left-10 lg:-left-20 lg:w-64"
                viewBox="0 0 306 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29 3C71.5 3.5 152.3 10.3 183.5 73.5C214.7 136.7 281.5 155.167 305 151.5"
                  stroke="#FFB81C"
                  stroke-width="5"
                />
                <path
                  d="M1 48C43.5 48.5 124.3 55.3 155.5 118.5C186.7 181.7 253.5 200.167 277 196.5"
                  stroke="#FFB81C"
                  stroke-width="5"
                />
              </svg>
              <iframe
                src="https://calendar.google.com/calendar/embed?src=f64u131to44gn3tn8g62ov2u1s%40group.calendar.google.com&ctz=America%2FNew_York"
                title="Pitt CSC Google Calendar"
                frameborder="0"
                scrolling="no"
                height="600"
                className="w-full"
              ></iframe>
              <div className="flex justify-center items-center flex-wrap">
                <div className="flex justify-center items-center text-lg my-2 mx-2">
                  <p className="mx-2"> Join our zoom meetings: </p>
                  <a
                    href="https://pitt.zoom.us/my/zhw78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                    aria-label="Pitt Computer Science Club Zoom Meetings"
                  >
                    <FontAwesomeIcon
                      icon={faVideo}
                      className="text-primary text-lg lg:text-xl xl:text-2xl"
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center text-lg my-2 mx-2">
                  <p className="mx-2"> Sign up for a coffee chat: </p>
                  <a
                    href="https://www.signupgenius.com/go/10c0c4daca628a5fcc34-alumni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                    aria-label="Pitt Computer Science Club Coffee Chats"
                  >
                    <FontAwesomeIcon
                      icon={faCoffee}
                      className="text-primary text-lg lg:text-xl xl:text-2xl"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
          {/* <section className="w-screen bg-gradient-to-r from-primary to-blue-800">
          <div className="w-full h-64 mx-auto whitespace-nowwrap overflow-hidden flex flex-col justify-center items-center">
            <h3 className="font-bold font-body text-white text-4xl my-4">
              Members
            </h3>
            <div className="track font-body text-2xl text-white my-4">
              Zhengming Wang - Olivia Wininsky - Gordon Lu - Janet Majekodunmi -
              Richie Goulazian - Ryan Yang - Justin Kramer - Ashley Sokol - Alex
              Zharichenko - Mat Varughese
            </div>
          </div>
        </section> */}
        </div>
      </motion.div>
    </Layout>
  );
};

export default IndexPage;
