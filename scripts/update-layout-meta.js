const fs = require("fs");
let c = fs.readFileSync("app/layout.tsx", "utf8");

c = c.replace(
  'default: "PT Surya Karya Energi ?" Solusi Rekayasa & Energi Terbarukan",',
  'default: "PT Surya Karya Energi — Reliable Power, Sustainable Future",\n    icons: {\n      icon: "/images/favicon.png",\n      shortcut: "/images/favicon.png",\n      apple: "/images/logo-emblem.png",\n    },'
);

c = c.replace(
  'title: "PT Surya Karya Energi ?" Solusi Rekayasa & Energi Terbarukan",',
  'title: "PT Surya Karya Energi — Reliable Power, Sustainable Future",'
);

fs.writeFileSync("app/layout.tsx", c, "utf8");
console.log("Updated app/layout.tsx metadata!");
