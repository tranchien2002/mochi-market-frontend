const contractAddress = {
  //BSC Mainnet
  56: {
    AddressesProvider: '0xc6732Eb8A138052D9e3DFEB66cB0175C94f7e970',
    NftList: '0xC8224F5511fae865793B4235b1aA02011637e742',
    Vault: '0xDa5F1f8d32C094a6c0fc21319bA2E5a64265C429',
    SellOrderList: '0x4786999b7Ebb24876B2bD4705ecc89ECeebDa559',
    Market: '0xc6A8101003d7d2ce14BD344e3df23E4AAfd77899',
    CreativeStudio: '0xa5dD241c1A9A9826fB8E78c7db4dc8fdD3043b66',
    ExchangeOrderList: '0x37ca1D6c7479F3Eb9d6d10309e6f0C611E6bE48F',
    Mochi: '0x3bF0FD7176204A80021C1BD17807144714E31148',
    NFTCampaign: '0x823437B58dB6390AE6F9bCee696788F854618c40',
  },
  //BSC Testnet
  97: {
    AddressesProvider: '0xf490E29Cce82b1eDA227CD877fF946f6d0AbC1B6',
    CreativeStudio: '0x77e5972b02690491666c50a306a62758E1F1a1C9',
    ExchangeOrderList: '0x7859a491Cb93056085F5C4FED8875FaB54D845FC',
    Market: '0x2CAEbB3ddf09b5FD5b6C09Cc38D8B762a74Fc120',
    NftList: '0x2bd107d20EddD33612afcA7d187cd7FdF1358Df4',
    SellOrderList: '0x3550fBfe1D5A4CDCFD72f47c84638C34cf65a2bB',
    Vault: '0x9240bf8389118d15e5d70b38EbBDa8c608cDfc7b',
    SeedifyNFT: '0xfA66C3001E0B3f9c6c203f5bBE483D121B28Ae6D',
    NFTCampaign: '0x23442A5094aC64f1B54D07a199e79738f56bdbfE',
    MochiERC721NFT: '0x25311507cFE0E8B58B03EB4Aa69051dd5F4456DC',
    MochiERC1155NFT: '0x5C73A145c2175E9fc40B1f4097276Ed4EF2d7246',
  },
};

export const getContractAddress = (_chainId) => {
  return contractAddress[_chainId];
};
