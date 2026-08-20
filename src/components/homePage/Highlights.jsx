import BeefBroccoliComboSection from "./highlightComp/beef.jsx";
import BourbonChickenSection from "./highlightComp/burben.jsx";
import BraisedWingsSection from "./highlightComp/braised.jsx";
import GeneralTsoChickenSection from "./highlightComp/general.jsx";
import HoneyChickenSection from "./highlightComp/honey.jsx";
import PepperSteakSection from "./highlightComp/pepper.jsx";
import EggFooYoungSection from "./highlightComp/shrimpEgg.jsx";

function Highlights() {
  return (
    <section aria-labelledby="highlights-title">
      <div className="relative mx-auto flex w-full max-w-[553px] items-center justify-center">
        <h1
          id="highlights-title"
          className="relative flex items-center justify-center whitespace-nowrap text-center font-black text-[30px] leading-tight tracking-[-1px] text-black lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-1.92px] font-['Inter-Black',sans-serif]"
        >
          ORDER HIGHLIGHTS
        </h1>
      </div>

      <main
        className="relative mx-auto mt-6 h-[290px] w-full max-w-[1196px] overflow-x-auto px-4 sm:h-[470px] sm:px-0 [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-black/20 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-black/40"        aria-label="Menu selections"
      >
        <div className="flex w-max gap-4 sm:gap-6">
          <div className="relative h-[274px] w-[254px] shrink-0 [&>article]:origin-top-left [&>article]:scale-[0.6] sm:h-[456px] sm:w-[423px] sm:[&>article]:scale-100"><BourbonChickenSection /></div>
          <div className="relative h-[274px] w-[254px] shrink-0 [&>article]:origin-top-left [&>article]:scale-[0.6] sm:h-[456px] sm:w-[423px] sm:[&>article]:scale-100"><BeefBroccoliComboSection /></div>
          <div className="relative h-[274px] w-[254px] shrink-0 [&>article]:origin-top-left [&>article]:scale-[0.6] sm:h-[456px] sm:w-[423px] sm:[&>article]:scale-100"><BraisedWingsSection /></div>
          <div className="relative h-[274px] w-[254px] shrink-0 [&>article]:origin-top-left [&>article]:scale-[0.6] sm:h-[456px] sm:w-[423px] sm:[&>article]:scale-100"><GeneralTsoChickenSection /></div>
          <div className="relative h-[274px] w-[254px] shrink-0 [&>article]:origin-top-left [&>article]:scale-[0.6] sm:h-[456px] sm:w-[423px] sm:[&>article]:scale-100"><HoneyChickenSection /></div>
          <div className="relative h-[274px] w-[254px] shrink-0 [&>article]:origin-top-left [&>article]:scale-[0.6] sm:h-[456px] sm:w-[423px] sm:[&>article]:scale-100"><PepperSteakSection /></div>
          <div className="relative h-[274px] w-[254px] shrink-0 [&>article]:origin-top-left [&>article]:scale-[0.6] sm:h-[456px] sm:w-[423px] sm:[&>article]:scale-100"><EggFooYoungSection /></div>
        </div>
      </main>
      <div className="mt-6 flex justify-center">
        <a
          href="/menu"
          className="flex h-[44px] w-[190px] items-center justify-center rounded-lg bg-[#ffdca2] text-[16px] font-extrabold leading-[49.3px] tracking-[-0.17px] text-black lg:h-[75px] lg:w-[323px] lg:text-[30px] [font-family:'Inter-ExtraBold',Helvetica]"
          aria-label="View Full Menu"
        >
          <span className="whitespace-nowrap">VIEW FULL MENU</span>
        </a>
      </div>
    </section>
    
  );
}

export default Highlights;
