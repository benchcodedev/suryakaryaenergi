const fs = require("fs");
let p = "app/(public)/project/[slug]/page.tsx";
let c = fs.readFileSync(p, "utf8");
c = c.replace(
  'statusVariantMap[project.status]',
  'statusVariantMap[project.status as keyof typeof statusVariantMap]'
);
fs.writeFileSync(p, c, "utf8");
console.log("Fixed statusVariantMap typecast!");
