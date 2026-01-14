const ScrollToTop = ({ onScrollToTop }) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onScrollToTop();
  };

  const handleTouchStart = (e) => {
    // Stop propagation to prevent document-level touch handlers from interfering
    e.stopPropagation();
  };

  return (
    <button
      onClick={handleClick}
      onTouchStart={handleTouchStart}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-(--color-accent) flex items-center justify-center hover:opacity-90 active:opacity-75 transition-opacity shadow-lg z-[9999]"
      style={{ touchAction: 'manipulation' }}
      aria-label="Scroll to top"
    >
      <svg
        className="w-5 h-5 sm:w-6 sm:h-6 text-(--color-text-dark)"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;
