# OReilly Customers Service

This repo contains the standalone customers service for the OReilly workshop
model.

## Layout

- `api/openapi.yaml` service-owned source contract
- `src/` service implementation
- `tests/` service tests
- `shared-contracts/` CI-populated shared dependency directory

## Commands

```bash
npm install
npm run validate:specs
npm run typecheck
npm test
npm run build
npm run start
```

## Required Secrets

Set these repository secrets before running CI or Postman onboarding:

- `POSTMAN_API_KEY`: Postman API key for bootstrap and repo sync
- `POSTMAN_ACCESS_TOKEN`: Postman access token for governance and internal integration calls
- `GITHUB_TOKEN`: used by GitHub Actions to write `dist/openapi.bundled.yaml` back to `api/openapi.bundled.yaml` in this repo

GitHub automatically provides `GITHUB_TOKEN` for same-repo writes during the workflow run.
