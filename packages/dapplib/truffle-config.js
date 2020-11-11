require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remain eternal hunt help fresh twelve'; 
let testAccounts = [
"0x19761620ef2f3cff0380944630b0fc4d2bb23bafd21b1c479cd0e7b26ce65a69",
"0xf8f86fbf1beafb7717a56551c4fe54922afe362435906d6bc7f13fff580a3c1f",
"0x837c3afe134e5894acf10652241266d27110616fa5f316e2f7918805cae490a3",
"0x09c578774d3062382947ee72fba8c96f40ad6813507038ab7411e42958cf57c0",
"0x6f206dc2a954a36098446f7474d5a60436a8f6000aaed97996db952953892ce2",
"0x511dc3c12903474540d8d2cd6d0a4ee9561b345d369139216593cdd2a959d0ea",
"0x0501111e916b4783179dd9a150750ed1767cba758be2d5203c5af1f928820440",
"0xf3eee97cf9daf85562bc2e79669bbeac75b5daef7b957592d7bf4d9000ffc78d",
"0xf3dd0c30292d3967f0c840e49c649bc0f0ee8fd1ab7f838c4124ea837875b234",
"0x174da8a17521bca1e814e08ff296eea74ce520dcfd727dc94e694a6a64a20063"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
