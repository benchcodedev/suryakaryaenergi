const fs = require("fs");
let c = fs.readFileSync("app/admin/login/page.tsx", "utf8");

if (!c.includes('import Image from "next/image"')) {
  c = 'import Image from "next/image";\n' + c;
}

const loginBrandOld = `<div className="w-12 h-12 rounded-[8px] bg-brown-700 text-gold-500 flex items-center justify-center mx-auto shadow-sm">
            <SunMedium className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold font-heading text-brown-900">
            Masuk Panel Admin
          </h1>
          <p className="text-xs text-brown-500">
            PT Surya Karya Energi ?" Content Management System
          </p>`;

const loginBrandNew = `<div className="relative w-16 h-16 rounded-2xl overflow-hidden mx-auto shadow-md">
            <Image
              src="/images/logo-emblem.png"
              alt="Logo PT Surya Karya Energi"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold font-heading text-brown-900">
            Masuk Panel Admin
          </h1>
          <p className="text-xs font-bold text-gold-600 tracking-wider uppercase">
            Reliable Power, Sustainable Future
          </p>`;

c = c.replace(loginBrandOld, loginBrandNew);
fs.writeFileSync("app/admin/login/page.tsx", c, "utf8");
console.log("Updated app/admin/login/page.tsx!");
