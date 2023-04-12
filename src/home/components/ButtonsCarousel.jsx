export const ButtonsCarousel = ({ handleNext, handlePrev }) => {
  return (
    <>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full lg:bg-neutral-800 lg:group-hover:bg-neutral-900 lg:group-focus:ring-4 lg:group-focus:ring-neutral-600 group-focus:outline-none transition-all duration-300">
          <svg
            aria-hidden="true"
            className="w-11 h-11 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              srtokelinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </span>
      </button>

      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full lg:bg-neutral-800 lg:group-hover:bg-neutral-900 lg:group-focus:ring-4 lg:group-focus:ring-neutral-600 group-focus:outline-none transition-all duration-300">
          <svg
            aria-hidden="true"
            className="w-11 h-11 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              srtokelinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </span>
      </button>
    </>
  );
};
