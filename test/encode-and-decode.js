'use strict';

const {expect} = require('chai');
const bananoIpfs = require('../index.js');
const validCid = 'QmbzTMo42KADUbLwc43KR9Se6aV3N6wfKqFbSr2qN1gJqR';
const invalidCid1 = 'mbzTMo42KADUbLwc43KR9Se6aV3N6wfKqFbSr2qN1gJqR';
const invalidCid2 = 'QmbzTMo42KADUbLwc43KR9Se6aV3';
const invalidCid3 = BigInt(0);
const invalidAccount = 'ba_1234err';

describe('bananoIpfs', () => {
  it('encodes and decodes without changing CID', async () => {
    const account = bananoIpfs.ifpsCidToAccount(validCid);
    // console.log(account);
    const decodedCid = bananoIpfs.accountToIpfsCid(account);
    expect(decodedCid).to.equal(validCid);
  });

  it('throws an error given an invalid CID', async () => {
    expect(() => bananoIpfs.ifpsCidToAccount(invalidCid1)).to.throw();
    expect(() => bananoIpfs.ifpsCidToAccount(invalidCid2)).to.throw();
    expect(() => bananoIpfs.ifpsCidToAccount(invalidCid3)).to.throw();
  });

  it('throws an error given an invalid account', async () => {
    expect(() => bananoIpfs.accountToIpfsCid(invalidAccount)).to.throw();
  });

  it('throws an error given an invalid hex string', async () => {
    expect(() => bananoIpfs.validateIpfsCidHex(invalidCid3)).to.throw();
  });
});
