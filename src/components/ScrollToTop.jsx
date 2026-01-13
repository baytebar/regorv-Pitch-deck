const ScrollToTop = ({ onScrollToTop }) => {
  return (
    <button
      onClick={onScrollToTop}
      className="fixed bottom-4 md:bottom-8 right-4 md:right-8 w-12 h-12 rounded-full bg-(--color-accent) flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg z-50"
      aria-label="Scroll to top"
    >
      <svg
        className="w-6 h-6 text-(--color-text-dark)"
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
