const fs = require("fs");
let c = fs.readFileSync("components/layout/navbar.tsx", "utf8");

// Ensure Image is imported
if (!c.includes('import Image from "next/image"')) {
  c = 'import Image from "next/image";\n' + c;
}

// Replace desktop logo
const desktopLogoOld = `<div
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-105",
                isScrolled
                  ? "bg-brown-700 text-gold-500 shadow-brown-900/10"
                  : "bg-white/15 backdrop-blur-md border border-white/30 text-gold-400 shadow-black/20"
              )}
            >
              <SunMedium className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-heading font-extrabold text-lg leading-none tracking-tight transition-colors",
                  isScrolled ? "text-brown-900" : "text-white drop-shadow-sm"
                )}
              >
                SURYA KARYA ENERGI
              </span>
              <span
                className={cn(
                  "text-[10px] font-semibold tracking-wider uppercase mt-1 transition-colors",
                  isScrolled ? "text-gold-600" : "text-amber-300 drop-shadow-sm"
                )}
              >
                EPC & Renewable Solutions
              </span>
            </div>`;

const desktopLogoNew = `<div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/images/logo-emblem.png"
                alt="Logo PT Surya Karya Energi"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-heading font-extrabold text-lg leading-none tracking-tight transition-colors",
                  isScrolled ? "text-brown-900" : "text-white drop-shadow-sm"
                )}
              >
                SURYA KARYA ENERGI
              </span>
              <span
                className={cn(
                  "text-[9px] font-bold tracking-wider uppercase mt-1 transition-colors",
                  isScrolled ? "text-gold-600" : "text-amber-300 drop-shadow-sm"
                )}
              >
                Reliable Power, Sustainable Future
              </span>
            </div>`;

// Replace mobile drawer logo
const mobileLogoOld = `<div className="w-9 h-9 rounded-xl bg-brown-700 flex items-center justify-center text-gold-500 shadow-sm">
                    <SunMedium className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-base text-brown-900">
                      Surya Karya Energi
                    </span>
                    <span className="text-[10px] font-semibold text-gold-600">
                      EPC & Clean Energy
                    </span>
                  </div>`;

const mobileLogoNew = `<div className="relative w-9 h-9 rounded-xl overflow-hidden shrink-0 shadow-sm">
                    <Image
                      src="/images/logo-emblem.png"
                      alt="Logo PT Surya Karya Energi"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-base text-brown-900">
                      Surya Karya Energi
                    </span>
                    <span className="text-[9px] font-bold text-gold-600 uppercase tracking-wider">
                      Reliable Power, Sustainable Future
                    </span>
                  </div>`;

c = c.replace(desktopLogoOld, desktopLogoNew);
c = c.replace(mobileLogoOld, mobileLogoNew);

fs.writeFileSync("components/layout/navbar.tsx", c, "utf8");
console.log("Updated components/layout/navbar.tsx with logo and motto!");
