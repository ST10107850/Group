
import icon3 from "../assets/img/icon/icon3.png";
import icon4 from "../assets/img/icon/icon-4.png";
import icon2 from "../assets/img/icon/icon2.png";

const FactStart = () => {
  return (
    <div className="container-xxl py-5">
  <div className="container">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Container 1 */}
      <div className="flex flex-col bg-dark p-4 md:p-5 h-full wow fadeIn" data-wow-delay="0.1s">
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <img className="w-10 h-10 object-contain" src={icon3} alt="Icon" />
          </div>
          <h1 className="text-4xl text-black mb-0">01</h1>
        </div>
        <h5 className="text-white text-lg">Home Security</h5>
        <hr className="w-1/4 border-white" />
        <span className="text-white text-sm">A camera is an instrument used to capture and store images and videos, either digitally via an electronic image sensor, or chemically via a light-sensitive material such as photographic film.</span>
      </div>

      {/* Container 2 */}
      <div className="flex flex-col bg-dark p-4 md:p-5 h-full wow fadeIn" data-wow-delay="0.3s">
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <img className="w-10 h-10 object-contain" src={icon4} alt="Icon" />
          </div>
          <h1 className="text-4xl text-black mb-0">02</h1>
        </div>
        <h5 className="text-white text-lg">Access Control</h5>
        <hr className="w-1/4 border-white" />
        <span className="text-white text-sm">A camera is an instrument used to capture and store images and videos, either digitally via an electronic image sensor, or chemically via a light-sensitive material such as photographic film.</span>
      </div>

      {/* Container 3 */}
      <div className="flex flex-col bg-dark p-4 md:p-5 h-full wow fadeIn" data-wow-delay="0.5s">
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
            <img className="w-10 h-10 object-contain" src={icon2} alt="Icon" />
          </div>
          <h1 className="text-4xl text-black mb-0">03</h1>
        </div>
        <h5 className="text-white text-lg">24/7 Support</h5>
        <hr className="w-1/4 border-white" />
        <span className="text-white text-sm">A camera is an instrument used to capture and store images and videos, either digitally via an electronic image sensor, or chemically via a light-sensitive material such as photographic film.</span>
      </div>
    </div>
  </div>
</div>

  );
};

export default FactStart;
