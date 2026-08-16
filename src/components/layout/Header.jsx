import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigationItems = [
    { label: "HOME", href: "/", className: "w-[60px] ml-[-322px]" },
    { label: "MENU", href: "/menu", className: "w-[60px] ml-11" },
    { label: "CONTACT", href: "/", className: "w-[97px] ml-[27px]" },
    { label: "FAQ", href: "/#faq", className: "w-[39px] ml-[30px]" },
  ];

  return (
    <header className="relative mx-auto w-full max-w-[1283px] bg-[#ffeaea] border-b-2 [border-bottom-style:solid] border-[#00000033] lg:h-[162px]">
      <div className="flex h-[86px] items-center justify-between px-5 lg:hidden">
        <a className="font-black text-[32px] tracking-[-1.2px] text-black" href="#home" aria-label="Chinahouse home">CHINAHOUSE</a>
        <button type="button" className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-lg border border-black/20" aria-label="Toggle navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span className="h-0.5 w-6 bg-black" />
          <span className="h-0.5 w-6 bg-black" />
          <span className="h-0.5 w-6 bg-black" />
        </button>
      </div>
      <nav className={`${menuOpen ? "flex" : "hidden"} flex-col gap-1 border-t border-black/10 px-5 py-4 lg:hidden`} aria-label="Mobile navigation">
        {navigationItems.map((item) => (
          <a key={item.label} className="rounded-lg px-4 py-3 text-lg font-medium hover:bg-white/60" href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
        ))}
        <a className="mt-2 rounded-lg bg-[#ff8e8e] px-4 py-3 text-center text-lg font-medium" href="/order-list" onClick={() => setMenuOpen(false)}>ORDERLIST</a>
      </nav>
      <div className="hidden lg:block">
      <a
        className="absolute top-6 left-[98px] w-[434px] h-[114px] flex items-center [font-family:'Inter-Black',Helvetica] font-black text-black text-[64px] tracking-[-1.92px] leading-[70.4px]"
        href="#home"
        aria-label="Chinahouse home"
      >
        CHINAHOUSE
      </a>
      <nav
        className="absolute top-[68px] left-[calc(50.00%_-_16px)] w-[368px] h-[23px]"
        aria-label="Primary navigation"
      >
        <div className="relative left-[322px] w-[31px] h-[23px] flex">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              className={`${item.className} flex items-center justify-center mt-[-3px] h-[29px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-xl text-center tracking-[-0.10px] leading-[29.0px] underline whitespace-nowrap`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      <a
        className="flex w-[151px] h-12 items-center justify-center absolute top-14 right-[86px] bg-[#ff8e8e] rounded-lg [font-family:'Inter-Medium',Helvetica] font-medium text-black text-2xl text-center tracking-[-0.12px] leading-[34.8px] whitespace-nowrap"
        href="/order-list"
      >
        ORDERLIST
      </a>
      </div>
    </header>
  );
}

export default Header;

