## [1.0.1] - 2026-09-18

### Changed

- Bumped `@excodelabs/ui` version from `1.0.0` to `1.0.1`.
- Added GitHub Actions workflow for automated npm publishing.
- Configured npm Trusted Publishing using GitHub Actions OIDC.
- Added automated release tagging based on the package version.
- Added CI checks for linting, formatting, typechecking, and build validation.
- Fixed build loaction for types and map files
- Updated Git URL
- Changed css file name for build

## [1.0.0] - 2026-09-18

### Added

- Initial `@excodelabs/ui` library setup.
- React and TypeScript configuration.
- Vite library build configuration.
- Tailwind CSS integration.
- Todo App design system colors.
- `cn()` utility using `clsx` and `tailwind-merge`.
- CVA setup for component variants.
- Initial `Button` component.
- Button `primary`, `outline`, and `ghost` variants.
- Button `sm`, `md`, and `lg` sizes.
- Button disabled state.
- TypeScript types for Button.
- ESLint configuration.
- Prettier configuration.
- Husky Git hooks.
- Commitlint configuration.
- GitHub Actions CI workflow.
- Package documentation.

### CI

- Added automated lint checks.
- Added formatting checks.
- Added TypeScript/build checks.

````

### Recommended package scripts

Since we're removing the server/dev-server concept, your `package.json` scripts should be roughly:

```json
{
  "scripts": {
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "typecheck": "tsc --noEmit",
    "prepare": "husky"
  }
}
```

And the development tooling should include:

```bash
npm install -D \
  eslint \
  prettier \
  eslint-config-prettier \
  eslint-plugin-prettier \
  husky \
  @commitlint/cli \
  @commitlint/config-conventional
```

The GitHub Actions CI should then run:

```text
Push / Pull Request
        ↓
Install dependencies
        ↓
Lint
        ↓
Format check
        ↓
TypeScript check
        ↓
Build
```

This keeps the package focused as an **NPM UI library**, with no `npm run dev` or application server.
````
