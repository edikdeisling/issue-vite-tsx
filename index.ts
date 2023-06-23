import { createServer } from 'vite';

async function init() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  await vite.ssrLoadModule('/src/entry-server', { fixStacktrace: true });
}

init();
