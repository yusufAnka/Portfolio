import Meta from "../app/Components/Meta/Meta";
import Testimonial from "../app/Components/Testimonial/Testimonial";
import About from "./about";
import Blogs from "./blogs";
import Contact from "./contact";
import Experience from "./experience";
import Home from "./home";
import Portfolio from "./portfolio";
import Service from "./service";

const HomePageLayout = () => {
  return (
    <>
    <Meta title="Razu Islam - Home" />
      {/* Home */}
      <Home />
      {/* About */}
      <About />
      {/* Service */}
      <Service />
      {/* Experience */}
      <Experience />
      {/* Portfolio */}
      <Portfolio />
      {/* Blog */}
      <Blogs />
      {/* testimonial */}
      <Testimonial />
      {/* Contact */}
      <Contact />
    </>
  );
};

export default HomePageLayout;
