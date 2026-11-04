**TypeScript** is a free, open-source programming language developed and maintained by Microsoft. It is a **strict syntactical superset of JavaScript**, which means:

> **Any valid JavaScript code is also valid TypeScript code.**

The primary addition TypeScript brings to JavaScript is **optional static typing**.

### Why Does TypeScript Exist?

JavaScript is dynamically typed—types are checked at runtime, not when you write the code. This flexibility often leads to common bugs:

```javascript
// JavaScript
function add(a, b) {
  return a + b;
}

add(5, "10"); // Returns "510" instead of 15, with no warnings or errors

```

TypeScript catches these errors **at compile time** (while you are writing code in your editor):

```typescript
// TypeScript
function add(a: number, b: number): number {
  return a + b;
}

add(5, "10"); 
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.

```

---

### How TypeScript Works

Browsers, Node.js, and mobile engines cannot run TypeScript directly.

TypeScript uses a compiler (`tsc`) or transpiler (like Babel or esbuild) to strip out all types and compile the code into standard, clean JavaScript that runs anywhere JavaScript runs.

```text
TypeScript Code (.ts / .tsx) 
        ↓ (Compile / Transpile)
Standard JavaScript (.js / .jsx)
        ↓
Browser / Node.js / Mobile Engine

```

---

### Core Features

1. **Static Typing & Type Inference**
Define specific types (`string`, `number`, `boolean`, `any`, `unknown`, `never`), or let TypeScript infer the type automatically.
2. **Interfaces & Type Aliases**
Define custom shapes for objects and functions:
```typescript
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

const user: User = { id: 1, name: "Alex" };

```


3. **Union & Intersection Types**
Combine multiple types using `|` (OR) or `&` (AND):
```typescript
type Status = "idle" | "loading" | "success" | "error";

```


4. **Generics**
Write reusable, type-safe functions and components:
```typescript
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

```


5. **Tooling & IDE Support**
Provides advanced autocomplete (IntelliSense), real-time error checking, and reliable automated refactoring.

---

### TypeScript vs. JavaScript

| Feature | JavaScript | TypeScript |
| --- | --- | --- |
| **Typing** | Dynamic (checked at runtime) | Static (checked at compile time) |
| **Error Detection** | During execution / testing | While typing in the editor / building |
| **Compilation** | Directly interpreted | Needs compilation/transpilation to JS |
| **Refactoring** | Prone to missed references | Safe and automated via IDE |
| **Learning Curve** | Gentle | Moderate (requires learning the type system) |
