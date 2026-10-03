# @excodelabs/ui

Shared UI component library for the Todo App.

Built with:

- React
- TypeScript
- Tailwind CSS
- Class Variance Authority (CVA)
- Vite

## Installation

```bash
npm install @excodelabs/ui
```

## Usage

Import the required component:

```tsx
import { Button } from "@excodelabs/ui";
```

### Button

```tsx
<Button>Add Todo</Button>
```

Available variants:

```tsx
<Button variant="primary">Primary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
```

Available sizes:

```tsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

Disabled:

```tsx
<Button disabled>Add Todo</Button>
```

## Design System

The library uses the Todo App design system with Tailwind colors.

| Purpose         | Tailwind     |
| --------------- | ------------ |
| Primary         | `indigo-600` |
| Primary Hover   | `indigo-700` |
| Primary Pressed | `indigo-800` |
| Primary Light   | `indigo-50`  |
| Focus           | `indigo-200` |
| Text Primary    | `slate-900`  |
| Text Secondary  | `slate-600`  |
| Text Muted      | `slate-400`  |
| Border          | `slate-200`  |
| Background      | `slate-50`   |
| Surface         | `white`      |
| Success         | `green-600`  |
| Warning         | `amber-500`  |
| Error           | `red-600`    |

## Development

Install dependencies:

```bash
npm install
```

Run lint:

```bash
npm run lint
```

Format code:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

Build the library:

```bash
npm run build
```

## Project Structure

```text
src/
├── components/
│   └── button/
│       ├── button.tsx
│       ├── button.types.ts
│       ├── button.styles.ts
│       └── index.ts
├── lib/
│   └── utils.ts
├── styles.css
└── index.ts
```

## Publishing

Build before publishing:

```bash
npm run build
```

Publish the package:

```bash
npm publish
```

## Versioning

This package follows Semantic Versioning:

```text
MAJOR.MINOR.PATCH
```

- `MAJOR` - Breaking changes
- `MINOR` - New features
- `PATCH` - Bug fixes

## License

Internal ECL shared UI library.
