import { memo } from "react";
import srecLogo from "@/assets/srec-logo.png";
import solidarityLogo from "@/assets/solidarity-foundation-logo.png";

interface TrustedClient {
  name: string;
  logo: string;
  alt: string;
}

const trustedClients: TrustedClient[] = [
  {
    name: "Sri Ramakrishnan Engineering College",
    logo: srecLogo,
    alt: "SREC Logo",
  },
  {
    name: "Solidarity Foundation",
    logo: solidarityLogo,
    alt: "Solidarity Foundation Logo",
  },
];

const HeroTrustedBy = memo(() => {
  return (
    <div className="mt-12 md:mt-16 pt-8 border-t border-white/10">
      <p className="text-xs md:text-sm text-white/50 text-center mb-6 uppercase tracking-wider">
        Trusted by Educational Institutions & Organizations
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
        {trustedClients.map((client) => (
          <div
            key={client.name}
            className="flex items-center gap-3 group hover:opacity-100 opacity-80 transition-opacity duration-300"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden bg-white flex items-center justify-center shadow-lg">
              <img
                src={client.logo}
                alt={client.alt}
                className="w-full h-full object-contain p-1"
                loading="lazy"
              />
            </div>
            <span className="text-white/70 font-medium text-sm md:text-base group-hover:text-white/90 transition-colors hidden sm:block">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
});

HeroTrustedBy.displayName = "HeroTrustedBy";

export default HeroTrustedBy;
