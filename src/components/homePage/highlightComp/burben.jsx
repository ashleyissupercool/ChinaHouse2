import burbenChickenImage from "../../../assets/burbenchicken.jpg";

function BourbonChickenSection() {
  return (
    <article
      className="absolute left-0 top-0 flex h-[456px] w-[423px] flex-col items-start rounded-[20px]"
      aria-labelledby="burben-chicken-title"
    >
      <div
        className="relative h-[456px] w-full self-stretch rounded-[20px] bg-[#fff6ee]"
        aria-hidden="true"
      />
      <img
        className="absolute left-[69px] top-5 h-[249px] w-[285px] aspect-[1.14] object-cover rounded-2xl"
        alt="Burben Chicken Large with white rice"
        src={burbenChickenImage}
      />
      <p
        id="burben-chicken-title"
        className="absolute left-[23px] top-[294px] h-[60px] w-[378px] text-center text-xl leading-[25px] tracking-[-0.10px]"
      >
        <span className="[font-family:'Inter-Italic',Helvetica] italic tracking-[-0.02px] text-black">
          Burben Chicken{" "}
        </span>
        <span className="[font-family:'Inter-BoldItalic',Helvetica] font-bold italic tracking-[-0.02px] text-[#ff0505]">
          (Large)
          <br />
        </span>
        <span className="[font-family:'Inter-Italic',Helvetica] text-base italic leading-[23.2px] tracking-[-0.01px] text-black">
          w. White Rice on side
          <br />
        </span>
        <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[-0.02px] text-black">
          $15.50
        </span>
      </p>
      <button
        type="button"
        className="absolute left-[116px] top-[378px] flex h-[42px] w-48 items-center justify-center rounded-lg bg-[#ff8e8e] focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
        aria-label="Add Burben Chicken to order"
      >
        <span className="flex w-fit items-center justify-center whitespace-nowrap text-center text-2xl font-medium leading-[34.8px] tracking-[-0.12px] text-black [font-family:'Inter-Medium',Helvetica]">
          ADD TO ORDER
        </span>
      </button>
    </article>
  );
}

export default BourbonChickenSection;
