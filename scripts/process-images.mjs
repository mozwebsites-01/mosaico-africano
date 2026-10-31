import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";

import { fileURLToPath } from "node:url";

const SRC = "/Users/lunayuri/Downloads";
// fileURLToPath (e não .pathname) para que espaços no caminho não fiquem em %20.
const OUT = fileURLToPath(new URL("../public/images/", import.meta.url));

/**
 * Cada entrada produz um ficheiro .webp com o nome final usado no site.
 * `w` é a largura alvo; a altura segue o `ratio` indicado (corte centrado,
 * com `position` quando o enquadramento precisa de favorecer o topo).
 */
const JOBS = [
  { out: "sobre-nos", src: "close-up-people-learning-together-office.jpg", w: 1400, ratio: 4 / 5 },
  { out: "compromisso", src: "group-smiling-international-students-sitting-grass-together-park-university-african-caucasian-girls-indian-boy-talking-outdoors.jpg", w: 2000, ratio: 21 / 9 },
  { out: "educacao-e-ensino", src: "african-woman-teaching-children-class.jpg", w: 1200, ratio: 3 / 2 },
  { out: "formacao-profissional", src: "black-team-manufacturing-plant-employees-fixing-errors-debugging.jpg", w: 1200, ratio: 3 / 2 },
  { out: "consultoria-educacional", src: "confident-speaker-talking-pointing-whiteboard (1).jpg", w: 1200, ratio: 3 / 2 },
  { out: "cursos-seminarios-eventos", src: "african-man-black-suit-writing-board-guy-presentation.jpg", w: 1200, ratio: 3 / 2 },
  { out: "projectos-educativos", src: "african-american-technician-photovoltaics-plant-with-tablet.jpg", w: 1200, ratio: 3 / 2, position: "top" },
  { out: "gestao-participacoes", src: "diverse-business-partners-greeting-each-other-office-hallway.jpg", w: 1200, ratio: 3 / 2 },
  { out: "parcerias", src: "diverse-business-partners-greeting-each-other-office-hallway.jpg", w: 1600, ratio: 16 / 9 },

  // Peças do mosaico do topo.
  { out: "mosaico-1", src: "african-woman-teaching-children-class.jpg", w: 900, ratio: 3 / 4 },
  { out: "mosaico-2", src: "black-team-manufacturing-plant-employees-fixing-errors-debugging.jpg", w: 800, ratio: 4 / 3 },
  { out: "mosaico-3", src: "close-up-people-learning-together-office.jpg", w: 800, ratio: 4 / 3 },

  // Fotografias das subpáginas Sobre Nós, Serviços e Parcerias.
  { out: "sobre-retrato", src: "portrait-african-american-woman-looking-camera-confidently-with-bright-smile-demonstrating.jpg", w: 900, ratio: 3 / 4 },
  { out: "sobre-formatura", src: "group-young-afro-american-female-students-dressed-black-graduation-gown-campus-as-background.jpg", w: 1800, ratio: 16 / 9 },
  { out: "sobre-estudo", src: "study-group-african-people.jpg", w: 900, ratio: 1 },
  { out: "sobre-comunidade", src: "group-happy-african-volunteers-put-hands-hands-park-africa-volunteering-charity-people-ecology-concept.jpg", w: 900, ratio: 1 },
  { out: "parcerias-reuniao", src: "creative-business-people-listening-colleague.jpg", w: 1600, ratio: 3 / 2 },
  { out: "parcerias-apresentacao", src: "close-up-woman-doing-business-presentation-boardroom-explaining-charts-analysis-workmates-comany-development-growth-employee-presenting-marketing-strategy-screen.jpg", w: 1200, ratio: 4 / 3 },
  { out: "gestao-participacoes", src: "creative-business-people-listening-colleague.jpg", w: 1200, ratio: 3 / 2 },
];

await mkdir(OUT, { recursive: true });

for (const job of JOBS) {
  const height = Math.round(job.w / job.ratio);
  await sharp(join(SRC, job.src))
    .resize(job.w, height, { fit: "cover", position: job.position ?? "centre" })
    .webp({ quality: 82 })
    .toFile(join(OUT, `${job.out}.webp`));
  console.log(`${job.out}.webp  ${job.w}x${height}`);
}
