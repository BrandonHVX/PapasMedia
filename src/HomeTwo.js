import React, { Component } from "react";
import NavBar from "./components/NavBar";
import HeroSliderTwo from "./components/HeroSliderTwo";
import VideoCta from "./components/VideoCta";
import ProjectSlider from "./components/ProjectSlider";
import ServiceTab from "./components/ServiceTab";
import TestimonialSlider from "./components/TestimonialSlider";

import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";

class HomeTwo extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* Hero slider */}
        <HeroSliderTwo />

        {/* Video CTA */}
        <VideoCta />

        {/* Service Tab */}
        <ServiceTab />

        {/* Project Slider */}
        <ProjectSlider />

        {/* Testimonial Slider */}
        <TestimonialSlider />

        {/* Team job */}
        {/* <TeamJob /> */}

        {/* Brand logo */}
        {/* <BrandLogoSlider background="grey-bg" /> */}

        {/* Blog grid */}
        {/* <BlogGrid background="" /> */}

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default HomeTwo;
