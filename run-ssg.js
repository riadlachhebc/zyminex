import { execSync } from 'node:child_process';

if (!process.env.VERCEL) {
  console.log('Running SSG (Static Site Generation)...');
  try {
    // Run the prerender script
    execSync('node prerender.js', { stdio: 'inherit' });
  } catch (e) {
    console.warn('SSG failed, but the build will continue as a standard SPA.');
    console.error(e.message);
  }
} else {
  console.log('Vercel environment detected. Skipping browser-based SSG to ensure successful build.');
  console.log('The site will be deployed as a high-performance SPA with dynamic SEO.');
}
