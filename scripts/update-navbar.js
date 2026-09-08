const fs = require("fs");
let c = fs.readFileSync("components/layout/navbar.tsx", "utf8");
c = c.replace(/text-brown-950/g, "text-brown-900");
fs.writeFileSync("components/layout/navbar.tsx", c, "utf8");
console.log("Navbar updated");
