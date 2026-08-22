import BeefBroccoliComboSection from "./highlightComp/beef.jsx";
import BourbonChickenSection from "./highlightComp/burben.jsx";
import BraisedWingsSection from "./highlightComp/braised.jsx";
import GeneralTsoChickenSection from "./highlightComp/general.jsx";
import HoneyChickenSection from "./highlightComp/honey.jsx";
import PepperSteakSection from "./highlightComp/pepper.jsx";
import EggFooYoungSection from "./highlightComp/shrimpEgg.jsx";
import { useState } from "react";

function Highlights() {
  const [addedItemName, setAddedItemName] = useState("");

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
          <div className="relative h-[274px] w-[254px] shrink-0 [&>article]:origin-top-left [&>article]:scale-[0.6] sm:h-[456px] sm:w-[423px] sm:[&>article]:scale-100"><BourbonChickenSection onAdded={setAddedItemName} /></div>
          <div className="relative h-[274px] w-[254px] shrink-0 [&>article]:origin-top-left [&>article]:scale-[0.6] sm:h-[456px] sm:w-[423px] sm:[&>article]:scale-100"><BeefBroccoliComboSection onAdded={setAddedItemName} /></div>
          <div className="relative h-[274px] w-[254px] shrink-0 [&>article]:origin-top-left [&>article]:scale-[0.6] sm:h-[456px] sm:w-[423px] sm:[&>article]:scale-100"><BraisedWingsSection onAdded={setAddedItemName} /></div>
          <div className="relative h-[274px] w-[254px] shrink-0 [&>article]:origin-top-left [&>article]:scale-[0.6] sm:h-[456px] sm:w-[423px] sm:[&>article]:scale-100"><GeneralTsoChickenSection onAdded={setAddedItemName} /></div>
          <div className="relative h-[274px] w-[254px] shrink-0 [&>article]:origin-top-left [&>article]:scale-[0.6] sm:h-[456px] sm:w-[423px] sm:[&>article]:scale-100"><HoneyChickenSection onAdded={setAddedItemName} /></div>
          <div className="relative h-[274px] w-[254px] shrink-0 [&>article]:origin-top-left [&>article]:scale-[0.6] sm:h-[456px] sm:w-[423px] sm:[&>article]:scale-100"><PepperSteakSection onAdded={setAddedItemName} /></div>
          <div className="relative h-[274px] w-[254px] shrink-0 [&>article]:origin-top-left [&>article]:scale-[0.6] sm:h-[456px] sm:w-[423px] sm:[&>article]:scale-100"><EggFooYoungSection onAdded={setAddedItemName} /></div>        </div>
      </main>
      {addedItemName && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 px-4" role="dialog" aria-modal="true" aria-labelledby="highlight-added-to-order-title">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl">
            <h2 id="highlight-added-to-order-title" className="text-2xl font-bold">Added to your order</h2>
            <p className="mt-2 text-black/70">{addedItemName} has been added.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a href="/order-list" className="rounded-lg bg-[#4a4a4a] px-5 py-2.5 font-semibold text-white transition-colors hover:bg-black">View Order List</a>
              <button type="button" onClick={() => setAddedItemName("")} className="rounded-lg border border-black/25 px-5 py-2.5 font-semibold transition-colors hover:bg-black/5">Keep Browsing</button>
            </div>
          </div>
        </div>
      )}
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
