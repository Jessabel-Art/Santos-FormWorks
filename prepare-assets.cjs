const sharp = require('sharp');
const path = require('path');
const base = 'C:/Users/Jessa/.codex/generated_images/01a0aada-5f03-7293-ad73-abbce9e12b45';
const files = {hero:'ed5b2559-bfee-4d02-ac0d-7854b664e46e',dragon:'7bc31fb2-12bf-46dd-8629-a83498c75b82',wolf:'b97da9eb-f216-4bc0-b367-8eb997115351',phone:'66b9e129-b713-46b3-9b71-c50777164fc3',planters:'32f84545-4816-4db2-88d5-c689eaf8074f',cable:'e80bc522-3d01-4424-8895-7841c3059eb2',controller:'28e5c1cc-a8e6-49d6-8f21-4902ec5b9f68',panels:'07d0c6cc-008f-4134-9f2c-c1d944fd5e09',gear:'db10cf8e-2f7f-4bcb-b3d0-19e1661d2811',dice:'400a205b-9420-4fed-9761-85d30990a317'};
Promise.all(Object.entries(files).map(([name,id]) => sharp(path.join(base, `exec-${id}.png`)).resize({width:name==='hero'?1536:720}).webp({quality:85}).toFile(`public/images/${name}.webp`))).then(()=>console.log('Optimized all 10 images'));
