import SwaggerParser from '@apidevtools/swagger-parser';
import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const sourcePath = path.join(rootDir, 'api/openapi.yaml');
const sharedContractsPath = path.join(rootDir, 'shared-contracts/common-schemas.yaml');
const distPath = path.join(rootDir, 'dist/openapi.bundled.yaml');

try {
  await access(sharedContractsPath);
} catch {
  throw new Error(
    'Missing shared-contracts/common-schemas.yaml. Populate shared-contracts/ before bundling.'
  );
}

const dereferenced = await SwaggerParser.dereference(sourcePath);
await mkdir(path.dirname(distPath), { recursive: true });
await writeFile(distPath, YAML.stringify(dereferenced), 'utf8');

console.log(`Bundled spec written to ${path.relative(rootDir, distPath)}`);

