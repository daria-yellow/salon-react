import type React from "react";
import Woman from "../../images/Woman.jpg";
import { ServicesDescription } from "../../components/ServicesDescription";
import { OurWorks, Products, Reviews } from "../../components";

const Landing: React.FC = () => {
  return (
    <div className="landing">
      <img src={Woman} width="100%" alt="Woman"></img>
      <ServicesDescription />
      <OurWorks />
      <Products />
      <Reviews />
    </div>
  );
};

export default Landing;
