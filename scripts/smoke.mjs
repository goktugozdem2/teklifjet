import http from 'node:http';

const checks = [
  ['/', 'TeklifJet'],
  ['/', '₺499 pilot'],
  ['/', 'E-posta ile pilotu başlat'],
  ['/', 'mailto:goktug@datrick.com'],
  ['/generator', 'Canlı teklif taslağı oluşturucu'],
  ['/generator', 'Teklif taslağını üret'],
  ['/generator', 'E-posta ile pilotu başlat'],
  ['/robots.txt', 'sitemap'],
  ['/sitemap.xml', 'teklifjet.vercel.app'],
];

const base = process.env.E2E_BASE_URL || 'http://localhost:3000';

function get(path) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, base);
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data }));
    }).on('error', reject);
  });
}

async function main() {
  for (const [path, text] of checks) {
    const { status, data } = await get(path);
    if (status < 200 || status >= 300) throw new Error(`${path} returned ${status}`);
    if (!data.includes(text)) throw new Error(`${path} missing ${text}`);
    console.log(`ok ${path} contains ${text}`);
  }

  const response = await fetch(`${base}/api/leads`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name: 'Smoke Test', email: 'smoke@example.com' }),
  });
  if (response.status !== 503 && response.status !== 200) {
    throw new Error(`/api/leads expected 503 or 200, got ${response.status}`);
  }
  console.log(`ok /api/leads guarded with ${response.status}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
