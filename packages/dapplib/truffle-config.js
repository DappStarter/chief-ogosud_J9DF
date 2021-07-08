require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drive flock slush street recipe saddle huge goddess light army gather'; 
let testAccounts = [
"0x4cb8548a456e927959a3eb06cfaad123d3026e9fcf1e4c7161aba89d2f1e809a",
"0x9e1146bb4b32886dd00f3b0a21942cd6f47701d71d83ffd0c48ded47d6ae9bcf",
"0x9aa399c8266e0cb44647ef61685cd818610345387c9b159b851273eeb74d7766",
"0xdcb6ea9cc4e0faefb18548909c6535de61addb3463222dd16c22b8e456173cdf",
"0x7c7912035f3d2312c21dc6eaaf23826dcddda98e6caf746dda28b70f013b0240",
"0xcc84603768fbe833c5984ba57d0346ed576244a427f82ad8a2ca62e9a028eb3f",
"0x567151ac16209d995e8f46452c72a1733d4b111a8c872dd851fadde72731a244",
"0x89c552327957f3d318d990f87294f824a462b458290e6d2c6ec9410e36b4b658",
"0x2e069a7b926a0e4b4a45ed5cbb879bef86f49822a0ea59ffeb18491e5f4c0f04",
"0x0aa1f40190da1913a883c996941931ec25db1f58223109f3ec6d736efe85cf63"
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
            version: '^0.8.0'
        }
    }
};

