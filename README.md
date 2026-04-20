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
```

## Required Secrets

Set these repository secrets before running CI or Postman onboarding:

- `SHARED_CONTRACTS_READ_TOKEN`: token with read access to `pavan-nelakuditi/oreilly-shared-contracts`
- `POSTMAN_API_KEY`: Postman API key for bootstrap and repo sync
- `POSTMAN_ACCESS_TOKEN`: Postman access token for governance and internal integration calls
- `SPECHUB_WRITE_TOKEN`: token with write access to `pavan-nelakuditi/Spechub` so the workflow can publish `dist/openapi.bundled.yaml` to `customers/openapi.yaml`

GitHub automatically provides `GITHUB_TOKEN` for same-repo writes during the workflow run.
