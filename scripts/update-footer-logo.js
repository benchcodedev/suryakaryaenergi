const fs = require("fs");
let c = fs.readFileSync("components/layout/footer.tsx", "utf8");

if (!c.includes('import Image from "next/image"')) {
  c = 'import Image from "next/image";\n' + c;
}

const footerLogoOld = `<div className="w-11 h-11 rounded-xl bg-gold-500 text-white flex items-center justify-center font-bold shadow-glow-gold">
                <SunMedium className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg tracking-tight text-white">
                  SURYA KARYA ENERGI
                </span>
                <span className="text-[10px] text-amber-300 tracking-wider uppercase font-semibold">
                  EPC & Clean Energy Solutions
                </span>
              </div>`;

const footerLogoNew = `<div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 shadow-glow-gold">
                <Image
                  src="/images/logo-emblem.png"
                  alt="Logo PT Surya Karya Energi"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg tracking-tight text-white">
                  SURYA KARYA ENERGI
                </span>
                <span className="text-[10px] text-amber-300 tracking-wider uppercase font-semibold">
                  Reliable Power, Sustainable Future
                </span>
              </div>`;

c = c.replace(footerLogoOld, footerLogoNew);
fs.writeFileSync("components/layout/footer.tsx", c, "utf8");
console.log("Updated components/layout/footer.tsx!");
