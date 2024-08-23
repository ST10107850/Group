import '@fortawesome/fontawesome-free/css/all.min.css';

const TopStart = () => {
  return (
    <div className="bg-dark px-5 py-1">
      <div className="hidden lg:flex lg:justify-between text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center p-2">
              <i className="fas fa-map-marker-alt text-white text-xs"></i>
            </div>
            <small className="text-gray-500">123 Street, New York, USA</small>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center p-1">
              <i className="fas fa-envelope-open text-white text-xs"></i>
            </div>
            <small className="text-gray-500">info@example.com</small>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center p-1">
              <i className="fas fa-phone-alt text-white text-xs"></i>
            </div>
            <small className="text-gray-500">+012 345 6789</small>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center p-1">
              <i className="far fa-clock text-white text-xs"></i>
            </div>
            <small className="text-gray-600">Mon - Fri : 9AM - 9PM</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopStart;
