import fs from 'fs';
import path from 'path';

export async function GET() {
  const imagesDir = path.join(process.cwd(), 'public/images');
  const files = fs.readdirSync(imagesDir);

  const imageList = files
    .filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map((file) => `/images/${file}`);

  return Response.json(imageList);
}
