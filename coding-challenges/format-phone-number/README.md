## Problem

Create a function that formats an 7 digit phone number.

Acceptance Criteria:

- It should not accept any characters beside a numbers (0 - 9)
- When 1 digit is enter, it should be preceded by `(`
- When 4 digit is enter, the 4th number should be preceded by `)`
- When 7 digit is enter, the 7th number should be preceded by `-`
- The max numbers allowed are 10

## Examples

```
formatPhoneNumber(2129) => "(212) 9"
formatPhoneNumber(2129876) => "(212) 987-6"
formatPhoneNumber(2129876543) => "(212) 987-6543"
```
