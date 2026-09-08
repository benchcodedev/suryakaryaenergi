const fs = require("fs");
const path = require("path");

function updateFile(relPath, fn) {
  const fullPath = path.join(__dirname, "..", relPath);
  if (!fs.existsSync(fullPath)) {
    console.warn("File not found:", fullPath);
    return;
  }
  let content = fs.readFileSync(fullPath, "utf8");
  const updated = fn(content);
  if (updated !== content) {
    fs.writeFileSync(fullPath, updated, "utf8");
    console.log("Updated:", relPath);
  } else {
    console.log("No changes needed for:", relPath);
  }
}

// 1. Update About Us
updateFile("app/(public)/about-us/page.tsx", (content) => {
  return content
    .replace(/bg-brown-950/g, "bg-brown-900")
    .replace(/brightness-\[0\.35\]/g, "brightness-[0.68]")
    .replace(/bg-gradient-to-r from-black\/90 via-brown-950\/85 to-black\/90/g, "bg-gradient-to-r from-brown-950/85 via-brown-900/65 to-brown-950/80")
    .replace(/bg-gradient-to-t from-brown-950 via-transparent to-black\/60/g, "bg-gradient-to-t from-brown-950/90 via-transparent to-brown-950/40")
    .replace(/border-brown-300/g, "border-brown-200")
    .replace(/bg-brown-100 text-brown-900 border-brown-300/g, "bg-brown-100 text-brown-900 border-brown-200")
    .replace(/bg-white\/10 text-white\/90/g, "bg-white/20 text-white");
});

// 2. Update Sustainability
updateFile("app/(public)/sustainability/page.tsx", (content) => {
  return content
    .replace(/bg-brown-950/g, "bg-brown-900")
    .replace(/brightness-\[0\.35\]/g, "brightness-[0.68]")
    .replace(/bg-gradient-to-r from-black\/90 via-\[#182618\]\/85 to-black\/90/g, "bg-gradient-to-r from-brown-950/85 via-emerald-950/60 to-brown-950/80")
    .replace(/bg-gradient-to-t from-brown-950 via-transparent to-black\/60/g, "bg-gradient-to-t from-brown-950/90 via-transparent to-brown-950/40")
    .replace(/border-brown-300/g, "border-brown-200");
});

// 3. Update Project List
updateFile("app/(public)/project/page.tsx", (content) => {
  return content
    .replace(/bg-brown-950/g, "bg-brown-900")
    .replace(/brightness-\[0\.35\]/g, "brightness-[0.68]")
    .replace(/bg-gradient-to-r from-black\/90 via-brown-950\/85 to-black\/90/g, "bg-gradient-to-r from-brown-950/85 via-brown-900/65 to-brown-950/80")
    .replace(/bg-gradient-to-t from-brown-950 via-transparent to-black\/60/g, "bg-gradient-to-t from-brown-950/90 via-transparent to-brown-950/40")
    .replace(/border-brown-300/g, "border-brown-200");
});

// 4. Update Project Detail
updateFile("app/(public)/project/[slug]/page.tsx", (content) => {
  return content
    .replace(/bg-brown-950/g, "bg-brown-900")
    .replace(/brightness-\[0\.35\]/g, "brightness-[0.68]")
    .replace(/bg-gradient-to-r from-black\/90 via-brown-950\/85 to-black\/90/g, "bg-gradient-to-r from-brown-950/85 via-brown-900/65 to-brown-950/80")
    .replace(/bg-gradient-to-t from-brown-950 via-transparent to-black\/60/g, "bg-gradient-to-t from-brown-950/90 via-transparent to-brown-950/40")
    .replace(/border-brown-300/g, "border-brown-200");
});

// 5. Update Contact Us
updateFile("app/(public)/contact-us/page.tsx", (content) => {
  return content
    .replace(/bg-brown-950/g, "bg-brown-900")
    .replace(/brightness-\[0\.35\]/g, "brightness-[0.68]")
    .replace(/bg-gradient-to-r from-black\/90 via-brown-950\/85 to-black\/90/g, "bg-gradient-to-r from-brown-950/85 via-brown-900/65 to-brown-950/80")
    .replace(/bg-gradient-to-t from-brown-950 via-transparent to-black\/60/g, "bg-gradient-to-t from-brown-950/90 via-transparent to-brown-950/40")
    .replace(/border-brown-300/g, "border-brown-200");
});

// 6. Update Project Card & Gallery
updateFile("components/shared/project-card.tsx", (content) => {
  return content
    .replace(/bg-brown-950/g, "bg-brown-100")
    .replace(/border-brown-300/g, "border-brown-200");
});

updateFile("components/sections/project-gallery.tsx", (content) => {
  return content
    .replace(/bg-brown-950/g, "bg-brown-100")
    .replace(/border-brown-300/g, "border-brown-200");
});

console.log("All theme adjustments applied!");
