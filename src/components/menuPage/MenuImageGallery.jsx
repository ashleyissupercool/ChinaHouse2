import { useEffect, useState } from "react";
import menuBack from "../../assets/menuback.jpeg";
import menuLeft from "../../assets/menuleft.jpeg";
import menuRight from "../../assets/menuright.jpeg";

const menuImages = [
  { src: menuBack, alt: "China House menu back" },
  { src: menuLeft, alt: "China House menu left page" },
  { src: menuRight, alt: "China House menu right page" },
];

function MenuImageGallery() {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape") setActiveImage(null);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <section className="mx-auto w-full max-w-[1204px] rounded-xl border border-black/15 bg-transparent p-2 sm:p-3" aria-labelledby="menu-images-title">
      <div className="mb-2 flex items-center justify-between gap-3">
        <div>
          <h2 id="menu-images-title" className="text-base font-bold sm:text-xl">PAPER MENU</h2>
          <p className="text-xs text-black/65 sm:text-sm">Select a page to enlarge it.</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {menuImages.map((image) => (
          <button
            key={image.alt}
            type="button"
            onClick={() => setActiveImage(image)}
            className="group aspect-square overflow-hidden rounded-md border border-black/15 bg-transparent text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#4a4a4a] focus:ring-offset-2"
            aria-label={`Enlarge ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.02]" />
          </button>
        ))}
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-label={activeImage.alt} onClick={() => setActiveImage(null)}>
          <div className="relative max-h-full max-w-full" onClick={(event) => event.stopPropagation()}>
            <img src={activeImage.src} alt={activeImage.alt} className="max-h-[90dvh] max-w-[92vw] rounded-lg bg-[#f6f0e9] object-contain shadow-2xl" />
            <button type="button" onClick={() => setActiveImage(null)} className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl font-bold text-black shadow-md transition hover:bg-black hover:text-white" aria-label="Close enlarged menu image">
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default MenuImageGallery;
