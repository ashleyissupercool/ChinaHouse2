function Header() {
  const navigationItems = [
    { label: "HOME", href: "/", className: "w-[60px] ml-[-322px]" },
    { label: "MENU", href: "/menu", className: "w-[60px] ml-11" },
    { label: "CONTACT", href: "/", className: "w-[97px] ml-[27px]" },
    { label: "FAQ", href: "/", className: "w-[39px] ml-[30px]" },
  ];

  return (
    <header className="relative w-[1283px] h-[162px] mx-auto bg-[#ffeaea] border-b-2 [border-bottom-style:solid] border-[#00000033]">
      <a
        className="absolute top-6 left-[98px] w-[434px] h-[114px] flex items-center [font-family:'Inter-Black',Helvetica] font-black text-black text-[64px] tracking-[-1.92px] leading-[70.4px]"
        href="#home"
        aria-label="Chinahouse home"
      >
        CHINAHOUSE
      </a>
      <nav
        className="absolute top-[68px] left-[calc(50.00%_-_36px)] w-[368px] h-[23px]"
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
    </header>
  );
}

export default Header;
