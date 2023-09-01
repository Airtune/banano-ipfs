<a name="bananoIpfs"></a>

## bananoIpfs : <code>object</code>
**Kind**: global namespace  

* [bananoIpfs](#bananoIpfs) : <code>object</code>
    * [.ifpsCidToAccount(ipfsCid)](#bananoIpfs.ifpsCidToAccount) ⇒ <code>string</code>
    * [.accountToIpfsCid(ipfsAccount)](#bananoIpfs.accountToIpfsCid) ⇒ <code>string</code>

<a name="bananoIpfs.ifpsCidToAccount"></a>

### bananoIpfs.ifpsCidToAccount(ipfsCid) ⇒ <code>string</code>
Gets the IPFS CID encoded into a banano account.

**Kind**: static method of [<code>bananoIpfs</code>](#bananoIpfs)  
**Returns**: <code>string</code> - ipfsAccount. A banano account with an IPFS CID encoded into the public key.  

| Param | Type |
| --- | --- |
| ipfsCid | <code>string</code> | 

<a name="bananoIpfs.accountToIpfsCid"></a>

### bananoIpfs.accountToIpfsCid(ipfsAccount) ⇒ <code>string</code>
Gets the IPFS CID encoded into a banano account.

**Kind**: static method of [<code>bananoIpfs</code>](#bananoIpfs)  
**Returns**: <code>string</code> - ipfsCid  

| Param | Type | Description |
| --- | --- | --- |
| ipfsAccount | <code>string</code> | A banano account with an IPFS CID encoded into the public key. |

