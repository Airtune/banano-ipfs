# banano-ipfs
Library for converting between v0 IPFS CIDs and Banano addresses.

## Examples
### IPFS CID to account
```
const bananoIpfs = require('banano-ipfs');
bananoIpfs.ifpsCidToAccount("QmbzTMo42KADUbLwc43KR9Se6aV3N6wfKqFbSr2qN1gJqR");
// => "ban_3kpq7d4kp9hd45jf8jh6zjztcewwfqaxafcr3b45whrxhce1sfinai3pk6w3"
```

### Account to IPFS CID
```
const bananoIpfs = require('banano-ipfs');
bananoIpfs.ifpsCidToAccount("ban_3kpq7d4kp9hd45jf8jh6zjztcewwfqaxafcr3b45whrxhce1sfinai3pk6w3");
// => "QmbzTMo42KADUbLwc43KR9Se6aV3N6wfKqFbSr2qN1gJqR"
```
