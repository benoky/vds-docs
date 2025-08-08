import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 소스 및 대상 sitemap 파일 경로
const sourceSitemapPath = path.join(__dirname, '../public/sitemap.xml');
const targetSitemapPath = path.join(__dirname, '../storybook-static/sitemap.xml');

// 현재 날짜를 YYYY-MM-DD 형식으로 반환
const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

try {
  // storybook-static 폴더 존재 여부 확인
  const storybookStaticDir = path.join(__dirname, '../storybook-static');
  if (!fs.existsSync(storybookStaticDir)) {
    console.log('Note: storybook-static directory does not exist. Updating only source sitemap.');
  }

  // 원본 sitemap.xml 파일 읽기
  let sitemapContent = fs.readFileSync(sourceSitemapPath, 'utf-8');

  // lastmod 태그가 있는 경우 업데이트, 없는 경우 추가
  const currentDate = getCurrentDate();
  const updatedContent = sitemapContent.replace(
    /(<url>[\s\S]*?<priority>[^<]*<\/priority>)(?:\s*<lastmod>[^<]*<\/lastmod>)?(\s*<\/url>)/g,
    `$1\n    <lastmod>${currentDate}</lastmod>$2`
  );

  // 수정된 sitemap을 원본 위치에 저장
  fs.writeFileSync(sourceSitemapPath, updatedContent, 'utf-8');

  // storybook-static 폴더가 존재하면 해당 위치에도 저장
  if (fs.existsSync(storybookStaticDir)) {
    fs.writeFileSync(targetSitemapPath, updatedContent, 'utf-8');
    console.log('Sitemap has been updated successfully in both public/ and storybook-static/ directories.');
  } else {
    console.log('Sitemap has been updated successfully in public/ directory.');
  }
} catch (error) {
  console.error('Error updating sitemap:', error.message);
  process.exit(1);
}
