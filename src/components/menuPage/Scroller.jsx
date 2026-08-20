function Scroller({ categories, selectedCategory, onSelectCategory }) {
  return (
    <nav
      className="relative mx-auto flex h-[62px] w-full max-w-[1204px] items-center justify-center rounded-[15px] border border-solid border-[#00000052] px-2 py-2 sm:h-[86px] sm:px-3 sm:py-3"
      aria-label="Menu categories"
    >
      <div className="w-full overflow-x-auto overflow-y-hidden pb-1 sm:pb-2 [&::-webkit-scrollbar]:h-1.5 sm:[&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-black/20 hover:[&::-webkit-scrollbar-thumb]:bg-black/40">
        <ul className="flex w-max min-w-full items-center justify-start gap-2 px-0.5 py-0.5 sm:gap-5 sm:px-1 sm:py-1">
          {categories.map((category, index) => (
            <li key={`${category}-${index}`} className="flex-none">
              <button
                type="button"
                onClick={() => onSelectCategory(category)}
                className={`inline-flex items-center justify-center rounded-md border border-solid px-2 py-1 font-light leading-[normal] tracking-[-0.4px] whitespace-nowrap transition-colors [font-family:'Inter-Light',Helvetica] text-[16px] hover:border-[#4a4a4a] hover:bg-[#4a4a4a] hover:text-white sm:rounded-lg sm:px-3 sm:py-1.5 sm:tracking-[-0.72px] sm:text-[24px] ${
                  selectedCategory === category
                    ? "border-[#4a4a4a] bg-[#4a4a4a] text-white"
                    : "border-[#898383] text-black"
                }`}
                aria-label={`View ${category}`}
                aria-pressed={selectedCategory === category}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Scroller;
