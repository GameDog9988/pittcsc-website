import React, { useEffect } from "react";

import ArgoAI from "../images/sponsors/Argo-AI-logo.png";
import NS from "../images/sponsors/norfolk_southern_logo.png";
import PNC from "../images/sponsors/PNC_logo.png";
import SAP from "../images/sponsors/SAP-Logo.svg";

import FallReportImage from "../images/Pitt_CSC_Fall_Report_2020-1.png";

import FallReport from "../downloads/Pitt_CSC_Fall_Report_2020.pdf";

import { motion } from "framer-motion";
import { hotjar } from "react-hotjar";
import ReactGA from "react-ga";

import Layout from "../layouts/layout";

// import Img from "gatsby-image";
// import { graphql } from "gatsby";

const imageContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const SponsorPage = ({ data }) => {
  useEffect(() => {
    hotjar.initialize(2276434, 6);
    ReactGA.initialize("UA-58446605-1");
    ReactGA.pageview("/sponsors");
  }, []);

  return (
    <Layout title="Sponsors | Pitt Computer Science Club">
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="space-y-24 min-h-screen my-8 mt-24 xl:my-24">
          <section className="container mx-auto flex w-full flex-col justify-center items-center">
            <div>
              <h1 className="text-3xl lg:text-6xl font-bold font-body mb-8 mt-4 w-full z-10 relative">
                We Love Our Sponsors
                <svg
                  className="relative z-10 w-full svg-underline"
                  viewBox="0 0 422 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                    }}
                    animate={{
                      pathLength: 1,
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 0.8,
                    }}
                    d="M3 9C118.957 4.47226 364.497 -1.86658 419 9"
                  />
                </svg>
              </h1>
            </div>
            <motion.div
              variants={imageContainer}
              initial="hidden"
              animate="show"
              className="w-full grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4 lg:gap-8"
            >
              <motion.a
                variants={item}
                href="https://www.argo.ai/"
                target="_blank"
              >
                <img
                  className="w-32 md:w-48 lg:w-64 xl:w-80 m-4 lg:m-8"
                  src={ArgoAI}
                  alt="Argo AI Logo"
                />
              </motion.a>
              <motion.a
                variants={item}
                href="https://www.pnc.com/en/personal-banking.html"
                target="_blank"
              >
                <img
                  className="w-32 md:w-48 lg:w-64 xl:w-80 m-4 lg:m-8"
                  src={PNC}
                  alt="PNC Logo"
                />
              </motion.a>
              <motion.a
                variants={item}
                href="https://www.sap.com/index.html"
                target="_blank"
              >
                <img
                  className="w-32 md:w-48 lg:w-64 xl:w-80 m-4 lg:m-8"
                  src={SAP}
                  alt="SAP Logo"
                />
              </motion.a>
              <motion.a
                variants={item}
                href="http://www.nscorp.com/content/nscorp/en.html"
                target="_blank"
              >
                <img
                  className="w-32 md:w-48 lg:w-64 xl:w-80 m-4 lg:m-8"
                  src={NS}
                  alt="Norfolk Southern Logo"
                />
              </motion.a>
            </motion.div>
          </section>
          <div className="w-screen bg-gradient-to-r from-primary to-blue-800">
            <section className="container mx-auto w-full flex flex-col justify-center items-center py-24 lg:py-32">
              <div className="w-9/12 lg:w-full flex flex-col lg:flex-row justify-center lg:justify-around items-center">
                <div className="mb-4 lg:mb-0">
                  <h2 className="text-2xl lg:text-5xl max-w-lg font-bold font-body text-white text-center mb-8">
                    Why Sponsor?
                    <svg
                      className="w-full my-2 svg-underline"
                      viewBox="0 0 470 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M467 9.00001C323.851 9.00006 37.5532 -4.49999 3.00001 8.99995" />
                    </svg>
                  </h2>
                  <h3 className="text-2xl font-semibold font-body text-white my-2">
                    Collaborative
                  </h3>
                  <p className="font-body text-white text-base max-w-lg leading-loose mb-8">
                    We work with you in order to help reach amazing students an
                    create a stronger community.
                  </p>
                  <h3 className="text-2xl font-semibold font-body text-white my-2">
                    Connected
                  </h3>
                  <p className="font-body text-white text-base max-w-lg leading-loose">
                    With our Alumni program, we actively give back and form
                    connections between underclassmen, upperclassmen, and
                    alumni.
                  </p>
                </div>

                <div className="w-full lg:w-1/2 mt-4 lg:mt-0 flex flex-col justify-center items-center font-body relative">
                  <svg
                    className="w-32 absolute -bottom-10 -left-10 lg:left-0 md:w-48"
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
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={FallReport}
                    target="_blank"
                    className="bg-white border-secondary-100 border-4 font-body absolute -bottom-6 lg:right-10 transition text-black font-bold py-2 px-4 rounded-full min-w-300 shadow-md hover:shadow-lg focus:outline-none"
                  >
                    See Fall Report
                  </motion.a>
                  <img
                    className="w-full lg:w-9/12 rounded-3xl mx-auto shadow-lg"
                    src={FallReportImage}
                    alt="Fall Report 2020"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </Layout>
  );
};

export default SponsorPage;
