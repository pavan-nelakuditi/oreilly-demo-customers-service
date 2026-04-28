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
- `SPECHUB_WRITE_TOKEN`: token with write access to `pavan-nelakuditi/Spechub` so the workflow can publish `dist/openapi.bundled.yaml` to `customers/openapi.yaml`

GitHub automatically provides `GITHUB_TOKEN` for repo sync commits created by the onboarding action.
