import { buscarAlbuns } from "./api";

async function main() {
  const albuns = await buscarAlbuns("Chico Buarque");
  console.log(albuns.length);
  console.log(albuns[0]);
}

main();