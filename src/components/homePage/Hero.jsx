import featuredImage from "../../assets/sesamechickenplate.png";

function Hero() {
  return (
    <div className="w-full max-w-[1283px] mx-auto px-4 md:px-8">
      <div className="w-full flex flex-col gap-8 md:flex-row md:items-start md:gap-5 lg:gap-8">
        <div className="w-full md:w-[42%] lg:w-[581px]">
          <section
            className="h-auto min-h-[175px] w-full bg-white/70 rounded-[10px] p-4 shadow-md flex items-center md:min-h-[205px] lg:h-[205px] lg:w-[581px] lg:p-6"
            aria-label="Restaurant information"
          >
            <p className="w-full text-center text-[16px] font-medium leading-relaxed tracking-[-0.1px] text-black lg:text-[27px] lg:tracking-[-0.14px]">
              FRESH HOT CHINESE-AMERICAN FOOD. DINE-IN AND TAKEOUT OPTIONS ARE AVALIABLE. CALL TODAY TO PLACE YOUR ORDER!
            </p>
          </section>

          <div className="mt-6 flex w-full flex-col items-center justify-center gap-4 lg:mt-8 lg:w-[581px] lg:flex-row lg:gap-20">
            <a className="font-medium text-black text-[20px] lg:text-[24px] tracking-[-0.14px] underline whitespace-nowrap" href="/menu">
              SEE MENU
            </a>

            <a href="/menu" className="flex h-[44px] w-[190px] items-center justify-center rounded-lg bg-[#ff8e8e] transition-colors hover:bg-[#ff7575] lg:h-[50px] lg:w-[253px]">
              <span className="whitespace-nowrap text-center text-[16px] font-medium tracking-[-0.12px] text-black lg:text-[22px]" >
                CREATE AN ORDER
              </span>
            </a>
          </div>
        </div>

        <div className="w-full md:w-[52%] lg:ml-auto lg:w-[567px] lg:-mt-[120px]">
          <div className="mx-auto mb-6 flex h-auto w-full max-w-[467px] items-center justify-center p-2 md:p-4 lg:h-[402px] lg:p-6">
            <svg
            className="h-auto w-[220px] overflow-visible md:w-[280px] lg:h-[361px] lg:w-[422px]"
              viewBox="0 0 422 361"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Featured dish image"
            >
              <defs>
                <clipPath id="hero-feature-shape">
                  <path
                    d="M217.697 0.985272C257.888 3.08709 298.774 9.30163 331.128 29.6116C362.462 49.2817 377.578 80.9639 393.277 111.207C408.77 141.053 424.595 171.469 421.642 203.977C418.579 237.692 402.776 270.254 376.517 295.721C350.316 321.132 313.252 335.139 275.449 345.761C236.54 356.694 195.543 366.225 155.792 357.74C115.319 349.101 81.9399 325.575 54.8545 298.673C27.9171 271.917 8.73439 240.113 2.37704 205.363C-4.02453 170.37 2.8408 134.918 18.9171 102.232C35.3827 68.754 58.2039 35.9455 94.894 17.2578C131.136 -1.20188 175.489 -1.222 217.697 0.985272Z"
                    transform="translate(211 180.5) scale(0.92) translate(-211 -180.5)"
                  />
                </clipPath>
              </defs>

              <image
                href={featuredImage}
                x="-20"
                y="-20"
                width="462"
                height="401"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#hero-feature-shape)"
              />
              <path
                d="M217.697 0.985272C257.888 3.08709 298.774 9.30163 331.128 29.6116C362.462 49.2817 377.578 80.9639 393.277 111.207C408.77 141.053 424.595 171.469 421.642 203.977C418.579 237.692 402.776 270.254 376.517 295.721C350.316 321.132 313.252 335.139 275.449 345.761C236.54 356.694 195.543 366.225 155.792 357.74C115.319 349.101 81.9399 325.575 54.8545 298.673C27.9171 271.917 8.73439 240.113 2.37704 205.363C-4.02453 170.37 2.8408 134.918 18.9171 102.232C35.3827 68.754 58.2039 35.9455 94.894 17.2578C131.136 -1.20188 175.489 -1.222 217.697 0.985272Z"
                fill="none"
                stroke="#FF4D4D"
                strokeWidth="8"
                strokeLinecap="square"
                strokeDasharray="10 24"
                strokeOpacity="0.8"
              />
            </svg>
          </div>

          <article
            className="relative z-10 -mt-10 flex h-[180px] w-full max-w-[567px] flex-col items-start max-[280px]:h-[160px] lg:-mt-[96px] lg:h-[156px]"
            aria-labelledby="menu-item-title"
          >
            <div
              className="relative mb-[-11px] h-[180px] w-full self-stretch rounded-[10px] bg-[#ffffffb2] max-[280px]:h-[160px] lg:h-[167px]"
              aria-hidden="true"
            />
            <img
              className="absolute left-5 top-[25px] h-[96px] w-[104px] rounded-[24px] object-cover max-[280px]:left-3 max-[280px]:top-5 max-[280px]:h-[78px] max-[280px]:w-[82px] max-[280px]:translate-x-0 lg:left-11 lg:h-[115px] lg:w-[124px] lg:rounded-[30px]"
              alt="Sesame chicken with fried rice"
              src={featuredImage}
            />
            <div className="absolute left-[140px] top-[30px] h-[38px] w-[calc(100%-150px)] max-[280px]:left-[104px] max-[280px]:top-5 max-[280px]:h-auto max-[280px]:w-[calc(100%-114px)] max-[280px]:text-left lg:left-[205px] lg:top-[39px] lg:w-[368px]">
              <h2
                id="menu-item-title"
                className="[font-family:'Inter-Medium',Helvetica] text-xl font-medium leading-[29px] tracking-[-0.02px] text-black max-[375px]:text-[16px] max-[375px]:leading-[19px] max-[280px]:text-[13px] max-[280px]:leading-[15px]"
              >
                Sesame Chicken w. Fried Rice
              </h2>
              <p className="text-base leading-[23.2px] tracking-[-0.01px] max-[375px]:text-[13px] max-[375px]:leading-[16px] max-[280px]:text-[11px] max-[280px]:leading-[13px]">
                <span className="[font-family:'Inter-BoldItalic',Helvetica] font-bold italic text-[#f40000]">
                  combo
                </span>
                <span className="[font-family:'Inter-MediumItalic',Helvetica] font-medium italic text-black">
                  {" "}served w. an egg roll
                </span>
              </p>
            </div>
            <button
              type="button"
              className="absolute right-5 top-[132px] flex h-[30px] w-32 cursor-pointer items-center justify-center rounded-lg bg-[#ff8e8e] [font-family:'Inter-Medium',Helvetica] text-xs font-medium leading-[23.2px] tracking-[-0.08px] text-black transition-colors hover:bg-[#ff7777] active:bg-[#ff6969] max-[375px]:top-[126px] max-[280px]:right-3 max-[280px]:top-[112px] max-[280px]:h-[27px] max-[280px]:w-[112px] max-[280px]:translate-x-0 max-[280px]:text-[10px] lg:left-[284px] lg:right-auto lg:top-[107px] lg:h-[33px] lg:w-40 lg:text-base"
            >
              ADD TO ORDER
            </button>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Hero;
