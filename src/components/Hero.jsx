import '@fortawesome/fontawesome-free/css/all.min.css';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import carousel1 from "../assets/img/carousel1.png";
import carousel2 from "../assets/img/carousel2.png";
import carousel3 from "../assets/img/carousel3.png";

const DotIndicator = () => (
  <div className="flex space-x-2">
    {[0, 1, 2].map((index) => (
      <Dot
        key={index}
        slide={index}
        className="w-2.5 h-2.5 bg-white rounded-full"
      />
    ))}
  </div>
);

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col overflow-hidden">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={3}
        interval={3000}
        isPlaying={true}
        infinite={true}
      >
        <Slider className="relative w-full h-full">
          {[carousel1, carousel2, carousel3].map((carouselImage, index) => (
            <Slide key={index} index={index}>
              <div
                className="relative w-full h-full flex items-center justify-center"
                style={{
                  backgroundImage: `url(${carouselImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 py-8">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-4 font-bold">
                    {index === 0
                      ? "Best CCTV & Security Solution For You"
                      : index === 1
                      ? "Smart Security Solution For All Business"
                      : "Innovative Solution For Security System"}
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white mb-6 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl">
                  A camera is an instrument used to capture and store images and videos, either digitally via an electronic image sensor, or chemically via a light-sensitive material such as photographic film.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a
                      href="#"
                      className="btn btn-primary rounded-full py-2 px-4 sm:py-3 sm:px-6 bg-primary text-white hover:bg-blue-700 text-xs sm:text-sm"
                    >
                      Read More
                    </a>
                    <a
                      href="#"
                      className="btn btn-light rounded-full py-2 px-4 sm:py-3 sm:px-6 bg-gray-200 text-gray-800 hover:bg-gray-300 text-xs sm:text-sm"
                    >
                      Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </Slider>

        <div className="carousel-controls absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 sm:space-x-4 px-4">
          <ButtonBack className="text-white hover:bg-gray-700 bg-gray-900 p-1 sm:p-2 rounded-full text-xs sm:text-sm">
            <i className="fas fa-chevron-left"></i>
          </ButtonBack>
          <DotIndicator />
          <ButtonNext className="text-white hover:bg-gray-700 bg-gray-900 p-1 sm:p-2 rounded-full text-xs sm:text-sm">
            <i className="fas fa-chevron-right"></i>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default Hero;
