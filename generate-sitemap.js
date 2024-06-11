import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { createReadStream } from 'fs';

const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /
Sitemap: https://praxis.vercel.app/sitemap.xml`;
};

const sitemap = new SitemapStream({ hostname: 'https://praxis.vercel.app/' });


const paths = [
  '/'
]

paths.forEach(route => {
  sitemap.write({ url: route, changefreq: 'daily', priority: 0.8 });
});

sitemap.end();

streamToPromise(sitemap).then(data => {
  createWriteStream('./dist/sitemap.xml').write(data.toString());
  createWriteStream('./dist/robots.txt').write(generateRobotsTxt());
});
