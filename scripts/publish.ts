import { execSync as exec } from 'node:child_process';

exec('pnpm --filter @voomap/core publish:ci', { stdio: 'inherit' });
exec('pnpm --filter @voomap/map publish:ci', { stdio: 'inherit' });