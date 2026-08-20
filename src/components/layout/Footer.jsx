function Footer() {
  return (
    <footer className="relative mx-auto w-full max-w-[1282px] lg:before:absolute lg:before:left-1/2 lg:before:top-[43px] lg:before:h-px lg:before:w-screen lg:before:-translate-x-1/2 lg:before:bg-[#0000001a]" aria-label="Site footer">
      <div className="border-t border-[#0000001a] px-5 py-8 lg:hidden">
        <h2 className="text-center text-[22px] font-semibold tracking-[-0.4px] text-black">CHINAHOUSEFAIRBURN</h2>
        <address className="mt-2 text-center text-sm font-medium not-italic text-black">17 Hudson Plz, Fairburn GA, 30213</address>
        <p className="mt-6 text-left text-xs font-medium text-[#0000008c]">© 2026. ChinaHouseFairburn. All rights reserved.</p>
      </div>

      <div className="relative hidden h-[174px] overflow-hidden lg:block">
        <div className="absolute top-[43px] left-16 flex h-[calc(100%_-_6px)] w-[calc(100%_-_128px)] items-start gap-[120px] py-20">
          <div className="relative mb-[-24px] h-8 w-[1142px]">
            <p className="absolute -top-2 left-0 flex h-[21px] w-[307px] items-center text-[13px] font-medium tracking-[-0.07px] text-[#0000008c]">© 2026. ChinaHouseFairburn. All rights reserved.</p>
            <div className="absolute top-[-70px] left-0 h-[70px] w-[1155px]">
              <div className="relative left-[calc(50%_-_50px)] flex h-[70px] w-[100px] justify-center">
                <h2 className="ml-[116px] flex h-[53px] w-[386px] items-center justify-center whitespace-nowrap text-center text-[32px] font-semibold tracking-[-0.64px] text-black">CHINAHOUSEFAIRBURN</h2>
              </div>
            </div>
            <address className="absolute top-[-22px] left-[calc(50%_-_131px)] flex h-[27px] w-[391px] items-center justify-center whitespace-nowrap text-center text-base font-medium tracking-[0.32px] text-black not-italic">17 Hudson Plz, Fairburn GA, 30213</address>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
