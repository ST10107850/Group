import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>

        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://facebook.com"
            className="text-white hover:text-gray-400"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .732.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.892-4.788 4.656-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.503 0-1.795.714-1.795 1.762v2.315h3.589l-.467 3.622h-3.122v9.294h6.127c.733 0 1.325-.592 1.325-1.325v-21.351c0-.733-.592-1.325-1.325-1.325z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            className="text-white hover:text-gray-400"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.955-2.178-1.555-3.594-1.555-2.719 0-4.924 2.204-4.924 4.923 0 .386.043.763.128 1.124-4.092-.205-7.719-2.165-10.148-5.144-.425.729-.667 1.574-.667 2.476 0 1.71.87 3.213 2.191 4.096-.807-.026-1.566-.247-2.229-.617v.062c0 2.385 1.697 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.031-.928-.088.626 1.954 2.444 3.376 4.6 3.416-1.685 1.32-3.809 2.107-6.115 2.107-.398 0-.79-.023-1.177-.068 2.179 1.397 4.768 2.212 7.548 2.212 9.054 0 14.01-7.499 14.01-13.986 0-.213-.005-.426-.014-.637.961-.694 1.796-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            className="text-white hover:text-gray-400"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.002 3.002h-14.004c-.553 0-.998.445-.998.998v14.004c0 .552.445.998.998.998h14.004c.553 0 .998-.446.998-.998v-14.004c0-.553-.445-.998-.998-.998zm-11.249 14.251h-2.75v-8.502h2.75v8.502zm-1.376-9.752c-.882 0-1.598-.717-1.598-1.598s.716-1.598 1.598-1.598 1.598.717 1.598 1.598-.716 1.598-1.598 1.598zm10.377 9.752h-2.75v-4.239c0-1.013-.019-2.315-1.409-2.315-1.411 0-1.628 1.103-1.628 2.244v4.31h-2.75v-8.502h2.641v1.162h.037c.367-.695 1.264-1.428 2.602-1.428 2.785 0 3.3 1.832 3.3 4.214v4.554z" />
            </svg>
          </a>
        </div>

        <p>1234 Your Street, Your City, Your Country</p>
        <p>Email: info@yourcompany.com | Phone: (123) 456-7890</p>
      </div>
    </footer>
  );
}

export default Footer;
