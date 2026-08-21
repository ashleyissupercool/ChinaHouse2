import frontView from "../../assets/China House front.jpg"
import { useEffect, useRef, useState } from "react";

const businessDetails = {
  name: "CHINA HOUSE",
  address: "17 Hudson Plz, Fairburn, GA 30213",
  phone: "(770) 964-0099",
  hours: [
    { label: "Monday - Thursday:", value: "11:00 am - 9:30 pm" },
    { label: "Friday - Saturday:", value: "11:00 am - 10:30 pm" },
    { label: "Sunday:", value: "CLOSED" },
  ],
}

function LocationPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-1 h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.7 2.9.8a2 2 0 0 1 1.6 1.9Z" />
    </svg>
  );
}

function MapEmbed({ className }) {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden bg-[#f3e2d3] ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center text-center text-sm font-semibold text-black/65">
          Loading map…
        </div>
      )}
      {shouldLoad && (
        <iframe
          className="relative h-full w-full border-0"
          title="Map showing China House in Fairburn, Georgia"
          src="https://maps.google.com/maps?q=China+House,+17+Hudson+Plz,+Fairburn,+GA+30213&t=&z=15&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
}

function Location() {
  return (
    <div id="location">
    <main className="relative mx-auto hidden h-[1087px] w-[1283px] bg-[#FFF6EE] lg:block" aria-label="Location">
      <div
        className=" whitespace-nowrap absolute top-[90px] left-[371px] flex h-[98px] w-[541px] items-center justify-center [font-family:'Inter-Black',Helvetica] text-center text-[64px] font-black leading-[70.4px] tracking-[-1.92px] text-black"
        aria-label="Visit us today"
      >
        VISIT US TODAY!
      </div>
      <div className="absolute top-[260px] left-1/2 -translate-x-1/2 flex items-baseline gap-[350px] whitespace-nowrap">
        <h1 className="[font-family:'Inter-Black',Helvetica] text-[40px] font-black leading-[44px] tracking-[-1.2px] text-[#ff5c5c]">
          CHINA HOUSE
        </h1>
        <h2 className="[font-family:'Inter-Black',Helvetica] text-[40px] font-black leading-[44px] tracking-[-1.2px] text-[#ff5c5c]">
          HOURS
        </h2>
      </div>
      <section
        className="absolute top-[340px] left-[82px] grid w-[1120px] grid-cols-[541px_541px] gap-[38px] text-center text-black"
        aria-label={`${businessDetails.name} contact information and hours`}
      >
        <div className="flex w-full flex-col items-start gap-6">
          <div className="grid w-full grid-cols-[24px_1fr_24px] items-start gap-3">
            <LocationPinIcon />
            <address className="text-center not-italic [font-family:'Inter-Regular',Helvetica] text-[28px] leading-[46.4px] tracking-[-0.16px]">
              {businessDetails.address}
            </address>
            <span aria-hidden="true" />
          </div>
          <a
            className="grid w-full grid-cols-[24px_1fr_24px] items-center gap-3 [font-family:'Inter-Medium',Helvetica] text-[26px] font-medium leading-[39.2px] tracking-[-0.14px] underline"
            href="tel:+17709640099"
            aria-label={`Call ${businessDetails.name} at ${businessDetails.phone}`}
          >
            <PhoneIcon />
            <span className="text-center">{businessDetails.phone}</span>
            <span aria-hidden="true" />
          </a>
        </div>
        <dl className="[font-family:'Inter-Regular',Helvetica] text-[26px] leading-[40.6px] tracking-[-0.04px]">
          {businessDetails.hours.map((hours) => (
            <div key={hours.label}>
              <dt className="inline [font-family:'Inter-SemiBold',Helvetica] font-semibold">
                {hours.label}{" "}
              </dt>
              <dd className="inline">{hours.value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section
        className="absolute top-[527px] left-[115px] h-[470px] w-[1065px]"
        aria-label="Location views"
      >
        <h3 className="absolute top-[7px] left-[117px] flex h-[57px] w-[163px] items-center justify-center [font-family:'Inter-SemiBold',Helvetica] text-center text-2xl font-semibold leading-[34.8px] tracking-[-0.12px] text-black">
          Google Maps
        </h3>
        <MapEmbed className="absolute top-[66px] left-0 h-[397px] w-[508px]" />
        <figure className="absolute top-0 left-[553px] m-0 w-[508px]">
          <figcaption className="flex h-[57px] items-center justify-center [font-family:'Inter-SemiBold',Helvetica] text-center text-2xl font-semibold leading-[34.8px] tracking-[-0.12px] text-black">
            Front View
          </figcaption>
          <img
            className="mt-[9px] h-[397px] w-[508px] object-cover"
            src={frontView}
            alt="Front view of China House"
          />
        </figure>
      </section>
    </main>
    <section className="mx-auto w-[calc(100%-2rem)] max-w-[700px] rounded-[20px] bg-[#FFF6EE] px-5 py-9 text-center lg:hidden" aria-label="Location">
      <h2 className="text-[30px] font-black leading-tight tracking-[-0.8px] sm:text-[36px]">VISIT US TODAY!</h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2 sm:items-start">
        <div className="p-2 text-left">
          <h3 className="text-[23px] font-black text-[#ff5c5c] sm:text-[26px]">CHINA HOUSE</h3>
          <div className="mt-3 grid grid-cols-[24px_1fr_24px] items-start gap-2">
            <LocationPinIcon />
            <address className="text-center not-italic text-[16px] leading-relaxed sm:text-lg">{businessDetails.address}</address>
            <span aria-hidden="true" />
          </div>
          <a className="mt-3 grid grid-cols-[24px_1fr_24px] items-center gap-2 text-[16px] font-medium underline sm:text-lg" href="tel:+17709640099">
            <PhoneIcon />
            <span className="text-center">{businessDetails.phone}</span>
            <span aria-hidden="true" />
          </a>
        </div>
        <div className="p-2">
          <h3 className="text-[23px] font-black text-[#ff5c5c] sm:text-[26px]">HOURS</h3>
          <dl className="mt-3 text-[16px] leading-relaxed sm:text-lg">
            {businessDetails.hours.map((hours) => (
              <div key={hours.label}>
                <dt className="inline font-semibold">{hours.label} </dt>
                <dd className="inline">{hours.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <figure className="m-0">
          <figcaption className="mb-3 text-lg font-semibold sm:text-xl">Google Maps</figcaption>
          <MapEmbed className="h-[180px] w-full rounded-xl sm:h-[240px]" />
        </figure>
        <figure className="m-0">
          <figcaption className="mb-3 text-lg font-semibold sm:text-xl">Front View</figcaption>
          <img className="h-[180px] w-full rounded-xl object-cover sm:h-[240px]" src={frontView} alt="Front view of China House" />
        </figure>
      </div>
    </section>
    </div>
  )
}

export default Location
