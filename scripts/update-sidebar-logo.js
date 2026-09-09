const fs = require("fs");
let c = fs.readFileSync("components/admin/admin-sidebar.tsx", "utf8");

if (!c.includes('import Image from "next/image"')) {
  c = 'import Image from "next/image";\n' + c;
}

const sidebarBrandOld = `<div className="w-9 h-9 rounded-[8px] bg-brown-700 text-gold-500 flex items-center justify-center shrink-0">
            <SunMedium className="w-5 h-5" />
          </div>
          <div className="flex flex-col truncate">
            <span className="font-heading font-bold text-sm tracking-tight text-brown-900 truncate">
              SURYAKARYA
            </span>
            <span className="text-[10px] font-semibold text-gold-500 uppercase tracking-wider">
              Admin CMS Panel
            </span>
          </div>`;

const sidebarBrandNew = `<div className="relative w-9 h-9 rounded-xl overflow-hidden shrink-0 shadow-sm">
            <Image
              src="/images/logo-emblem.png"
              alt="Logo PT Surya Karya Energi"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col truncate">
            <span className="font-heading font-bold text-sm tracking-tight text-brown-900 truncate">
              SURYA KARYA ENERGI
            </span>
            <span className="text-[9px] font-bold text-gold-600 uppercase tracking-wider truncate">
              Reliable Power, Sustainable Future
            </span>
          </div>`;

c = c.replace(sidebarBrandOld, sidebarBrandNew);
fs.writeFileSync("components/admin/admin-sidebar.tsx", c, "utf8");
console.log("Updated components/admin/admin-sidebar.tsx!");
