import React from "react";
import Head from "next/head";
import Root from "../components/common/Root";
import Footer from "../components/common/Footer";

const About = () => (
  <Root>
    <Head>
      <title>About | Japan Cermaics</title>
    </Head>
    <div className="about-container">
      {/* Row */}
      <div className="row mt-5 pt-5 about-hero">
        <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0 row-content">
          <div className="h-100 d-flex flex-column py-5 px-4 px-sm-5 justify-content-center">
            <h2 className="font-size-header mb-4">What Started as a Hobby</h2>
            <h4 className="font-size-subheader mb-4">This wasn't always a business.</h4>
            <div className="about-cjs mt-3 d-flex flex-row"></div>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div className="about-image h-100">
            <div className="d-flex align-items-center justify-content-center h-100">
              <img
                src="/RobJames_ceramic_mania.jpg"
                alt="Large collection of Japanese porcelain in a store"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <a
          className="px-5 py-3 flex-grow-1 font-color-white about-blog"
          href="https://www.netlify.com/blog/2020/07/09/create-a-fully-fledged-jamstack-commerce-store-with-commerce.js-and-netlify/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read Blog
        </a>
      </div>
    </div>

    <Footer />
  </Root>
);

export default About;
