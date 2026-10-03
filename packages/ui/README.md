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

Import the components you need:

```tsx
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  TabGroup,
  TabPanel,
  Textarea,
  ToastProvider,
  Toaster,
  Toggle,
  useToast,
} from "@excodelabs/ui";
```

### Button

```tsx
<Button>Add todo</Button>
```

Choose a style, size, or loading state with props:

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button variant="link">Learn more</Button>
<Button size="sm">Small</Button>
<Button size="lg" loading>Saving...</Button>
```

### Input

```tsx
<Input
  id="email"
  label="Email"
  type="email"
  placeholder="you@example.com"
  helperText="We will only use this to contact you."
/>
```

Show a validation message with `state="error"` and `errorText="..."`.

### Textarea

Use it as a controlled field to show a character count:

```tsx
import { useState } from "react";
import { Textarea } from "@excodelabs/ui";

function DescriptionField() {
  const [description, setDescription] = useState("");

  return (
    <Textarea
      id="description"
      value={description}
      onChange={(event) => setDescription(event.target.value)}
      maxLength={5000}
      showLimit
    />
  );
}
```

### Checkbox and Toggle

```tsx
<>
  <Checkbox label="Send me updates" description="Occasional product news." />
  <Toggle aria-label="Enable reminders" defaultChecked />
</>
```

### Tabs

```tsx
<TabGroup
  defaultValue="details"
  items={[
    { value: "details", label: "Details" },
    { value: "activity", label: "Activity" },
  ]}
>
  <TabPanel value="details">Todo details</TabPanel>
  <TabPanel value="activity">Recent activity</TabPanel>
</TabGroup>
```

### Card

```tsx
<Card variant="outlined" padding="md">
  <CardHeader>
    <CardTitle>My todo</CardTitle>
    <CardDescription>Finish the project notes.</CardDescription>
  </CardHeader>
  <CardContent>Due Friday</CardContent>
</Card>
```

### Toast

Place the provider and toaster around your app:

```tsx
<ToastProvider>
  <App />
  <Toaster />
</ToastProvider>
```

Then show a toast from a component inside the provider:

```tsx
function SaveButton() {
  const { toast } = useToast();

  return <Button onClick={() => toast({ title: "Saved", variant: "success" })}>Save</Button>;
}
```

## Branding Colors

The default brand palette is indigo. To change it for this library, edit the `--color-brand-*` mappings in `src/styles.css`. For example, change `var(--color-indigo-600)` to `var(--color-blue-600)` and do the same for shades `50` through `950`.

The primary colors use the brand shades: `brand-600` for primary, `brand-700` for hover, `brand-800` for pressed, `brand-50` for the light background, and `brand-200` for focus. Updating the brand mappings changes these together; the text, surface, success, warning, and error colors stay as they are.

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
