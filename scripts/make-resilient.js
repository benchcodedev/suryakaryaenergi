const fs = require("fs");

// 1. Update app/(public)/page.tsx
let home = fs.readFileSync("app/(public)/page.tsx", "utf8");
if (!home.includes("FALLBACK_PROJECTS")) {
  home = 'import { FALLBACK_PROJECTS } from "@/lib/fallback-data";\n' + home;
  home = home.replace(
    /async function getFeaturedProjects\(\) \{[\s\S]*?return projects as ProjectCardData\[\];\s*\} catch \{\s*return \[\];\s*\}\s*\}/,
    `async function getFeaturedProjects() {
  try {
    const projects = await prisma.project.findMany({
      where: { isFeatured: true },
      take: 3,
      orderBy: { year: "desc" },
    });
    if (projects && projects.length > 0) return projects as ProjectCardData[];
    return FALLBACK_PROJECTS.filter((p) => p.isFeatured).slice(0, 3) as ProjectCardData[];
  } catch {
    return FALLBACK_PROJECTS.filter((p) => p.isFeatured).slice(0, 3) as ProjectCardData[];
  }
}`
  );
  fs.writeFileSync("app/(public)/page.tsx", home, "utf8");
  console.log("Updated app/(public)/page.tsx");
}

// 2. Update app/(public)/project/page.tsx
let proj = fs.readFileSync("app/(public)/project/page.tsx", "utf8");
if (!proj.includes("FALLBACK_PROJECTS")) {
  proj = 'import { FALLBACK_PROJECTS } from "@/lib/fallback-data";\n' + proj;
  proj = proj.replace(
    /async function getAllProjects\(\) \{[\s\S]*?return projects as ProjectCardData\[\];\s*\} catch \{\s*return \[\];\s*\}\s*\}/,
    `async function getAllProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ isFeatured: "desc" }, { year: "desc" }, { createdAt: "desc" }],
    });
    if (projects && projects.length > 0) return projects as ProjectCardData[];
    return FALLBACK_PROJECTS as ProjectCardData[];
  } catch {
    return FALLBACK_PROJECTS as ProjectCardData[];
  }
}`
  );
  fs.writeFileSync("app/(public)/project/page.tsx", proj, "utf8");
  console.log("Updated app/(public)/project/page.tsx");
}

// 3. Update app/(public)/project/[slug]/page.tsx
let slugPage = fs.readFileSync("app/(public)/project/[slug]/page.tsx", "utf8");
if (!slugPage.includes("FALLBACK_PROJECTS")) {
  slugPage = 'import { FALLBACK_PROJECTS } from "@/lib/fallback-data";\n' + slugPage;
  slugPage = slugPage.replace(
    /export async function generateMetadata\(\{ params \}: PageProps\): Promise<Metadata> \{[\s\S]*?`Spesifikasi teknis proyek \$\{project\.title\} oleh PT Surya Karya Energi\.`,\s*\};\s*\}/,
    `export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  let project: any = null;
  try {
    project = await prisma.project.findUnique({
      where: { slug: params.slug },
    });
  } catch {}

  if (!project) {
    project = FALLBACK_PROJECTS.find((p) => p.slug === params.slug);
  }

  if (!project) {
    return { title: "Proyek Tidak Ditemukan" };
  }

  return {
    title: \`\${project.title} – Spesifikasi Proyek\`,
    description:
      project.description?.slice(0, 160) ||
      \`Spesifikasi teknis proyek \${project.title} oleh PT Surya Karya Energi.\`,
  };
}`
  );

  slugPage = slugPage.replace(
    /const project = await prisma\.project\.findUnique\(\{[\s\S]*?orderBy: \{ createdAt: "desc" \},\s*\}\)\) as ProjectCardData\[\];/,
    `let project: any = null;
  try {
    project = await prisma.project.findUnique({
      where: { slug: params.slug },
      include: {
        images: {
          orderBy: { sortOrder: "asc" },
        },
      },
    });
  } catch {}

  if (!project) {
    project = FALLBACK_PROJECTS.find((p) => p.slug === params.slug);
  }

  if (!project) notFound();

  let relatedProjects: ProjectCardData[] = [];
  try {
    relatedProjects = (await prisma.project.findMany({
      where: { id: { not: project.id } },
      take: 3,
      orderBy: { createdAt: "desc" },
    })) as ProjectCardData[];
  } catch {}

  if (relatedProjects.length === 0) {
    relatedProjects = FALLBACK_PROJECTS.filter((p) => p.id !== project.id).slice(0, 3) as ProjectCardData[];
  }`
  );

  fs.writeFileSync("app/(public)/project/[slug]/page.tsx", slugPage, "utf8");
  console.log("Updated app/(public)/project/[slug]/page.tsx");
}

console.log("Resilient data applied!");
