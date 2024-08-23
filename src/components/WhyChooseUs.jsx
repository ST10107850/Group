import React from "react";
import aboutPic from "../assets/img/feature.jpg";
import Icon1 from "../assets/img/icon/icon7.png";
import services from "../assets/img/icon/icon10.png";
import smart from "../assets/img/icon/icon3.png";
import suport from "../assets/img/icon/icon2.png";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-100 overflow-hidden my-5 px-4 md:px-0">
      <div className="w-full md:w-1/2 flex flex-col md:items-start md:ml-32">
        <div className="mt-12 md:mt-28 bg-green-600 h-0.5 w-20" />
        <h1 className="mt-4 font-bold text-2xl md:text-3xl">Why Choose Us</h1>
        <p className="mt-5 text-base md:text-sm">
          Time passes as the situation develops. Painful is the pain that sits.
          Some pain is with others. The situation is, and the text sits, but
          often the text sits as two, rightly placed together.
        </p>
        <div className="mt-12 flex flex-col md:flex-row">
          <div className="flex flex-row md:flex-col items-start md:items-start mb-8 md:mb-0">
            <div className="flex items-center mb-6 md:mb-8">
              <img
                src={Icon1}
                alt="Icon 1"
                className="w-12 h-12 md:w-16 md:h-16"
              />
              <div className="flex flex-col ml-4 md:ml-0">
                <h2 className="text-green-600 text-base md:text-lg">Trusted</h2>
                <h3 className="text-sm md:text-base">Security</h3>
              </div>
            </div>
            <div className="flex items-center mr-32 mb-6 md:mb-8">
              <img
                src={smart}
                alt="Icon 2"
                className="w-12 h-12 md:w-16 md:h-16"
              />
              <div className="flex flex-col ml-4 md:ml-0">
                <h2 className="text-green-600 text-base md:text-lg">Smart</h2>
                <h3 className="text-sm md:text-base">Systems</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col items-start">
            <div className="flex items-center mb-6 md:mb-8">
              <img
                src={services}
                alt="Icon 3"
                className="w-12 h-12 md:w-16 md:h-16"
              />
              <div className="flex flex-col ml-4 md:ml-0">
                <h2 className="text-green-600 text-base md:text-lg">Quality</h2>
                <h3 className="text-sm md:text-base">Service</h3>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={suport}
                alt="Icon 4"
                className="w-12 h-12 md:w-16 md:h-16"
              />
              <div className="flex flex-col ml-4 md:ml-0">
                <h2 className="text-green-600 text-base md:text-lg">
                  24/7 Hours
                </h2>
                <h3 className="text-sm md:text-base">Support</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={aboutPic}
          alt="Feature"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
