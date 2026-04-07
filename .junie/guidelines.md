# Project Development Guidelines

This document provides project-specific information for developers working on the `autocheck-landing` project.

## Build/Configuration Instructions

The project is built using **Next.js 15.5.6** with **Tailwind CSS v4**.

### Local Setup
1.  **Install dependencies**:
    ```bash
    npm install
    ```
2.  **Start development server**:
    ```bash
    npm run dev
    ```
    The development server uses Next.js Turbopack (`--turbopack`) for faster builds.

3.  **Build for production**:
    ```bash
    npm run build
    ```

## Testing Information

Testing is performed using **Vitest** and **React Testing Library**.

### Configuring Tests
If Vitest is not yet in the project, you need to install it:
```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom @testing-library/jest-dom @testing-library/user-event
```

Create a `vitest.config.ts` in the root:
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
  },
})
```

And a `vitest.setup.ts`:
```typescript
import '@testing-library/jest-dom'
```

### Running Tests
To run all tests:
```bash
npx vitest run
```

### Adding New Tests
Tests should be colocated with the components they test, using the `.test.tsx` extension.

**Example Test (`src/components/ui/Button.test.tsx`):**
```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders correctly and responds to clicks', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

## Additional Development Information

### Code Style & Architecture
-   **Client Components**: Use the `"use client";` directive at the top of files for any component that uses React hooks (useState, useEffect) or interactive features (Framer Motion, Swiper).
-   **Animations**: **Framer Motion** is used for animations. Components often accept `initial`, `animate`, and `transition` props for fine-grained control.
-   **Styling**: **Tailwind CSS v4** is used. Note the use of `[] .join(" ")` pattern in many components (e.g., `HeroSection.tsx`) to manage complex class lists cleanly.
-   **Component Exports**: Use the `index.ts` pattern in component directories to simplify imports (e.g., `import { Button } from "@/components/ui"`).
-   **Data Colocation**: Content and configuration data are stored in `src/data` (e.g., `hero.ts`, `services.ts`) and `src/content` (strings). Use these files for easy updates to the site content without modifying component logic.
-   **Swiper**: **Swiper.js** is used for carousels (e.g., `HeroSection`). Ensure you import the necessary modules and CSS files.
