const fs = require("fs");
let c = fs.readFileSync("app/(public)/page.tsx", "utf8");

c = c.replace(
  '<span>Penyedia Utama Solusi EPC & Solar PV Indonesia</span>',
  '<span>PT Surya Karya Energi · Reliable Power, Sustainable Future</span>'
);

fs.writeFileSync("app/(public)/page.tsx", c, "utf8");
console.log("Updated page.tsx with official company motto!");
