const fs = require("fs");
let c = fs.readFileSync("app/(public)/page.tsx", "utf8");

// Update floating stats strip container
c = c.replace(
  'p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8',
  'p-5 sm:p-7 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'
);

// Update each stat card flex layout to stack cleanly on mobile
c = c.replaceAll(
  '<div className="flex items-center gap-4">',
  '<div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2.5 sm:gap-4">'
);

// Update number text size
c = c.replaceAll(
  'text-2xl sm:text-3xl font-extrabold font-heading text-brown-900 tracking-tight',
  'text-xl sm:text-2xl lg:text-3xl font-extrabold font-heading text-brown-900 tracking-tight'
);

fs.writeFileSync("app/(public)/page.tsx", c, "utf8");
console.log("Updated page.tsx responsive stats!");
