/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.cinlodev.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  additionalPaths: async (config) => {
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(process.cwd(), 'src', 'lib', 'data.ts');
    let content = '';
    try {
      content = fs.readFileSync(dataPath, 'utf8');
    } catch (e) {
      return [];
    }
    // extract ids from portfolioProjects entries: id: '1',
    const ids = Array.from(content.matchAll(/id:\s*'([^']+)'/g)).map(m => m[1]);
    const paths = ids.map(id => ({ loc: `/projects/${id}`, lastmod: new Date().toISOString() }));
    return paths;
  },
}
