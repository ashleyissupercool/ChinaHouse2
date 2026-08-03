function Footer() {
  return (
    <footer
      className="relative w-[1282px] h-[174px] mx-auto overflow-hidden"
      aria-label="Site footer"
    >
      <div className="flex w-[calc(100%_-_128px)] h-[calc(100%_-_6px)] items-start gap-[120px] px-0 py-20 relative top-[43px] left-16 border-t [border-top-style:solid] border-[#0000001a]">
        <div className="relative w-[1142px] h-8 mb-[-24.00px]">
          <p className="absolute -top-2 left-0 w-[307px] h-[21px] flex items-center [font-family:'Inter-Medium',Helvetica] font-medium text-[#0000008c] text-[13px] tracking-[-0.07px] leading-[18.9px] whitespace-nowrap">
            © 2026. ChinaHouseFairburn. All rights reserved.
          </p>
          <div className="absolute top-[-70px] left-0 w-[1155px] h-[70px]">
            <div className="relative left-[calc(50.00%_-_50px)] w-[100px] h-[70px] flex justify-center">
              <h2 className="flex items-center justify-center w-[386px] h-[53px] ml-[116px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] text-center tracking-[-0.64px] leading-[46.4px] whitespace-nowrap">
                CHINAHOUSEFAIRBURN
              </h2>
            </div>
          </div>
          <address className="absolute top-[-22px] left-[calc(50.00%_-_131px)] w-[391px] h-[27px] flex items-center justify-center not-italic [font-family:'Inter-Medium',Helvetica] font-medium text-black text-base text-center tracking-[0.32px] leading-[23.2px] whitespace-nowrap">
            17 Hudson Plz, Fairburn GA, 30213
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
