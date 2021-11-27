## Problem

Create a function that will pack and ship products by box size and type.

**Acceptance Criteria:**

- Macbooks and bluetooth speaker should be packed in large boxes that hold one item each.
- Cameras and headphones should be packed in medium boxes that hold two items of the same type.

## Examples

```
INPUT
["Cam", "Cam", "Cam" "Headphones", "Headphones", "Bluetooth Speaker", "Bluetooth Speaker"];

OUTPUT
[
  {boxSize: M, item: ["Cam", "Cam"]},
  {boxSize: M, item: ["Cam"]},
  {boxSize: M, item: ["headphones", "headphones"]},
  {boxSize: L, item: ["Bluetooth Speaker"]},
  {boxSize: L, item: ["Bluetooth Speaker"]}
  {boxSize: L, item: ["Macbook"]}
  {boxSize: L, item: ["Macbook"]}
];
```
