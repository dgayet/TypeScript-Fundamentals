# Módulos
[Volver al menú principal](../README.md)

Ejemplo: 

```ts
// src/hello.ts
export function sayHi() {
  console.log('Hello there!');
}

// src/script.ts
import { sayHi } from './hello.js';

sayHi(); // Hello there!
```
