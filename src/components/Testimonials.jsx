
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import test1 from "../assets/img/test1.jpeg";
import test2 from "../assets/img/test2.jpeg";
import test3 from "../assets/img/test3.jpeg";
import test4 from "../assets/img/team-4.jpg";
import test5 from "../assets/img/test1.jpeg";

const Testimonials = () => {
  return (
    <div
      className="container-xxl py-5 animate__animated animate__fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container">
        <div
          className="text-center animate__animated animate__fadeInUp mb-3"
          data-wow-delay="0.1s"
        >
          {/* <div className="bg-primary mb-3 mx-auto" style={{ width: '20px', height: '2px' }}></div> */}
          <h1 className="text-5xl mb-5">Testimonials</h1>
        </div>
        <Carousel
          showArrows={true}
          showStatus={false}
          showIndicators={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={600}
          showThumbs={false}
        >
        

          <div className="text-center p-3 bg-white shadow-md rounded-lg max-w-xs mx-auto">
            <img
              src={test2}
              alt="Client 2"
              className="block mx-auto rounded-full mb-2 w-32 h-32 object-cover"
            />
            <p className="text-lg text-gray-700 mb-4">
            Working with this team has been a game-changer for our business. Their dedication, expertise, and innovative approach have significantly improved our project outcomes. .....
            </p>
            <h4 className="font-semibold mt-4">Michael</h4>
            <span className="text-primary">Developer</span>
          </div>
          <div className="text-center p-3 bg-white shadow-md rounded-lg max-w-xs mx-auto">
            <img
              src={test3}
              alt="Client 2"
              className="block mx-auto rounded-full mb-2 w-32 h-32 object-cover"
            />
            <p className="text-lg text-gray-700 mb-4">
            Working with this team has been a game-changer for our business. Their dedication, expertise, and innovative approach have significantly improved our project outcomes. .....
            </p>
            <h4 className="font-semibold mt-4">Nhlakanipho</h4>
            <span className="text-primary">Developer</span>
          </div>
          <div className="text-center p-3 bg-white shadow-md rounded-lg max-w-xs mx-auto">
            <img
              src={test4}
              alt="Client 2"
              className=" block mx-auto rounded-full mb-2 w-32 h-32 object-cover"
            />
            <p className="text-lg text-gray-700 mb-4">
            Working with this team has been a game-changer for our business. Their dedication, expertise, and innovative approach have significantly improved our project outcomes. .....
            </p>
            <h4 className="font-semibold mt-4">SamKay</h4>
            <span className="text-primary">Developer</span>
          </div>

          <div className="text-center p-3 bg-white shadow-md rounded-lg max-w-xs mx-auto">
            <img
              src={test5}
              alt="Client 3"
              className="block mx-auto rounded-full mb-2 w-32 h-32 object-cover"
            />
            <p className="text-lg text-gray-700 mb-4">
            Working with this team has been a game-changer for our business. Their dedication, expertise, and innovative approach have significantly improved our project outcomes. .....
            </p>
            <h4 className="font-semibold mt-4">Nqobile</h4>
            <span className="text-primary">Developer</span>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
