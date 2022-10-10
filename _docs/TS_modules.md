# Módulos
[Volver al menú principal](../README.md)

Ejemplo: 

```ts
// src/file1.ts
export function func() {
  console.log('Hello world');
}

// src/script.ts
import { func } from './file1.js';

func(); // Hello World
```
