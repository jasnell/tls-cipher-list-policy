## TLS Cipher List Policy

Node.js v4.0.0 will ship with a new `--tls-cipher-list` command line switch
that allows the default TLS Cipher List to be overridden at a process level.
This module provides methods for reverting, and optionally forcing, the 
`require('tls').DEFAULT_CIPHERS` property to use the core built in cipher
list. 

```javascript
const tls_policy = require('tls-cipher-list-policy');

if (!tls_policy.checkBuiltIn()) {
  console.warn('WARNING: Not using the built TLS Cipher List. Reverting!');
  tls_policy.enforceBuiltIn();
}
```

### `enforceBuiltIn()`

Turns the `require('tls').DEFAULT_CIPHERS` property into a constant set to
the default built-in cipher list. The value cannot be changed once this 
method is set.

### `resetBuiltIn()`

Resets the `require('tls').DEFAULT_CIPHERS` property to the default built-in
cipher list. The value is not turned into a constant, however, and can be
modified.

### `checkBuiltIn()`

Returns true if the `require('tls').DEFAULT_CIPHERS` property equals the 
default built-in cipher list.


