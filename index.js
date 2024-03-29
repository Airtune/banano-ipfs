'use strict';

const bs58 = require('bs58');
const bananojs = require('@bananocoin/bananojs');
const bananoUtil = bananojs.bananoUtil;

const accountPrefix = 'ban_';
const cidB58Pattern = new RegExp('^Qm[0-9A-Za-z]{0,64}$');
const cidHexPattern = new RegExp('^1220[0-9A-Fa-f]{64}$');

const hexToBytes = bananoUtil.hexToBytes;
const getAccountPublicKey = bananoUtil.getAccountPublicKey;

const getAccount = (publicKey) => {
  return bananoUtil.getAccount(publicKey, accountPrefix);
};

const validateIpfsCid = (ipfsCid) => {
  if (typeof ipfsCid !== 'string') {
    throw Error(`ipfs_cid expected to be string, got: ${typeof ipfsCid}`);
  }

  if (!cidB58Pattern.test(ipfsCid)) {
    throw Error(`ipfs_cid:'${ipfsCid}' not valid v0 CID (Qm+base58)`);
  }
};

const validateIpfsCidHex = (ipfsCidHex) => {
  if (typeof ipfsCidHex !== 'string') {
    throw Error(`ipfsCidHex expected to be string, got: ${typeof ipfsCidHex}`);
  }

  if (!cidHexPattern.test(ipfsCidHex)) {
    throw Error(
        `ipfsCidHex:'${ipfsCidHex}' not 64 hex chars after prefix 1220, ${ipfsCidHex.length}`,
    );
  }
};

/**
 * Gets the IPFS CID encoded into a banano account.
 * @memberof bananoIpfs
 * @param {string} ipfsCid
 * @return {string} ipfsAccount. A banano account with an IPFS CID encoded into the public key.
 */
const ifpsCidToAccount = (ipfsCid) => {
  validateIpfsCid(ipfsCid);

  const bytes = bs58.decode(ipfsCid);
  const ipfsCidHex = Buffer.from(bytes).toString('hex');
  validateIpfsCidHex(ipfsCidHex);

  const ipfsPublicKey = ipfsCidHex.substring(4);

  return getAccount(ipfsPublicKey);
};

/**
 * Gets the IPFS CID encoded into a banano account.
 * @memberof bananoIpfs
 * @param {string} ipfsAccount A banano account with an IPFS CID encoded into the public key.
 * @return {string} ipfsCid
 */
const accountToIpfsCid = (ipfsAccount) => {
  const ipfsPublicKey = getAccountPublicKey(ipfsAccount);
  const ipfsCidHex = `1220${ipfsPublicKey}`;
  validateIpfsCidHex(ipfsCidHex);

  const bytes = hexToBytes(ipfsCidHex);
  const ipfsCid = bs58.encode(bytes);
  validateIpfsCid(ipfsCid);

  return ipfsCid;
};

module.exports = {ifpsCidToAccount, accountToIpfsCid, validateIpfsCidHex};
