import  { useEffect, useState } from "react";
import aboutPic from "../assets/img/about.jpg";
import Icon1 from "../assets/img/icon/icon1.png";
import Icon2 from "../assets/img/icon/icon5.png";

const CounterUp = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const speed = 200;
    const increment = target / speed;

    const updateCount = () => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        if (newCount < target) {
          return Math.ceil(newCount);
        } else {
          clearInterval(interval);
          return target;
        }
      });
    };

    const interval = setInterval(updateCount, 1);

    return () => clearInterval(interval);
  }, [target]);

  return <div className="text-2xl font-bold">{count}</div>;
};

const About = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-100 overflow-hidden my-5  md:px-0">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <img
          src={aboutPic}
          alt="About Us"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 md:ml-10">
        <div className="mt-12 md:mt-24 bg-green-600 h-0.5 w-20" />
        <h1 className="mt-4 font-bold text-2xl md:text-3xl">About Us</h1>
        <p className="mt-5 text-base md:text-sm">
          Time passes as the situation develops. Painful is the pain that sits.
          Some pain is with others. The situation is, and the text sits, but
          often the text sits as two, rightly placed together.
        </p>
        <div className="mt-10 flex flex-col md:flex-row items-center">
          <div className="flex items-center mb-6 md:mb-0 md:mr-8">
            <img
              src={Icon1}
              alt="Icon 1"
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <div className="flex flex-col ml-4 md:ml-6">
              <CounterUp target={584} />
              <h2 className="mt-3 text-green-600 text-sm md:text-base">
                Happy Clients
              </h2>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src={Icon2}
              alt="Icon 2"
              className="w-12 h-12 md:w-16 md:h-16"
            />
            <div className="flex flex-col ml-4 md:ml-6">
              <CounterUp target={585} />
              <h2 className="mt-3 text-green-600 text-sm md:text-base">
                Projects Done
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-start mt-12">
          <button className="p-2 pl-4 pr-4 rounded-full bg-green-600 text-white">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
