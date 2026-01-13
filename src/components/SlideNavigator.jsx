const SlideNavigator = ({ activeIndex, count, onSelect }) => {
  return (
    <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex lg:flex-col lg:items-center lg:gap-4">
      {/* Navigation Dots */}
      <div className="flex flex-col gap-3">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className="relative"
            aria-label={`Navigate to section ${index + 1}`}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === index
                  ? 'bg-(--color-accent) ring-4 ring-(--color-accent)/30'
                  : 'bg-(--color-surface)'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SlideNavigator;
