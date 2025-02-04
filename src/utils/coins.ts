const coins = [
  {
    chainId: 1,
    address: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
    symbol: 'stETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xae7ab96520de3a18e5e111b5eaab095312d7fe84/e4f2c8b4d0b254fe8e04880ff76d872e.png',
  },
  {
    chainId: 1,
    address: '0xbf5495Efe5DB9ce00f80364C8B423567e58d2110',
    symbol: 'ezETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xbf5495efe5db9ce00f80364c8b423567e58d2110/446998664e866e2fadceb5a96fe9f688.png',
  },
  {
    chainId: 1,
    address: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
    symbol: 'FRAX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x853d955acef822db058eb8505911ed77f175b99e/4f323e33bfffa864c577e7bd2a3257c9.png',
  },
  {
    chainId: 1,
    address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
    symbol: 'LINK',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x514910771af9ca656af840dff83e8264ecf986ca/69425617db0ef93a7c21c4f9b81c7ca5.png',
  },
  {
    chainId: 1,
    address: '0x38E68A37E401F7271568CecaAc63c6B1e19130B4',
    symbol: 'BANANA',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x38e68a37e401f7271568cecaac63c6b1e19130b4/86cad761d86ceeceeccf95e4e9732d37.png',
  },
  {
    chainId: 1,
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 1,
    address: '0xae78736Cd615f374D3085123A210448E74Fc6393',
    symbol: 'rETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xae78736cd615f374d3085123a210448e74fc6393/0a56aa87c04449332f88702b2bd5f45c.png',
  },
  {
    chainId: 1,
    address: '0x9D39A5DE30e57443BfF2A8307A4256c8797A3497',
    symbol: 'sUSDe',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x9d39a5de30e57443bff2a8307a4256c8797a3497/a9969be31b8f85c69b4cdf7b1a6f5dc5.png',
  },
  {
    chainId: 1,
    address: '0x582d872A1B094FC48F5DE31D3B73F2D9bE47def1',
    symbol: 'TONCOIN',
    decimals: 9,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x582d872a1b094fc48f5de31d3b73f2d9be47def1/71f89c6c8cd13cc99d62a263027ef074.png',
  },
  {
    chainId: 1,
    address: '0xEE2a03Aa6Dacf51C18679C516ad5283d8E7C2637',
    symbol: 'NEIRO',
    decimals: 9,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xee2a03aa6dacf51c18679c516ad5283d8e7c2637/db11d7311acd0d5e54accda50eb7fd68.png',
  },
  {
    chainId: 1,
    address: '0xD31a59c85aE9D8edEFeC411D448f90841571b89c',
    symbol: 'SOL',
    decimals: 9,
    logoURI: 'https://assets.coingecko.com/coins/images/4128/small/solana.png',
  },
  {
    chainId: 1,
    address: '0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f',
    symbol: 'GHO',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x40d16fc0246ad3160ccc09b8d0d3a2cd28ae6c2f/f6cc1d86bdf590208ab77700488d25c3.png',
  },
  {
    chainId: 1,
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    symbol: 'WETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2/61844453e63cf81301f845d7864236f6.png',
  },
  {
    chainId: 1,
    address: '0x83F20F44975D03b1b09e64809B757c47f942BEeA',
    symbol: 'sDAI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x83f20f44975d03b1b09e64809b757c47f942beea/78e145e5bbff293bf3332ac746085b80.png',
  },
  {
    chainId: 1,
    address: '0xD9A442856C234a39a81a089C06451EBAa4306a72',
    symbol: 'pufETH',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/35176/small/pufETH-200-200-resolution.png',
  },
  {
    chainId: 1,
    address: '0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7',
    symbol: 'rsETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xa1290d69c65a6fe4df752f95823fae25cb99e5a7/9b29efed86aff5a64f238d6d30032f40.png',
  },
  {
    chainId: 1,
    address: '0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee',
    symbol: 'weETH',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/33033/small/weETH.png',
  },
  {
    chainId: 1,
    address: '0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0',
    symbol: 'rswETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xfae103dc9cf190ed75350761e95403b7b8afa6c0/902fd661e3f6351fac0f8d5900d756ce.png',
  },
  {
    chainId: 1,
    address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    symbol: 'UNI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984/fcee0c46fc9864f48ce6a40ed1cdd135.png',
  },
  {
    chainId: 1,
    address: '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3',
    symbol: 'USDe',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x4c9edd5852cd905f086c759e8383e09bff1e68b3/734064e545eabfc501b9d0e752644b7d.png',
  },
  {
    chainId: 1,
    address: '0xfAbA6f8e4a5E8Ab82F62fe7C39859FA577269BE3',
    symbol: 'ONDO',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xfaba6f8e4a5e8ab82f62fe7c39859fa577269be3/5afbedf06f5827e346deada3dc7d7c39.png',
  },
  {
    chainId: 1,
    address: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
    symbol: 'MKR',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2/1d0390168de63ca803e8db7990e4f6ec.png',
  },
  {
    chainId: 1,
    address: '0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E',
    symbol: 'crvUSD',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xf939e0a03fb07f59a73314e73794be0e57ac1b4e/74af2588cde0b3c6e34e5efb271fb1f3.png',
  },
  {
    chainId: 1,
    address: '0x6c3ea9036406852006290770BEdFcAbA0e23A0e8',
    symbol: 'PYUSD',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x6c3ea9036406852006290770bedfcaba0e23a0e8/8af98a6a2c36c107eeb4b349fddb51b0.png',
  },
  {
    chainId: 1,
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    symbol: 'USDT',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    chainId: 1,
    address: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
    symbol: 'AAVE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9/eee087b66747b09dbfb4ba0b34fd3697.png',
  },
  {
    chainId: 1,
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    symbol: 'DAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  {
    chainId: 1,
    address: '0x77E06c9eCCf2E797fd462A92B6D7642EF85b0A44',
    symbol: 'wTAO',
    decimals: 9,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0xa14a26bb46e236da394da6b09a5b4cf737ce707b/be2e9c01d981b3eeaaa9c012b8d96626.png',
  },
  {
    chainId: 1,
    address: '0xD533a949740bb3306d119CC777fa900bA034cd52',
    symbol: 'CRV',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xd533a949740bb3306d119cc777fa900ba034cd52/e803d7c570b983ab84d1963cb5c03f86.png',
  },
  {
    chainId: 1,
    address: '0x18084fbA666a33d37592fA2633fD49a74DD93a88',
    symbol: 'tBTC',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x18084fba666a33d37592fa2633fd49a74dd93a88/81d0f366026c3480d25d3c1dfa5b60d3.png',
  },
  {
    chainId: 1,
    address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
    symbol: 'wstETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0/7e931af8cb34b6f5671ca2eb1b847849.png',
  },
  {
    chainId: 1,
    address: '0xBe9895146f7AF43049ca1c1AE358B0541Ea49704',
    symbol: 'cbETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xbe9895146f7af43049ca1c1ae358b0541ea49704/1f287272a7d8439af0f6b281ebf0143e.png',
  },
  {
    chainId: 1,
    address: '0x5E8422345238F34275888049021821E8E08CAa1f',
    symbol: 'frxETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x5e8422345238f34275888049021821e8e08caa1f/74628d212cf16e6183a7242b4ce71b92.png',
  },
  {
    chainId: 1,
    address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    symbol: 'WBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  },
  {
    chainId: 10,
    address: '0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1',
    symbol: 'WLD',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0xdc6ff44d5d932cbd77b52e5612ba0529dc6226f1/30ac094d49a4b6e7561810c16ddc8c69.png',
  },
  {
    chainId: 10,
    address: '0x94b008aA00579c1307B0EF2c499aD98a8ce58e58',
    symbol: 'USDT',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    chainId: 10,
    address: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
    symbol: 'USDC.e',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 10,
    address: '0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53',
    symbol: 'CRV',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x0994206dfe8de6ec6920ff4d779b0d950605fb53/9e4f7e3d92eac8b5df46b0cf8d35daa5.png',
  },
  {
    chainId: 10,
    address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
    symbol: 'ezETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xbf5495efe5db9ce00f80364c8b423567e58d2110/446998664e866e2fadceb5a96fe9f688.png',
  },
  {
    chainId: 10,
    address: '0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40',
    symbol: 'tBTC',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x6c84a8f1c29108f47a79964b5fe888d4f4d0de40/81d0f366026c3480d25d3c1dfa5b60d3.png',
  },
  {
    chainId: 10,
    address: '0x3E29D3A9316dAB217754d13b28646B76607c5f04',
    symbol: 'alETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x0100546f2cd4c9d97f798ffc9755e47865ff7ee6/258b7ffef65d8b0a25bda1c72a8fe654.png',
  },
  {
    chainId: 10,
    address: '0x9560e827aF36c94D2Ac33a39bCE1Fe78631088Db',
    symbol: 'VELO',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x9560e827af36c94d2ac33a39bce1fe78631088db/433c39cc788f0e5e31cb00dddd8b3c53.png',
  },
  {
    chainId: 10,
    address: '0xCB8FA9a76b8e203D8C3797bF438d8FB81Ea3326A',
    symbol: 'alUSD',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0xcb8fa9a76b8e203d8c3797bf438d8fb81ea3326a/b41c3a90ad538a58a28c9fd6e979e2e9.png',
  },
  {
    chainId: 10,
    address: '0x296F55F8Fb28E498B858d0BcDA06D955B2Cb3f97',
    symbol: 'STG',
    decimals: 18,
    logoURI:
      'https: //static.debank.com/image/op_token/logo_url/0x296f55f8fb28e498b858d0bcda06d955b2cb3f97/3e78cc5b8a3f077a619a7ce556b41b25.png',
  },
  {
    chainId: 10,
    address: '0xD9cC3D70E730503E7f28c1B407389198c4B75FA2',
    symbol: 'TLX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0xd9cc3d70e730503e7f28c1b407389198c4b75fa2/c29ef6c516035c122df575ef4c0e65ef.png',
  },
  {
    chainId: 10,
    address: '0x8aE125E8653821E851F12A49F7765db9a9ce7384',
    symbol: 'DOLA',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x8ae125e8653821e851f12a49f7765db9a9ce7384/0c348eedfa7f89d3db2919e0a18988ea.png',
  },
  {
    chainId: 10,
    address: '0x2E3D870790dC77A83DD1d18184Acc7439A53f475',
    symbol: 'FRAX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x2e3d870790dc77a83dd1d18184acc7439a53f475/4f323e33bfffa864c577e7bd2a3257c9.png',
  },
  {
    chainId: 10,
    address: '0x1610e3c85dd44Af31eD7f33a63642012Dca0C5A5',
    symbol: 'msETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x1610e3c85dd44af31ed7f33a63642012dca0c5a5/933ff2590fc69a995dc9df8a17573a7c.png',
  },
  {
    chainId: 10,
    address: '0xCa0E54b636DB823847B29F506BFFEE743F57729D',
    symbol: 'CHI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0xca0e54b636db823847b29f506bffee743f57729d/1a902e24524bb8c6f896fa74395e9e6a.png',
  },
  {
    chainId: 10,
    address: '0x93919784C523f39CACaa98Ee0a9d96c3F32b593e',
    symbol: 'uniBTC',
    decimals: 8,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x93919784c523f39cacaa98ee0a9d96c3f32b593e/3adc425af3410e7c7cedb1ce4f777eda.png',
  },
  {
    chainId: 10,
    address: '0xc40F949F8a4e094D1b49a23ea9241D289B7b2819',
    symbol: 'LUSD',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0xc40f949f8a4e094d1b49a23ea9241d289b7b2819/2fee99025e9128162b4869bf7ffc6036.png',
  },
  {
    chainId: 10,
    address: '0xc5b001DC33727F8F26880B184090D3E252470D45',
    symbol: 'ERN',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0xc5b001dc33727f8f26880b184090d3e252470d45/eed6eed70dda941ad4d753b96e04c235.png',
  },
  {
    chainId: 10,
    address: '0x1F514A61bcde34F94Bc39731235690ab9da737F7',
    symbol: 'TAROT',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x1f514a61bcde34f94bc39731235690ab9da737f7/279c43a0188f1a56de7921e454091a52.png',
  },
  {
    chainId: 10,
    address: '0x484c2D6e3cDd945a8B2DF735e079178C1036578c',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x484c2d6e3cdd945a8b2df735e079178c1036578c/b0802881acff20fd906a2e189a4ea882.png',
  },
  {
    chainId: 10,
    address: '0x298B9B95708152ff6968aafd889c6586e9169f1D',
    symbol: 'sBTC',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x298b9b95708152ff6968aafd889c6586e9169f1d/505fe21ba0b90cfdddf8079e46ed0993.png',
  },
  {
    chainId: 10,
    address: '0x9Bcef72be871e61ED4fBbc7630889beE758eb81D',
    symbol: 'rETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x9bcef72be871e61ed4fbbc7630889bee758eb81d/0a56aa87c04449332f88702b2bd5f45c.png',
  },
  {
    chainId: 10,
    address: '0x9dAbAE7274D28A45F0B65Bf8ED201A5731492ca0',
    symbol: 'msUSD',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x9dabae7274d28a45f0b65bf8ed201a5731492ca0/90fd1cec7514a76d89fc46fff2a8ea2c.png',
  },
  {
    chainId: 10,
    address: '0x87eEE96D50Fb761AD85B1c982d28A042169d61b1',
    symbol: 'wrsETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/blast_token/logo_url/0xe7903b1f75c534dd8159b313d92cdcfbc62cb3cd/570bd8c5a7c151124d71d35ccbfaaefb.png',
  },
  {
    chainId: 10,
    address: '0xE405de8F52ba7559f9df3C368500B6E6ae6Cee49',
    symbol: 'sETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0xe405de8f52ba7559f9df3c368500b6e6ae6cee49/5a359c53d8d08132fbc6025c49ec5b19.png',
  },
  {
    chainId: 10,
    address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    symbol: 'DAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  {
    chainId: 10,
    address: '0x2dAD3a13ef0C6366220f989157009e501e7938F8',
    symbol: 'EXTRA',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x2dad3a13ef0c6366220f989157009e501e7938f8/f6f811057d7894c585dbfaefbde2333b.png',
  },
  {
    chainId: 10,
    address: '0xc55E93C62874D8100dBd2DfE307EDc1036ad5434',
    symbol: 'mooBIFI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0xc55e93c62874d8100dbd2dfe307edc1036ad5434/cb80285e5163560bbe9ad455abae2794.png',
  },
  {
    chainId: 10,
    address: '0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6',
    symbol: 'LINK',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6/69425617db0ef93a7c21c4f9b81c7ca5.png',
  },
  {
    chainId: 10,
    address: '0x9e1028F5F1D5eDE59748FFceE5532509976840E0',
    symbol: 'PERP',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x9e1028f5f1d5ede59748ffcee5532509976840e0/f70e08dbc055f3728e7fb8053612906d.png',
  },
  {
    chainId: 10,
    address: '0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4',
    symbol: 'SNX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x8700daec35af8ff88c16bdf0418774cb3d7599b4/fb568c26c7902169572abe8fa966e791.png',
  },
  {
    chainId: 10,
    address: '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 10,
    address: '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb',
    symbol: 'wstETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x1f32b1c2345538c0c6f582fcb022739c4a194ebb/7e931af8cb34b6f5671ca2eb1b847849.png',
  },
  {
    chainId: 10,
    address: '0x4200000000000000000000000000000000000042',
    symbol: 'OP',
    decimals: 18,
    logoURI: 'https://optimistic.etherscan.io/token/images/optimism_32.png',
  },
  {
    chainId: 10,
    address: '0x76FB31fb4af56892A25e32cFC43De717950c9278',
    symbol: 'AAVE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x76fb31fb4af56892a25e32cfc43de717950c9278/6b4834c1467396a9097fde2a85c966cb.png',
  },
  {
    chainId: 10,
    address: '0x920Cf626a271321C151D027030D5d08aF699456b',
    symbol: 'KWENTA',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x920cf626a271321c151d027030d5d08af699456b/3c3b5523f2c279ed9c6a465e26627d4a.png',
  },
  {
    chainId: 10,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/coin/logo_url/usdc/e87790bfe0b3f2ea855dc29069b38818.png',
  },
  {
    chainId: 10,
    address: '0x68f180fcCe6836688e9084f035309E29Bf0A2095',
    symbol: 'WBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  },
  {
    chainId: 10,
    address: '0x4200000000000000000000000000000000000006',
    symbol: 'WETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x4200000000000000000000000000000000000006/61844453e63cf81301f845d7864236f6.png',
  },
  {
    chainId: 10,
    address: '0x217D47011b23BB961eB6D93cA9945B7501a5BB11',
    symbol: 'THALES',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x217d47011b23bb961eb6d93ca9945b7501a5bb11/0cc85ecb36d87b46ab7ce957e9b1bdd2.png',
  },
  {
    chainId: 10,
    address: '0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9',
    symbol: 'sUSD',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x8c6f28f2f1a3c87f0f938b96d27520d9751ec8d9/c699f829018dea55b6b49da32bc9a90d.png',
  },
  {
    chainId: 30,
    address: '0xef213441A85dF4d7ACbDaE0Cf78004e1E486bB96',
    symbol: 'rUSDT',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    chainId: 30,
    address: '0x542fDA317318eBF1d3DEAf76E0b632741A7e677d',
    symbol: 'WRBTC',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/rsk_token/logo_url/0x542fda317318ebf1d3deaf76e0b632741a7e677d/4785a26ef5bb5df987e67ad49fc62137.png',
  },
  {
    chainId: 56,
    address: '0xdd325C38b12903B727D16961e61333f4871A70E0',
    symbol: 'TRUNK',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/bsc_token/logo_url/0xdd325c38b12903b727d16961e61333f4871a70e0/6d115f9f2facd5a7b2d02e4c98032111.png',
  },
  {
    chainId: 56,
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    symbol: 'WBNB',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/coin/logo_url/bnb/9784283a36f23a58982fc964574ea530.png',
  },
  {
    chainId: 56,
    address: '0x570A5D26f7765Ecb712C0924E4De545B89fD43dF',
    symbol: 'SOL',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/bsc_token/logo_url/0x570a5d26f7765ecb712c0924e4de545b89fd43df/7c5db5c2eae571da837b65f5b9ae1a5c.png',
  },
  {
    chainId: 56,
    address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    symbol: 'BTCB',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/bsc_token/logo_url/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c/6f9302fa889419e4ce8745931d2e19bf.png',
  },
  {
    chainId: 56,
    address: '0x1C45366641014069114c78962bDc371F534Bc81c',
    symbol: 'binancedog',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/bsc_token/logo_url/0x1c45366641014069114c78962bdc371f534bc81c/317d07ca49d1c509a871da2dd67b3c95.png',
  },
  {
    chainId: 56,
    address: '0x55d398326f99059fF775485246999027B3197955',
    symbol: 'USDT',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    chainId: 56,
    address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    symbol: 'USDC',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 56,
    address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
    symbol: 'BUSD',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/BUSD-BD1/logo.png',
  },
  {
    chainId: 56,
    address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    symbol: 'WETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 56,
    address: '0x0782b6d8c4551B9760e74c0545a9bCD90bdc41E5',
    symbol: 'lisUSD',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/bsc_token/logo_url/0x0782b6d8c4551b9760e74c0545a9bcd90bdc41e5/b07c336a8ad2e0f73bb55b6114ad112c.png',
  },
  {
    chainId: 56,
    address: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    symbol: 'Cake',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/bsc_token/logo_url/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82/9003539eb61139bd494b7412b785d482.png',
  },
  {
    chainId: 56,
    address: '0xF563E86e461dE100CfCfD8b65dAA542d3d4B0550',
    symbol: 'COCO',
    decimals: 18,
  },
  {
    chainId: 56,
    address: '0x6830a684df938D7BD409070EeceE2ce5dB6951A3',
    symbol: 'AMC',
    decimals: 18,
  },
  {
    chainId: 100,
    address: '0x0AA1e96D2a46Ec6beB2923dE1E61Addf5F5f1dce',
    symbol: 'REG',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0x0aa1e96d2a46ec6beb2923de1e61addf5f5f1dce/c56091d1d22e34e5e77aed0c64d19338.png',
  },
  {
    chainId: 100,
    address: '0xcB444e90D8198415266c6a2724b7900fb12FC56E',
    symbol: 'EURe',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/23354/small/eur.png?1643926562',
  },
  {
    chainId: 100,
    address: '0xCa8d20f3e0144a72C6B5d576e9Bd3Fd8557E2B04',
    symbol: 'WBNB',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
  },
  {
    chainId: 100,
    address: '0x6C76971f98945AE98dD7d4DFcA8711ebea946eA6',
    symbol: 'wstETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0x6c76971f98945ae98dd7d4dfca8711ebea946ea6/7e931af8cb34b6f5671ca2eb1b847849.png',
  },
  {
    chainId: 100,
    address: '0xaBEf652195F98A91E490f047A5006B71c85f058d',
    symbol: 'crvUSD',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xf939e0a03fb07f59a73314e73794be0e57ac1b4e/74af2588cde0b3c6e34e5efb271fb1f3.png',
  },
  {
    chainId: 100,
    address: '0xcE11e14225575945b8E6Dc0D4F2dD4C570f79d9f',
    symbol: 'OLAS',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0xce11e14225575945b8e6dc0d4f2dd4c570f79d9f/74a203576022cc06c4b6691a8ee2b7c0.png',
  },
  {
    chainId: 100,
    address: '0x5Cb9073902F2035222B9749F8fB0c9BFe5527108',
    symbol: 'GBPe',
    decimals: 18,
    logoURI: 'https://monerium.app/tokens/gbp/gbp.png',
  },
  {
    chainId: 100,
    address: '0x4d18815D14fe5c3304e87B3FA18318baa5c23820',
    symbol: 'SAFE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x5afe3855358e112b5647b952709e6165e1c1eeee/46e9dd25f7a9df3b795d35232bc3c527.png',
  },
  {
    chainId: 100,
    address: '0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da',
    symbol: 'BZZ',
    decimals: 16,
    logoURI:
      'https://assets.coingecko.com/coins/images/16509/standard/Circle_Orange_onWhite.png?1696516071',
  },
  {
    chainId: 100,
    address: '0x0675e8F4A52eA6c845CB6427Af03616a2af42170',
    symbol: 'RWA Holdings SA',
    decimals: 9,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0xb80173756781960761aa59c9eeebe191f049f4c8/3f020ab59d83cddba077ae75f45f6a9a.png',
  },
  {
    chainId: 100,
    address: '0x712b3d230F3C1c19db860d80619288b1F0BDd0Bd',
    symbol: 'CRV',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0x712b3d230f3c1c19db860d80619288b1f0bdd0bd/38f4cbac8fb4ac70c384a65ae0cca337.png',
  },
  {
    chainId: 100,
    address: '0x83FF60E2f93F8eDD0637Ef669C69D5Fb4f64cA8E',
    symbol: 'BRIGHT',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/bright/icon.svg',
  },
  {
    chainId: 100,
    address: '0x177127622c4A00F3d409B75571e12cB3c8973d3c',
    symbol: 'COW',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/cow/icon.svg',
  },
  {
    chainId: 100,
    address: '0xaf204776c7245bF4147c2612BF6e5972Ee483701',
    symbol: 'sDAI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0xaf204776c7245bf4147c2612bf6e5972ee483701/8230d73bf3b22b0b095a61c79f1815cb.png',
  },
  {
    chainId: 100,
    address: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    symbol: 'WXDAI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d/3fedab836c5425fc3fc2eb542c34c81a.png',
  },
  {
    chainId: 100,
    address: '0xE2e73A1c69ecF83F464EFCE6A5be353a37cA09b2',
    symbol: 'LINK(ERC677)',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0xe2e73a1c69ecf83f464efce6a5be353a37ca09b2/69425617db0ef93a7c21c4f9b81c7ca5.png',
  },
  {
    chainId: 100,
    address: '0x256eb8a51f382650B2A1e946b8811953640ee47D',
    symbol: 'DATA',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0x256eb8a51f382650b2a1e946b8811953640ee47d/92d81b24f22a41ecae216001a0896690.png',
  },
  {
    chainId: 100,
    address: '0xec3f3e6d7907acDa3A7431abD230196CDA3FbB19',
    symbol: 'ETHIX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0xec3f3e6d7907acda3a7431abd230196cda3fbb19/9aa0c8c8a184562384e2fb066d97762f.png',
  },
  {
    chainId: 100,
    address: '0x71850b7E9Ee3f13Ab46d67167341E4bDc905Eef9',
    symbol: 'HNY',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/hny/icon.png',
  },
  {
    chainId: 100,
    address: '0x2a22f9c3b484c3629090FeED35F17Ff8F88f76F0',
    symbol: 'USDC.e',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 100,
    address: '0x004626A008B1aCdC4c74ab51644093b155e59A23',
    symbol: 'stEUR',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/AngleProtocol/angle-token-list/main/src/assets/tokens/stEUR.svg',
  },
  {
    chainId: 100,
    address: '0x9C58BAcC331c9aa871AFD802DB6379a98e80CEdb',
    symbol: 'GNO',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0x9c58bacc331c9aa871afd802db6379a98e80cedb/69e5fedeca09913fe078a8dca5b7e48c.png',
  },
  {
    chainId: 100,
    address: '0x1509706a6c66CA549ff0cB464de88231DDBe213B',
    symbol: 'AURA',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xc0c293ce456ff0ed870add98a0828dd4d2903dbf/f5bdc54131498b4bda381d301e855962.png',
  },
  {
    chainId: 100,
    address: '0x44fA8E6f47987339850636F88629646662444217',
    symbol: 'DAI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0x44fa8e6f47987339850636f88629646662444217/549c4205dbb199f1b8b03af783f35e71.png',
  },
  {
    chainId: 100,
    address: '0x4b1E2c2762667331Bc91648052F646d1b0d35984',
    symbol: 'EURA',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/AngleProtocol/angle-token-list/main/src/assets/tokens/EURA.svg',
  },
  {
    chainId: 100,
    address: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 100,
    address: '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
    symbol: 'WETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 100,
    address: '0x8e5bBbb09Ed1ebdE8674Cda39A0c169401db4252',
    symbol: 'WBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  },
  {
    chainId: 100,
    address: '0x84E2C67CBEfae6B5148fcA7d02B341B12ff4b5Bb',
    symbol: 'SWASH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0x84e2c67cbefae6b5148fca7d02b341b12ff4b5bb/2b908427254726e8c1d42f10a6ff8242.png',
  },
  {
    chainId: 100,
    address: '0x63e62989D9EB2d37dfDB1F93A22f063635b07d51',
    symbol: 'MIVA',
    decimals: 18,
    logoURI: 'https://minerva.digital/i/MIVA-Token_200x200.png',
  },
  {
    chainId: 100,
    address: '0x21a42669643f45Bc0e086b8Fc2ed70c23D67509d',
    symbol: 'FOX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0x21a42669643f45bc0e086b8fc2ed70c23d67509d/a3ba70c14f1dfe0cd7bff6c759686b33.png',
  },
  {
    chainId: 100,
    address: '0x3a97704a1b25F08aa230ae53B352e2e72ef52843',
    symbol: 'AGVE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0x3a97704a1b25f08aa230ae53b352e2e72ef52843/a7372dee979667852606fee7147f6355.png',
  },
  {
    chainId: 100,
    address: '0xe68856eb29B2FB39699286CcA7F10f90Ce8AE9De',
    symbol: 'FCL',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0xe68856eb29b2fb39699286cca7f10f90ce8ae9de/a166f40145a5b5dcabe25cd93b89126c.png',
  },
  {
    chainId: 100,
    address: '0x7eF541E2a22058048904fE5744f9c7E4C57AF717',
    symbol: 'BAL',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0x7ef541e2a22058048904fe5744f9c7e4c57af717/52990c207f4001bd9090dfd90e54374a.png',
  },
  {
    chainId: 100,
    address: '0x48b1B0d077b4919b65b4E4114806dD803901E1D9',
    symbol: 'DIP',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0x48b1b0d077b4919b65b4e4114806dd803901e1d9/d8d6c9d32dc391b9236b279210929e1b.png',
  },
  {
    chainId: 100,
    address: '0x3A3e9715018d80916740E8Ac300713FDf6614d19',
    symbol: 'hiveWATER',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0x3a3e9715018d80916740e8ac300713fdf6614d19/e1fbdc3616b4512ba639dad7a19615ce.png',
  },
  {
    chainId: 100,
    address: '0x524B969793a64a602342d89BC2789D43a016B13A',
    symbol: 'DONUT',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0x524b969793a64a602342d89bc2789d43a016b13a/89628ac4aaa272e2d3ed7820cb547dc7.png',
  },
  {
    chainId: 100,
    address: '0x4ECaBa5870353805a9F068101A40E0f32ed605C6',
    symbol: 'USDT',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    chainId: 100,
    address: '0x4f4F9b8D5B4d0Dc10506e5551B0513B61fD59e75',
    symbol: 'GIV',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0x4f4f9b8d5b4d0dc10506e5551b0513b61fd59e75/48a1779d740e93397c6204755092a146.png',
  },
  {
    chainId: 100,
    address: '0xb7D311E2Eb55F2f68a9440da38e7989210b9A05e',
    symbol: 'STAKE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0xb7d311e2eb55f2f68a9440da38e7989210b9a05e/40de992cef3fb71caa688d9b572280ce.png',
  },
  {
    chainId: 100,
    address: '0x2995D1317DcD4f0aB89f4AE60F3f020A4F17C7CE',
    symbol: 'SUSHI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png',
  },
  {
    chainId: 137,
    address: '0x87d6F8eDECcbCcA766D2880D19b2C3777D322C22',
    symbol: 'MPT',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0xB5C064F955D8e7F38fE0460C556a72987494eE17',
    symbol: 'QUICK',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0xD6DF932A45C0f255f85145f286eA0b292B21C90B',
    symbol: 'AAVE',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    symbol: 'WMATIC',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/f6e604ba0324726a3d687c618aa4f163.png',
  },
  {
    chainId: 137,
    address: '0xE9c21De62C5C5d0cEAcCe2762bF655AfDcEB7ab3',
    symbol: 'AKRE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/0xe9c21de62c5c5d0ceacce2762bf655afdceb7ab3/36b76dab8922afbfec7e39a0fa8c3794.png',
  },
  {
    chainId: 137,
    address: '0xb33EaAd8d922B1083446DC23f610c2567fB5180f',
    symbol: 'UNI',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0x692AC1e363ae34b6B489148152b12e2785a3d8d6',
    symbol: 'TRADE',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0xE6A537a407488807F0bbeb0038B79004f19DDDFb',
    symbol: 'BRLA',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/0xe6a537a407488807f0bbeb0038b79004f19dddfb/8fad19ac3be5c225760a4f4cf191d270.png',
  },
  {
    chainId: 137,
    address: '0x714DB550b574b3E927af3D93E26127D15721D4C2',
    symbol: 'GMT',
    decimals: 8,
  },
  {
    chainId: 137,
    address: '0xdF7837DE1F2Fa4631D716CF2502f8b230F1dcc32',
    symbol: 'TEL',
    decimals: 2,
  },
  {
    chainId: 137,
    address: '0x61299774020dA444Af134c82fa83E3810b309991',
    symbol: 'RNDR',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
    symbol: 'LINK',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/link/icon.png',
  },
  {
    chainId: 137,
    address: '0xAC0F66379A6d7801D7726d5a943356A172549Adb',
    symbol: 'GEOD',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0x1ef5bB23e0b91c2E8480a4a2B71Feb4607cB32F1',
    symbol: 'SGT',
    decimals: 8,
  },
  {
    chainId: 137,
    address: '0xfb7f8A2C0526D01BFB00192781B7a7761841B16C',
    symbol: 'LRT',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/0xfb7f8a2c0526d01bfb00192781b7a7761841b16c/73b095a9958d241ade0a7ff5f0618372.png',
  },
  {
    chainId: 137,
    address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    symbol: 'WETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 137,
    address: '0xfa68FB4628DFF1028CFEc22b4162FCcd0d45efb6',
    symbol: 'MaticX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/0xfa68fb4628dff1028cfec22b4162fccd0d45efb6/49c8b7e2665db48c5cecdc06abe1787c.png',
  },
  {
    chainId: 137,
    address: '0xE5417Af564e4bFDA1c483642db72007871397896',
    symbol: 'GNS',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/0xe5417af564e4bfda1c483642db72007871397896/9dc1bb50d224f58fb2e52c58785f1d59.png',
  },
  {
    chainId: 137,
    address: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    symbol: 'WBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  },
  {
    chainId: 137,
    address: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    symbol: 'USDT',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    chainId: 137,
    address: '0x172370d5Cd63279eFa6d502DAB29171933a610AF',
    symbol: 'CRV',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/crv/icon.png',
  },
  {
    chainId: 137,
    address: '0x4e78011Ce80ee02d2c3e649Fb657E45898257815',
    symbol: 'KLIMA',
    decimals: 9,
  },
  {
    chainId: 137,
    address: '0xBbba073C31bF03b8ACf7c28EF0738DeCF3695683',
    symbol: 'SAND',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0xd93f7E271cB87c23AaA73edC008A79646d1F9912',
    symbol: 'SOL',
    decimals: 9,
    logoURI: 'https://assets.coingecko.com/coins/images/4128/small/solana.png',
  },
  {
    chainId: 137,
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    symbol: 'USDC.e',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 137,
    address: '0x03b54A6e9a984069379fae1a4fC4dBAE93B3bCCD',
    symbol: 'wstETH',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0x5F2F8818002dc64753daeDF4A6CB2CcB757CD220',
    symbol: 'WSDM',
    decimals: 6,
  },
  {
    chainId: 137,
    address: '0xd0258a3fD00f38aa8090dfee343f10A9D4d30D3F',
    symbol: 'VOXEL',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
    symbol: 'STG',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0x111111517e4929D3dcbdfa7CCe55d30d4B6BC4d6',
    symbol: 'ICHI',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0x750e4C4984a9e0f12978eA6742Bc1c5D248f40ed',
    symbol: 'axlUSDC',
    decimals: 6,
  },
  {
    chainId: 137,
    address: '0xeB51D9A39AD5EEF215dC0Bf39a8821ff804A0F01',
    symbol: 'LGNS',
    decimals: 9,
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/0xeb51d9a39ad5eef215dc0bf39a8821ff804a0f01/ba0354bf0d65a950dd1ba71d884c7678.png',
  },
  {
    chainId: 137,
    address: '0x91f3B9366801C1fCa6184C3bD99d5Ab0C43A9033',
    symbol: 'ICNX',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0x311434160D7537be358930def317AfB606C0D737',
    symbol: 'NAKA',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0xbF7970D56a150cD0b60BD08388A4A75a27777777',
    symbol: 'BET',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/0xbf7970d56a150cd0b60bd08388a4a75a27777777/7b248709cffd12576998b31c915be3eb.png',
  },
  {
    chainId: 137,
    address: '0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4',
    symbol: 'stMATIC',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 137,
    address: '0xF88332547c680F755481Bf489D890426248BB275',
    symbol: 'SURE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/0xf88332547c680f755481bf489d890426248bb275/569569611ded849a5dfe189a67ba1f8a.png',
  },
  {
    chainId: 137,
    address: '0x385Eeac5cB85A38A9a07A70c73e0a3271CfB54A7',
    symbol: 'GHST',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0xC3C7d422809852031b44ab29EEC9F1EfF2A58756',
    symbol: 'LDO',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    symbol: 'DAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  {
    chainId: 137,
    address: '0x838C9634dE6590B96aEadC4Bc6DB5c28Fd17E3C2',
    symbol: 'FIRE',
    decimals: 18,
  },
  {
    chainId: 137,
    address: '0xDC3326e71D45186F113a2F448984CA0e8D201995',
    symbol: 'XSGD',
    decimals: 6,
  },
  {
    chainId: 250,
    address: '0xDE55B113A27Cc0c5893CAa6Ee1C020b6B46650C0',
    symbol: 'DEUS',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xde5ed76e7c05ec5e4572cfc88d1acea165109e44/cdd17dcac969ed22469ddfd1d1b43d06.png',
  },
  {
    chainId: 250,
    address: '0xc60D7067dfBc6f2caf30523a064f416A5Af52963',
    symbol: 'TREEB',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/ftm_token/logo_url/0xc60d7067dfbc6f2caf30523a064f416a5af52963/caafc632abc46a0adf61c69d488c5570.png',
  },
  {
    chainId: 250,
    address: '0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 250,
    address: '0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355',
    symbol: 'FRAX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/movr_token/logo_url/0x965f84d915a9efa2dd81b653e3ae736555d945f4/1f2c42cba1add081f314ee899ab67816.png',
  },
  {
    chainId: 250,
    address: '0xd7028092c830b5C8FcE061Af2E593413EbbC1fc1',
    symbol: 'sFTMX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/ftm_token/logo_url/0xd7028092c830b5c8fce061af2e593413ebbc1fc1/6fd255dabffb1244c74b6b9e79bf634d.png',
  },
  {
    chainId: 250,
    address: '0xE992bEAb6659BFF447893641A378FbbF031C5bD6',
    symbol: 'WIGO',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/ftm_token/logo_url/0xe992beab6659bff447893641a378fbbf031c5bd6/0df8a3e6d63347be8f907e6fb8b80b6e.png',
  },
  {
    chainId: 250,
    address: '0xF24Bcf4d1e507740041C9cFd2DddB29585aDCe1e',
    symbol: 'BEETS',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/ftm_token/logo_url/0xf24bcf4d1e507740041c9cfd2dddb29585adce1e/773899071d560a0f6ea95955b41dc050.png',
  },
  {
    chainId: 250,
    address: '0xfB98B335551a418cD0737375a2ea0ded62Ea213b',
    symbol: 'MAI(miMATIC)',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/0xa3fa99a148fa48d14ed51d610c367c61876997f1/be77e8e47016b1e9d3f01b7edc9b8d4f.png',
  },
  {
    chainId: 250,
    address: '0xd361474bB19C8b98870bb67F5759cDF277Dee7F9',
    symbol: 'BAY',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/ftm_token/logo_url/0xd361474bb19c8b98870bb67f5759cdf277dee7f9/a83ba1eb4802783178227ad5628930e1.png',
  },
  {
    chainId: 1329,
    address: '0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7',
    symbol: 'WSEI',
    decimals: 18,
    logoURI: 'https://cdn.sei.io/sei-app/sei-icon.png',
  },
  {
    chainId: 1329,
    address: '0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 1329,
    address: '0xB75D0B03c06A926e488e2659DF1A861F860bD3d1',
    symbol: 'USDT',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    chainId: 1329,
    address: '0x43eDD7f3831b08FE70B7555ddD373C8bF65a9050',
    symbol: 'frxETH',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/28284/standard/frxETH_icon.png',
  },
  {
    chainId: 1329,
    address: '0x80Eede496655FB9047dd39d9f418d5483ED600df',
    symbol: 'FRAX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/movr_token/logo_url/0x965f84d915a9efa2dd81b653e3ae736555d945f4/1f2c42cba1add081f314ee899ab67816.png',
  },
  {
    chainId: 5000,
    address: '0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34',
    symbol: 'USDe',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x4c9edd5852cd905f086c759e8383e09bff1e68b3/1228d6e73f70f37ec1f6fe02a3bbe6ff.png',
  },
  {
    chainId: 5000,
    address: '0x51cfe5b1E764dC253F4c8C1f19a081fF4C3517eD',
    symbol: 'MINU',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0x51cfe5b1e764dc253f4c8c1f19a081ff4c3517ed/a7e0aac809b534769f6ea64efddfec1d.png',
  },
  {
    chainId: 5000,
    address: '0xf93a85d53e4aF0D62bdf3A83CCFc1EcF3EAf9F32',
    symbol: 'LUSD',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x93b346b6bc2548da6a1e7d98e9a421b42541425b/2fee99025e9128162b4869bf7ffc6036.png',
  },
  {
    chainId: 5000,
    address: '0x5bE26527e817998A7206475496fDE1E68957c5A6',
    symbol: 'USDY',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x96f6ef951840721adbf46ac996b59e0235cb985c/97c2e77af19822f6113485277496b32c.png',
  },
  {
    chainId: 5000,
    address: '0xD2B4C9B0d70e3Da1fBDD98f469bD02E77E12FC79',
    symbol: 'aUSD (Aurelius Finance)',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0xd2b4c9b0d70e3da1fbdd98f469bd02e77e12fc79/412693781fbbe5d4ce8ee8c5dcd9a033.png',
  },
  {
    chainId: 5000,
    address: '0x5a093a9c4f440c6b105F0AF7f7C4f1fBE45567f9',
    symbol: 'STRAT',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0x5a093a9c4f440c6b105f0af7f7c4f1fbe45567f9/110510fe589682ec8df9bb35fdb12669.png',
  },
  {
    chainId: 5000,
    address: '0x4b7F28397B4294277E7825f224172944f4f5A877',
    symbol: 'INTX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0x4b7f28397b4294277e7825f224172944f4f5a877/fda9c76d5562c5fc92101bc9bfbdd22d.png',
  },
  {
    chainId: 5000,
    address: '0x406Cde76a3fD20e48bc1E0F60651e60Ae204B040',
    symbol: 'axlFRAX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0x406cde76a3fd20e48bc1e0f60651e60ae204b040/050c3d20a748cadef0d181118f3f5f26.png',
  },
  {
    chainId: 5000,
    address: '0xCAbAE6f6Ea1ecaB08Ad02fE02ce9A44F09aebfA2',
    symbol: 'WBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  },
  {
    chainId: 5000,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0xeb466342c4d449bc9f53a865d5cb90586f405215/7c4709a6d625beefa3190168f350c50e.png',
  },
  {
    chainId: 5000,
    address: '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 5000,
    address: '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8',
    symbol: 'WMNT',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8/a443c78c33704d48f06e5686bb87f85e.png',
  },
  {
    chainId: 5000,
    address: '0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE',
    symbol: 'USDT',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    chainId: 5000,
    address: '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111',
    symbol: 'WETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 5000,
    address: '0x371c7ec6D8039ff7933a2AA28EB827Ffe1F52f07',
    symbol: 'JOE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0x371c7ec6d8039ff7933a2aa28eb827ffe1f52f07/abfd4f4a3840c0b93a20dc65a8d90994.png',
  },
  {
    chainId: 5000,
    address: '0x4515A45337F461A11Ff0FE8aBF3c606AE5dC00c9',
    symbol: 'MOE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0x4515a45337f461a11ff0fe8abf3c606ae5dc00c9/9603cd76b71dbeb0385c9e03e0cffec4.png',
  },
  {
    chainId: 5000,
    address: '0x25356aeca4210eF7553140edb9b8026089E49396',
    symbol: 'LEND',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0x25356aeca4210ef7553140edb9b8026089e49396/07f98ac529e67cb05adec6bfd4acfaab.png',
  },
  {
    chainId: 5000,
    address: '0xb829b68f57CC546dA7E5806A929e53bE32a4625D',
    symbol: 'axlETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2/61844453e63cf81301f845d7864236f6.png',
  },
  {
    chainId: 5000,
    address: '0x26a6b0dcdCfb981362aFA56D581e4A7dBA3Be140',
    symbol: 'PUFF',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0x26a6b0dcdcfb981362afa56d581e4a7dba3be140/89cc8d5fe06eddf9e495e16ac23dc260.png',
  },
  {
    chainId: 5000,
    address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
    symbol: 'frxETH(axelar)',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0xecc68d0451e20292406967fe7c04280e5238ac7d/71b8a5f7684c752901272fb31842abdf.png',
  },
  {
    chainId: 5000,
    address: '0xC96dE26018A54D51c097160568752c4E3BD6C364',
    symbol: 'FBTC',
    decimals: 8,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xc96de26018a54d51c097160568752c4e3bd6c364/fef24aea0e8d4cdd45f26eb5cd0e6c5e.png',
  },
  {
    chainId: 5000,
    address: '0x58538e6A46E07434d7E7375Bc268D3cb839C0133',
    symbol: 'ENA',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0x58538e6a46e07434d7e7375bc268d3cb839c0133/20d567bc301b43d0d2131731f7ac4736.png',
  },
  {
    chainId: 5000,
    address: '0xcDA86A272531e8640cD7F1a92c01839911B90bb0',
    symbol: 'mETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xd5f7838f5c461feff7fe49ea5ebaf7728bb0adfa/64a2a03b592974721e4ca6dec7974b84.png',
  },
  {
    chainId: 8453,
    address: '0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed',
    symbol: 'DEGEN',
    decimals: 18,
    logoURI: 'https://strapi.jumper.exchange/uploads/degen_38108fbdaa.webp',
  },
  {
    chainId: 8453,
    address: '0xBC45647eA894030a4E9801Ec03479739FA2485F0',
    symbol: 'BENJI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/base_token/logo_url/0xbc45647ea894030a4e9801ec03479739fa2485f0/c9c1cb4f4635db1453128235e5124ba6.png',
  },
  {
    chainId: 8453,
    address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 8453,
    address: '0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA',
    symbol: 'USDbC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 8453,
    address: '0x60a3E35Cc302bFA44Cb288Bc5a4F316Fdb1adb42',
    symbol: 'EURC',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x1abaea1f7c830bd89acc67ec4af516284b1bc33c/790d0c3a6da87111b66255c0d57108fa.png',
  },
  {
    chainId: 8453,
    address: '0x96419929d7949D6A801A6909c145C8EEf6A40431',
    symbol: 'SPEC',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/base_token/logo_url/0x96419929d7949d6a801a6909c145c8eef6a40431/cbad3f4aa11d19e85c4c0392730e346e.png',
  },
  {
    chainId: 8453,
    address: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
    symbol: 'cbETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xbe9895146f7af43049ca1c1ae358b0541ea49704/1f287272a7d8439af0f6b281ebf0143e.png',
  },
  {
    chainId: 8453,
    address: '0xB79DD08EA68A908A97220C76d19A6aA9cBDE4376',
    symbol: 'USD+',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/base_token/logo_url/0xb79dd08ea68a908a97220c76d19a6aa9cbde4376/58363c9095ed5998f48688b3c52c78c7.png',
  },
  {
    chainId: 8453,
    address: '0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b',
    symbol: 'tBTC',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/base_token/logo_url/0x236aa50979d5f3de3bd1eeb40e81137f22ab794b/81d0f366026c3480d25d3c1dfa5b60d3.png',
  },
  {
    chainId: 8453,
    address: '0x940181a94A35A4569E4529A3CDfB74e38FD98631',
    symbol: 'AERO',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/aero/icon.png',
  },
  {
    chainId: 8453,
    address: '0x532f27101965dd16442E59d40670FaF5eBB142E4',
    symbol: 'BRETT',
    decimals: 18,
    logoURI: 'https://strapi.jumper.exchange/uploads/brett_ca2d328cc8.jpeg',
  },
  {
    chainId: 8453,
    address: '0xfde4C96c8593536E31F229EA8f37b2ADa2699bb2',
    symbol: 'USDT',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/coin/logo_url/usdt/23af7472292cb41dc39b3f1146ead0fe.png',
  },
  {
    chainId: 8453,
    address: '0x4200000000000000000000000000000000000006',
    symbol: 'WETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/coin/logo_url/eth/d61441782d4a08a7479d54aea211679e.png',
  },
  {
    chainId: 8453,
    address: '0xc1CBa3fCea344f92D9239c08C0568f6F2F0ee452',
    symbol: 'wstETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/wsteth/icon.png',
  },
  {
    chainId: 8453,
    address: '0x4621b7A9c75199271F773Ebd9A499dbd165c3191',
    symbol: 'DOLA',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x6a7661795c374c0bfc635934efaddff3a7ee23b6/0c348eedfa7f89d3db2919e0a18988ea.png',
  },
  {
    chainId: 8453,
    address: '0xB1a03EdA10342529bBF8EB700a06C60441fEf25d',
    symbol: 'MIGGLES',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/base_token/logo_url/0xb1a03eda10342529bbf8eb700a06c60441fef25d/1e439c1e64dc782703dea55df9b5a05b.png',
  },
  {
    chainId: 8453,
    address: '0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb',
    symbol: 'DAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  {
    chainId: 8453,
    address: '0x04D5ddf5f3a8939889F11E97f8c4BB48317F1938',
    symbol: 'USDz',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/base_token/logo_url/0x04d5ddf5f3a8939889f11e97f8c4bb48317f1938/9eb899b719be292ce1e7c3685a86d2cc.png',
  },
  {
    chainId: 8453,
    address: '0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A',
    symbol: 'weETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/weeth/icon.png',
  },
  {
    chainId: 42161,
    address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
    symbol: 'ezETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x2416092f143378750bb29b79ed961ab195cceea5/a66d77b85dfd99539744bc62966e1fac.png',
  },
  {
    chainId: 42161,
    address: '0x7CFaDFD5645B50bE87d546f42699d863648251ad',
    symbol: 'stataArbUSDCn',
    decimals: 6,
  },
  {
    chainId: 42161,
    address: '0x4Cb9a7AE498CEDcBb5EAe9f25736aE7d428C9D66',
    symbol: 'XAI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x4cb9a7ae498cedcbb5eae9f25736ae7d428c9d66/596617ad2adab8c4b0902e89b9c1208b.png',
  },
  {
    chainId: 42161,
    address: '0x323665443CEf804A3b5206103304BD4872EA4253',
    symbol: 'USDV',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x323665443cef804a3b5206103304bd4872ea4253/65be2a80233d0791601d1965032c233f.png',
  },
  {
    chainId: 42161,
    address: '0x6985884C4392D348587B19cb9eAAf157F13271cd',
    symbol: 'ZRO',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x6985884c4392d348587b19cb9eaaf157f13271cd/3ecef8f42218c978abb7d12c14df3fef.png',
  },
  {
    chainId: 42161,
    address: '0x7dfF72693f6A4149b17e7C6314655f6A9F7c8B33',
    symbol: 'GHO',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x40d16fc0246ad3160ccc09b8d0d3a2cd28ae6c2f/f6cc1d86bdf590208ab77700488d25c3.png',
  },
  {
    chainId: 42161,
    address: '0x1DEBd73E752bEaF79865Fd6446b0c970EaE7732f',
    symbol: 'cbETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x1debd73e752beaf79865fd6446b0c970eae7732f/e5ec1d605518e827e08594b2aff84d7f.png',
  },
  {
    chainId: 42161,
    address: '0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8',
    symbol: 'rETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0xec70dcb4a1efa46b8f2d97c310c9c4790ba5ffa8/6c8aa3f550d300ce84e06f95c496af69.png',
  },
  {
    chainId: 42161,
    address: '0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F',
    symbol: 'FRAX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/movr_token/logo_url/0x965f84d915a9efa2dd81b653e3ae736555d945f4/1f2c42cba1add081f314ee899ab67816.png',
  },
  {
    chainId: 42161,
    address: '0x539bdE0d7Dbd336b79148AA742883198BBF60342',
    symbol: 'MAGIC',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/arbitrum/assets/0x539bdE0d7Dbd336b79148AA742883198BBF60342/logo.png',
  },
  {
    chainId: 42161,
    address: '0x57F5E098CaD7A3D1Eed53991D4d66C45C9AF7812',
    symbol: 'wUSDM',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x57f5e098cad7a3d1eed53991d4d66c45c9af7812/1de546037bee94e4bc8cad6ee76e3474.png',
  },
  {
    chainId: 42161,
    address: '0x18C14C2D707b2212e17d1579789Fc06010cfca23',
    symbol: 'ETH+',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x18c14c2d707b2212e17d1579789fc06010cfca23/9619944215b12a9448419c32acde27d5.png',
  },
  {
    chainId: 42161,
    address: '0x4186BFC76E2E237523CBC30FD220FE055156b41F',
    symbol: 'rsETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/blast_token/logo_url/0xe7903b1f75c534dd8159b313d92cdcfbc62cb3cd/570bd8c5a7c151124d71d35ccbfaaefb.png',
  },
  {
    chainId: 42161,
    address: '0x6c84a8f1c29108F47a79964b5Fe888D4f4D0dE40',
    symbol: 'tBTC',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x6c84a8f1c29108f47a79964b5fe888d4f4d0de40/81d0f366026c3480d25d3c1dfa5b60d3.png',
  },
  {
    chainId: 42161,
    address: '0x35751007a407ca6FEFfE80b3cB397736D2cf4dbe',
    symbol: 'weETH',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/33033/small/weETH.png',
  },
  {
    chainId: 42161,
    address: '0x2bcC6D6CdBbDC0a4071e48bb3B969b06B3330c07',
    symbol: 'SOL',
    decimals: 9,
    logoURI:
      'https://static.debank.com/image/cro_token/logo_url/0xc9de0f3e08162312528ff72559db82590b481800/95e560579d7e1ac080370f9b0a1ae739.png',
  },
  {
    chainId: 42161,
    address: '0xD56734d7f9979dD94FAE3d67C7e928234e71cD4C',
    symbol: 'TIA.n',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0xd56734d7f9979dd94fae3d67c7e928234e71cd4c/3c3f24b022a460d15e9b20d556571119.png',
  },
  {
    chainId: 42161,
    address: '0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34',
    symbol: 'USDe',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x4c9edd5852cd905f086c759e8383e09bff1e68b3/734064e545eabfc501b9d0e752644b7d.png',
  },
  {
    chainId: 42161,
    address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    symbol: 'WETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/era_token/logo_url/0x5aea5775959fbc2557cc8789bc1bf90a239d9a91/61844453e63cf81301f845d7864236f6.png',
  },
  {
    chainId: 42161,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0xeb466342c4d449bc9f53a865d5cb90586f405215/7c4709a6d625beefa3190168f350c50e.png',
  },
  {
    chainId: 42161,
    address: '0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978',
    symbol: 'CRV',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x11cdb42b0eb46d95f990bedd4695a6e3fa034978/38f4cbac8fb4ac70c384a65ae0cca337.png',
  },
  {
    chainId: 42161,
    address: '0xba5DdD1f9d7F570dc94a51479a000E3BCE967196',
    symbol: 'AAVE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0xba5ddd1f9d7f570dc94a51479a000e3bce967196/05e8dd086dd59a1bed1204991f09e9b8.png',
  },
  {
    chainId: 42161,
    address: '0x2C650dAb03A59332e2E0C0C4A7F726913e5028C1',
    symbol: 'TAP',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x2c650dab03a59332e2e0c0c4a7f726913e5028c1/f7413086f3a07a0ca613c54d55eb6bfb.png',
  },
  {
    chainId: 42161,
    address: '0x95aB45875cFFdba1E5f451B950bC2E42c0053f39',
    symbol: 'sfrxETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x95ab45875cffdba1e5f451b950bc2e42c0053f39/b0802881acff20fd906a2e189a4ea882.png',
  },
  {
    chainId: 42161,
    address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 42161,
    address: '0x894134a25a5faC1c2C26F1d8fBf05111a3CB9487',
    symbol: 'GRAI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x15f74458ae0bfdaa1a96ca1aa779d715cc1eefe4/e0fc093b4bd9b35b815f4ae51c2d10b1.png',
  },
  {
    chainId: 42161,
    address: '0x912CE59144191C1204E64559FE8253a0e49E6548',
    symbol: 'ARB',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/coin/logo_url/arbitrum/854f629937ce94bebeb2cd38fb336de7.png',
  },
  {
    chainId: 42161,
    address: '0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A',
    symbol: 'MIM',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a/7d0c0fb6eab1b7a8a9bfb7dcc04cb11e.png',
  },
  {
    chainId: 42161,
    address: '0x8B0E6f19Ee57089F7649A455D89D7bC6314D04e8',
    symbol: 'DMT',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x8b0e6f19ee57089f7649a455d89d7bc6314d04e8/ff8bf9ccd51718bfa94fe180619aa6b8.png',
  },
  {
    chainId: 42161,
    address: '0xe80772Eaf6e2E18B651F160Bc9158b2A5caFCA65',
    symbol: 'USD+',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0xe80772eaf6e2e18b651f160bc9158b2a5cafca65/58363c9095ed5998f48688b3c52c78c7.png',
  },
  {
    chainId: 42161,
    address: '0x18c11FD286C5EC11c3b683Caa813B77f5163A122',
    symbol: 'GNS',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x18c11fd286c5ec11c3b683caa813b77f5163a122/35fda8612eb2354b2436925648e7a87e.png',
  },
  {
    chainId: 42161,
    address: '0x3d15fD46CE9e551498328B1C83071D9509E2C3a0',
    symbol: 'uniETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xf1376bcef0f78459c0ed0ba5ddce976f1ddf51f4/7759653b60cfa11bd7f8055d09e99518.png',
  },
  {
    chainId: 42161,
    address: '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0',
    symbol: 'UNI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0/fcee0c46fc9864f48ce6a40ed1cdd135.png',
  },
  {
    chainId: 42161,
    address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
    symbol: 'USDT',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    chainId: 42161,
    address: '0x0c880f6761F1af8d9Aa9C466984b80DAb9a8c9e8',
    symbol: 'PENDLE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x0c880f6761f1af8d9aa9c466984b80dab9a8c9e8/b9351f830cd0a6457e489b8c685f29ad.png',
  },
  {
    chainId: 42161,
    address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
    symbol: 'DAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  {
    chainId: 42161,
    address: '0x5979D7b546E38E414F7E9822514be443A4800529',
    symbol: 'wstETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x5979d7b546e38e414f7e9822514be443a4800529/7e931af8cb34b6f5671ca2eb1b847849.png',
  },
  {
    chainId: 42161,
    address: '0xd3443ee1e91aF28e5FB858Fbd0D72A63bA8046E0',
    symbol: 'gUSDC',
    decimals: 6,
  },
  {
    chainId: 42161,
    address: '0xAAA6C1E32C55A7Bfa8066A6FAE9b42650F262418',
    symbol: 'RAM',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0xaaa6c1e32c55a7bfa8066a6fae9b42650f262418/8b5651438f81972568d51f0b96773cf6.png',
  },
  {
    chainId: 42161,
    address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
    symbol: 'WBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  },
  {
    chainId: 42161,
    address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
    symbol: 'USDC.e',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 42161,
    address: '0x13Ad51ed4F1B7e9Dc168d8a00cB3f4dDD85EfA60',
    symbol: 'LDO',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x13ad51ed4f1b7e9dc168d8a00cb3f4ddd85efa60/3a1a90da5ccd4849de3e83755f1fd8b5.png',
  },
  {
    chainId: 42161,
    address: '0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a',
    symbol: 'GMX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a/b4e362278f64a738b878e5393fa29837.png',
  },
  {
    chainId: 42161,
    address: '0x3082CC23568eA640225c2467653dB90e9250AaA0',
    symbol: 'RDNT',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0x3082cc23568ea640225c2467653db90e9250aaa0/ea263e16416758847c115ba9da80cd1a.png',
  },
  {
    chainId: 42161,
    address: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
    symbol: 'LINK',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0xf97f4df75117a78c1a5a0dbb814af92458539fb4/69425617db0ef93a7c21c4f9b81c7ca5.png',
  },
  {
    chainId: 42220,
    address: '0x64dEFa3544c695db8c535D289d843a189aa26b98',
    symbol: 'mCUSD',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x64defa3544c695db8c535d289d843a189aa26b98/0e46275acdcab84b5371acab3a6d43ef.png',
  },
  {
    chainId: 42220,
    address: '0xD629eb00dEced2a080B7EC630eF6aC117e614f1b',
    symbol: 'BTC',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0xd629eb00deced2a080b7ec630ef6ac117e614f1b/58568be16793bcf1a71c1a2c0067f514.png',
  },
  {
    chainId: 42220,
    address: '0x27cd006548dF7C8c8e9fdc4A67fa05C2E3CA5CF9',
    symbol: 'PLASTIK',
    decimals: 9,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x27cd006548df7c8c8e9fdc4a67fa05c2e3ca5cf9/e64140410ab4611b64c3d0f5053227f8.png',
  },
  {
    chainId: 42220,
    address: '0xE4fE50cdD716522A56204352f00AA110F731932d',
    symbol: 'DAI(optics v1)',
    decimals: 18,
  },
  {
    chainId: 42220,
    address: '0x74c0C58B99b68cF16A717279AC2d056A34ba2bFe',
    symbol: 'SOURCE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x74c0c58b99b68cf16a717279ac2d056a34ba2bfe/834489d742cc7da5bb387b464a4396cb.png',
  },
  {
    chainId: 42220,
    address: '0x02De4766C272abc10Bc88c220D214A26960a7e92',
    symbol: 'NCT',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x02de4766c272abc10bc88c220d214a26960a7e92/d888558aa983920f04321cb0351167cb.png',
  },
  {
    chainId: 42220,
    address: '0xC16B81Af351BA9e64C1a069E3Ab18c244A1E3049',
    symbol: 'EURA',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/AngleProtocol/angle-token-list/main/src/assets/tokens/EURA.svg',
  },
  {
    chainId: 42220,
    address: '0x1d18d0386F51ab03E7E84E71BdA1681EbA865F1f',
    symbol: 'JMPT',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x1d18d0386f51ab03e7e84e71bda1681eba865f1f/714c635ea5c381052955fb54e73c501c.png',
  },
  {
    chainId: 42220,
    address: '0x2A3684e9Dc20B857375EA04235F2F7edBe818FA7',
    symbol: 'USDC',
    decimals: 6,
  },
  {
    chainId: 42220,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0xeb466342c4d449bc9f53a865d5cb90586f405215/40684716e4565ab36a959d59cc4e4a4b.png',
  },
  {
    chainId: 42220,
    address: '0x2DEf4285787d58a2f811AF24755A8150622f4361',
    symbol: 'cETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x2def4285787d58a2f811af24755a8150622f4361/1e59620be2b4f3fc249fdc840c447b62.png',
  },
  {
    chainId: 42220,
    address: '0x122013fd7dF1C6F636a5bb8f03108E876548b455',
    symbol: 'WETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 42220,
    address: '0x00Be915B9dCf56a3CBE739D9B9c202ca692409EC',
    symbol: 'UBE(old)',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x00be915b9dcf56a3cbe739d9b9c202ca692409ec/48bd08cbaaf9602accffd13db6020a6b.png',
  },
  {
    chainId: 42220,
    address: '0x9995cc8F20Db5896943Afc8eE0ba463259c931ed',
    symbol: 'ETHIX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x9995cc8f20db5896943afc8ee0ba463259c931ed/9aa0c8c8a184562384e2fb066d97762f.png',
  },
  {
    chainId: 42220,
    address: '0x765DE816845861e75A25fCA122bb6898B8B1282a',
    symbol: 'cUSD',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/coin/logo_url/celo_usd/cb8baaa8eb6dd3078a60cfebfa4fa4b5.png',
  },
  {
    chainId: 42220,
    address: '0xBe50a3013A1c94768A1ABb78c3cB79AB28fc1aCE',
    symbol: 'WBTC',
    decimals: 8,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0xbe50a3013a1c94768a1abb78c3cb79ab28fc1ace/1dae003fa89234ac011c0dac51126770.png',
  },
  {
    chainId: 42220,
    address: '0xD8763CBa276a3738E6DE85b4b3bF5FDed6D6cA73',
    symbol: 'cEUR',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0xd8763cba276a3738e6de85b4b3bf5fded6d6ca73/f00fcdbf2e75d1d5a8dbbe57653ecbb5.png',
  },
  {
    chainId: 42220,
    address: '0x37f750B7cC259A2f741AF45294f6a16572CF5cAd',
    symbol: 'USDC(wormhole)',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x37f750b7cc259a2f741af45294f6a16572cf5cad/9f595c15ce0760125c15013f7bc27bb0.png',
  },
  {
    chainId: 42220,
    address: '0xa8d0E6799FF3Fd19c6459bf02689aE09c4d78Ba7',
    symbol: 'mCEUR',
    decimals: 18,
  },
  {
    chainId: 42220,
    address: '0xE273Ad7ee11dCfAA87383aD5977EE1504aC07568',
    symbol: 'mCEUR',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0xe273ad7ee11dcfaa87383ad5977ee1504ac07568/7ed8826cb36d17b032528714ce908b20.png',
  },
  {
    chainId: 42220,
    address: '0xcebA9300f2b948710d2653dD7B07f33A8B32118C',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0xceba9300f2b948710d2653dd7b07f33a8b32118c/fffcd27b9efff5a86ab942084c05924d.png',
  },
  {
    chainId: 42220,
    address: '0x617f3112bf5397D0467D315cC709EF968D9ba546',
    symbol: 'USDT',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x617f3112bf5397d0467d315cc709ef968d9ba546/f1992d97a61c154a388c0de34cb136f3.png',
  },
  {
    chainId: 42220,
    address: '0x918146359264C492BD6934071c6Bd31C854EDBc3',
    symbol: 'mCUSD',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x918146359264c492bd6934071c6bd31c854edbc3/7ed8826cb36d17b032528714ce908b20.png',
  },
  {
    chainId: 42220,
    address: '0x66803FB87aBd4aaC3cbB3fAd7C3aa01f6F3FB207',
    symbol: 'WETH(wormhole)',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/coin/logo_url/eth/6443cdccced33e204d90cb723c632917.png',
  },
  {
    chainId: 42220,
    address: '0x9802d866fdE4563d088a6619F7CeF82C0B991A55',
    symbol: 'mCREAL',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x9802d866fde4563d088a6619f7cef82c0b991a55/d3af3a9261c4570266045c7911feb735.png',
  },
  {
    chainId: 42220,
    address: '0xE919F65739c26a42616b7b8eedC6b5524d1e3aC4',
    symbol: 'WETH(optics v1)',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/coin/logo_url/eth/6443cdccced33e204d90cb723c632917.png',
  },
  {
    chainId: 42220,
    address: '0x71e26d0E519D14591b9dE9a0fE9513A398101490',
    symbol: 'UBE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x71e26d0e519d14591b9de9a0fe9513a398101490/49d1e88f01922eb22aa16c3a5e73ae68.png',
  },
  {
    chainId: 42220,
    address: '0x6e512BFC33be36F2666754E996ff103AD1680Cc9',
    symbol: 'ABR',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x6e512bfc33be36f2666754e996ff103ad1680cc9/dac637655fe8a6cf4d2cbadb16c10d5f.png',
  },
  {
    chainId: 42220,
    address: '0xe8537a3d056DA446677B9E9d6c5dB704EaAb4787',
    symbol: 'cREAL',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0xe8537a3d056da446677b9e9d6c5db704eaab4787/3067313fdb2b7c309dc8df62f522359a.png',
  },
  {
    chainId: 42220,
    address: '0x17700282592D6917F6A73D0bF8AcCf4D578c131e',
    symbol: 'MOO',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0x17700282592d6917f6a73d0bf8accf4d578c131e/7ed8826cb36d17b032528714ce908b20.png',
  },
  {
    chainId: 42220,
    address: '0x471EcE3750Da237f93B8E339c536989b8978a438',
    symbol: 'CELO',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5567.png',
  },
  {
    chainId: 42220,
    address: '0xD15EC721C2A896512Ad29C671997DD68f9593226',
    symbol: 'SUSHI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/celo_token/logo_url/0xd15ec721c2a896512ad29c671997dd68f9593226/930cd4a36e687eaeddbcf9f3fd22d023.png',
  },
  {
    chainId: 43114,
    address: '0xc7198437980c041c805A1EDcbA50c1Ce5db95118',
    symbol: 'USDT.e',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    chainId: 43114,
    address: '0xd402298a793948698b9a63311404FBBEe944eAfD',
    symbol: 'SHRAP',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0xd402298a793948698b9a63311404fbbee944eafd/c52176bb4b9c5b0c47373f6627f08e28.png',
  },
  {
    chainId: 43114,
    address: '0xfaB550568C688d5D8A52C7d794cb93Edc26eC0eC',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/coin/logo_url/usdc/e87790bfe0b3f2ea855dc29069b38818.png',
  },
  {
    chainId: 43114,
    address: '0xAcFb898Cff266E53278cC0124fC2C7C94C8cB9a5',
    symbol: 'NOCHILL',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0xacfb898cff266e53278cc0124fc2c7c94c8cb9a5/7394a88856ae552f01da9ba572ef1c7c.png',
  },
  {
    chainId: 43114,
    address: '0x46B9144771Cb3195D66e4EDA643a7493fADCAF9D',
    symbol: 'BLS',
    decimals: 18,
  },
  {
    chainId: 43114,
    address: '0xCa8EBfB8e1460Aaac7c272CB9053B3D42412AAc2',
    symbol: 'GAU',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0xca8ebfb8e1460aaac7c272cb9053b3d42412aac2/89221488df7dbcef703deefd43de7b26.png',
  },
  {
    chainId: 43114,
    address: '0x69260B9483F9871ca57f81A90D91E2F96c2Cd11d',
    symbol: 'GGP',
    decimals: 18,
  },
  {
    chainId: 43114,
    address: '0x152b9d0FdC40C096757F570A51E494bd4b943E50',
    symbol: 'BTC.b',
    decimals: 8,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0x152b9d0fdc40c096757f570a51e494bd4b943e50/2411fb147c1cc4328edff5d204f09f80.png',
  },
  {
    chainId: 43114,
    address: '0x62D0A8458eD7719FDAF978fe5929C6D342B0bFcE',
    symbol: 'BEAM',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/bsc_token/logo_url/0x62d0a8458ed7719fdaf978fe5929c6d342b0bfce/5ea3d28dddef625d13c6b7b1e395d7bf.png',
  },
  {
    chainId: 43114,
    address: '0x9d228444FC4B7E15A2C481b48E10247A03351FD8',
    symbol: 'USDT(wormhole)',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/coin/logo_url/usdt/23af7472292cb41dc39b3f1146ead0fe.png',
  },
  {
    chainId: 43114,
    address: '0x8aD25B0083C9879942A64f00F20a70D3278f6187',
    symbol: 'MEOW',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0x8ad25b0083c9879942a64f00f20a70d3278f6187/d4d310d2213d5272e67719109785bf22.png',
  },
  {
    chainId: 43114,
    address: '0x6985884C4392D348587B19cb9eAAf157F13271cd',
    symbol: 'ZRO',
    decimals: 18,
  },
  {
    chainId: 43114,
    address: '0xA25EaF2906FA1a3a13EdAc9B9657108Af7B703e3',
    symbol: 'ggAVAX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0xa25eaf2906fa1a3a13edac9b9657108af7b703e3/84099a1e3b6f43a44dbf81508810ea54.png',
  },
  {
    chainId: 43114,
    address: '0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd',
    symbol: 'JOE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd/25f094b523a2d6c51e084eeb8f60dd2f.png',
  },
  {
    chainId: 43114,
    address: '0x214DB107654fF987AD859F34125307783fC8e387',
    symbol: 'FXS',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0x214db107654ff987ad859f34125307783fc8e387/606b85af55178ace1c229f9fdc0a5a35.png',
  },
  {
    chainId: 43114,
    address: '0xec3492a2508DDf4FDc0cD76F31f340b30d1793e6',
    symbol: 'CLY',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0xec3492a2508ddf4fdc0cd76f31f340b30d1793e6/072525e54e1edd7b770e1998c28c09ef.png',
  },
  {
    chainId: 43114,
    address: '0x130966628846BFd36ff31a822705796e8cb8C18D',
    symbol: 'MIM',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0x130966628846bfd36ff31a822705796e8cb8c18d/7d0c0fb6eab1b7a8a9bfb7dcc04cb11e.png',
  },
  {
    chainId: 43114,
    address: '0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB',
    symbol: 'WETH.e',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 43114,
    address: '0xa77e70d0Af1Ac7fF86726740dB1Bd065c3566937',
    symbol: 'w3ULL',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0xa77e70d0af1ac7ff86726740db1bd065c3566937/17ccaaccf777fc50b0a2a986614bd957.png',
  },
  {
    chainId: 43114,
    address: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664',
    symbol: 'USDC.e',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 43114,
    address: '0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE',
    symbol: 'sAVAX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0x2b2c81e08f1af8835a78bb2a90ae924ace0ea4be/1c9f8f5ffdcd19e813f85159be7663a2.png',
  },
  {
    chainId: 43114,
    address: '0xC891EB4cbdEFf6e073e859e987815Ed1505c2ACD',
    symbol: 'EUROC',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0xc891eb4cbdeff6e073e859e987815ed1505c2acd/790d0c3a6da87111b66255c0d57108fa.png',
  },
  {
    chainId: 43114,
    address: '0x63a72806098Bd3D9520cC43356dD78afe5D386D9',
    symbol: 'AAVE.e',
    decimals: 18,
  },
  {
    chainId: 43114,
    address: '0x62edc0692BD897D2295872a9FFCac5425011c661',
    symbol: 'GMX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0x62edc0692bd897d2295872a9ffcac5425011c661/b4e362278f64a738b878e5393fa29837.png',
  },
  {
    chainId: 43114,
    address: '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
    symbol: 'STG',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0x2f6f07cdcf3588944bf4c42ac74ff24bf56e7590/55886c6280173254776780fd8340cca7.png',
  },
  {
    chainId: 43114,
    address: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 43114,
    address: '0xFc6Da929c031162841370af240dEc19099861d3B',
    symbol: 'DOMI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0xfc6da929c031162841370af240dec19099861d3b/11fa1b215ffa3c0f653fb9534a63ee77.png',
  },
  {
    chainId: 43114,
    address: '0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7',
    symbol: 'USDt',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/superfluid-finance/assets/master/public/tokens/usdt/icon.png',
  },
  {
    chainId: 43114,
    address: '0xd586E7F844cEa2F87f50152665BCbc2C279D8d70',
    symbol: 'DAI.e',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  {
    chainId: 43114,
    address: '0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5',
    symbol: 'QI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/coin/logo_url/benqi/d5c628179ceda10dc36eca921d9bfeb3.png',
  },
  {
    chainId: 43114,
    address: '0x8b82A291F83ca07Af22120ABa21632088fC92931',
    symbol: 'ETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0x8b82a291f83ca07af22120aba21632088fc92931/50343a575390e309187db84f5ad13aee.png',
  },
  {
    chainId: 43114,
    address: '0x50b7545627a5162F82A992c33b87aDc75187B218',
    symbol: 'WBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  },
  {
    chainId: 43114,
    address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    symbol: 'WAVAX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7/753d82f0137617110f8dec56309b4065.png',
  },
  {
    chainId: 43114,
    address: '0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64',
    symbol: 'FRAX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64/4f323e33bfffa864c577e7bd2a3257c9.png',
  },
  {
    chainId: 43114,
    address: '0x5947BB275c521040051D82396192181b413227A3',
    symbol: 'LINK.e',
    decimals: 18,
  },
  {
    chainId: 43114,
    address: '0xd1c3f94DE7e5B45fa4eDBBA472491a9f4B166FC4',
    symbol: 'XAVA',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0xd1c3f94de7e5b45fa4edbba472491a9f4b166fc4/b3eeb92e42d7dd19054091a505bd81bf.png',
  },
  {
    chainId: 43114,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'AVAX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/avax/0b9c84359c84d6bdd5bfda9c2d4c4a82.png',
  },
  {
    chainId: 59144,
    address: '0xB5beDd42000b71FddE22D3eE8a79Bd49A568fC8F',
    symbol: 'wstETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0/7e931af8cb34b6f5671ca2eb1b847849.png',
  },
  {
    chainId: 59144,
    address: '0x43E8809ea748EFf3204ee01F08872F063e44065f',
    symbol: 'MENDI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x43e8809ea748eff3204ee01f08872f063e44065f/45bef14f0dd20c121236ae8cfbc5978c.png',
  },
  {
    chainId: 59144,
    address: '0x93F4d0ab6a8B4271f4a28Db399b5E30612D21116',
    symbol: 'STONE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x93f4d0ab6a8b4271f4a28db399b5e30612d21116/42726d1cb174e9460a5a875194e5a317.png',
  },
  {
    chainId: 59144,
    address: '0xAAAac83751090C6ea42379626435f805DDF54DC8',
    symbol: 'NILE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0xaaaac83751090c6ea42379626435f805ddf54dc8/e863c52a75cde95f66fcbf30edd23de7.png',
  },
  {
    chainId: 59144,
    address: '0x3d4b2132eD4eA0aa93903713a4dE9F98e625a5c7',
    symbol: 'A3A',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x3d4b2132ed4ea0aa93903713a4de9f98e625a5c7/9bac3966369664cc214014b5703234e3.png',
  },
  {
    chainId: 59144,
    address: '0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34',
    symbol: 'USDe',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x4c9edd5852cd905f086c759e8383e09bff1e68b3/734064e545eabfc501b9d0e752644b7d.png',
  },
  {
    chainId: 59144,
    address: '0x0018D96C579121a94307249d47F053E2D687b5e7',
    symbol: 'MVX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x0018d96c579121a94307249d47f053e2d687b5e7/911bc607f15eda046d4946afc3c077f2.png',
  },
  {
    chainId: 59144,
    address: '0x3F817b28Da4940F018C6b5c0A11C555ebB1264f9',
    symbol: 'EURO3',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x3f817b28da4940f018c6b5c0a11c555ebb1264f9/6dae02d86b9846aa29568b008915b776.png',
  },
  {
    chainId: 59144,
    address: '0x636B22bC471c955A8DB60f28D4795066a8201fa3',
    symbol: 'UNI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984/fcee0c46fc9864f48ce6a40ed1cdd135.png',
  },
  {
    chainId: 59144,
    address: '0x63349BA5E1F71252eCD56E8F950D1A518B400b60',
    symbol: 'oLYNX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x63349ba5e1f71252ecd56e8f950d1a518b400b60/d15f881f86031db80dae555d99e7ca24.png',
  },
  {
    chainId: 59144,
    address: '0xD96536B77aE5500fE850Add2253bcf640e7824c1',
    symbol: 'Sidus',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0xd96536b77ae5500fe850add2253bcf640e7824c1/ec41cac7985cce7bc6a4ffba853192f9.png',
  },
  {
    chainId: 59144,
    address: '0x1a51b19CE03dbE0Cb44C1528E34a7EDD7771E9Af',
    symbol: 'LYNX',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x1a51b19ce03dbe0cb44c1528e34a7edd7771e9af/a7c591c4cd2be908e52f6c70d168824f.png',
  },
  {
    chainId: 59144,
    address: '0x894134a25a5faC1c2C26F1d8fBf05111a3CB9487',
    symbol: 'GRAI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/base_token/logo_url/0xca68ad4ee5c96871ec6c6dac2f714a8437a3fe66/91700a6cc713e4086eb36696ecc0f9b4.png',
  },
  {
    chainId: 59144,
    address: '0xaCb54d07cA167934F57F829BeE2cC665e1A5ebEF',
    symbol: 'CROAK',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0xacb54d07ca167934f57f829bee2cc665e1a5ebef/2f092390b76d5ef5502d46fd8aa74678.png',
  },
  {
    chainId: 59144,
    address: '0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5',
    symbol: 'DAI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x6b175474e89094c44da98b954eedeac495271d0f/549c4205dbb199f1b8b03af783f35e71.png',
  },
  {
    chainId: 59144,
    address: '0x265B25e22bcd7f10a5bD6E6410F10537Cc7567e8',
    symbol: 'MATIC',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x265b25e22bcd7f10a5bd6e6410f10537cc7567e8/f6e604ba0324726a3d687c618aa4f163.png',
  },
  {
    chainId: 59144,
    address: '0xBA2f9e7ae9F5f03FCe7D560f986743659e768bbF',
    symbol: 'eUSD',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0xba2f9e7ae9f5f03fce7d560f986743659e768bbf/2afe300e5625c1c5b557c99ec9c4a3b0.png',
  },
  {
    chainId: 59144,
    address: '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 59144,
    address: '0x9Dd6EA6f9D1fba5ed640651f06802e32FF455221',
    symbol: 'LIN',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x9dd6ea6f9d1fba5ed640651f06802e32ff455221/755c389e54737aba131c419c8b28c4ab.png',
  },
  {
    chainId: 59144,
    address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
    symbol: 'ezETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mode_token/logo_url/0x2416092f143378750bb29b79ed961ab195cceea5/a66d77b85dfd99539744bc62966e1fac.png',
  },
  {
    chainId: 59144,
    address: '0x9201f3b9DfAB7C13Cd659ac5695D12D605B5F1e6',
    symbol: 'ECP',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x9201f3b9dfab7c13cd659ac5695d12d605b5f1e6/b39cc18b598533aea73345be97ed2cf9.png',
  },
  {
    chainId: 59144,
    address: '0x0D1E753a25eBda689453309112904807625bEFBe',
    symbol: 'Cake',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x0d1e753a25ebda689453309112904807625befbe/9003539eb61139bd494b7412b785d482.png',
  },
  {
    chainId: 59144,
    address: '0xD2671165570f41BBB3B0097893300b6EB6101E6C',
    symbol: 'wrsETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0xd2671165570f41bbb3b0097893300b6eb6101e6c/ab9ce931d7d129631f826a794a5da314.png',
  },
  {
    chainId: 59144,
    address: '0x4Ea77a86d6E70FfE8Bb947FC86D68a7F086f198a',
    symbol: 'CLIP',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/project/logo_url/bsc_clip/2ca8ad46cc17731e3171a215f15fa328.png',
  },
  {
    chainId: 59144,
    address: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
    symbol: 'WETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mtr_token/logo_url/0x79a61d3a28f8c8537a3df63092927cfa1150fb3c/61844453e63cf81301f845d7864236f6.png',
  },
  {
    chainId: 59144,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0xeb466342c4d449bc9f53a865d5cb90586f405215/7c4709a6d625beefa3190168f350c50e.png',
  },
  {
    chainId: 59144,
    address: '0x7d43AABC515C356145049227CeE54B608342c0ad',
    symbol: 'BUSD',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/coin/logo_url/busd/a57860ceb2c054b0222dda257addf86a.png',
  },
  {
    chainId: 59144,
    address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
    symbol: 'frxETH',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/28284/standard/frxETH_icon.png',
  },
  {
    chainId: 59144,
    address: '0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4',
    symbol: 'WBTC',
    decimals: 8,
    logoURI:
      'https://static.debank.com/image/doge_token/logo_url/0xfa9343c3897324496a05fc75abed6bac29f8a40f/fad0af39d842e1633a2dc0e879b5ea10.png',
  },
  {
    chainId: 59144,
    address: '0xA219439258ca9da29E9Cc4cE5596924745e12B93',
    symbol: 'USDT',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    chainId: 59144,
    address: '0x1Bf74C010E6320bab11e2e5A532b5AC15e0b8aA6',
    symbol: 'weETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee/bbe132e0827e0b26a725a6c81de284b5.png',
  },
  {
    chainId: 59144,
    address: '0x15EEfE5B297136b8712291B632404B66A8eF4D25',
    symbol: 'uniETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x15eefe5b297136b8712291b632404b66a8ef4d25/7702727760aaae4aef321a6ff034c345.png',
  },
  {
    chainId: 59144,
    address: '0x5FBDF89403270a1846F5ae7D113A989F850d1566',
    symbol: 'FOXY',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x5fbdf89403270a1846f5ae7d113a989f850d1566/492305533f6345ff977862c3a6304c45.png',
  },
  {
    chainId: 59144,
    address: '0x78354f8DcCB269a615A7e0a24f9B0718FDC3C7A7',
    symbol: 'ZERO',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x78354f8dccb269a615a7e0a24f9b0718fdc3c7a7/921b424376622278476e2b5f8903bc75.png',
  },
  {
    chainId: 59144,
    address: '0x5A7a183B6B44Dc4EC2E3d2eF43F98C5152b1d76d',
    symbol: 'inETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/linea_token/logo_url/0x5a7a183b6b44dc4ec2e3d2ef43f98c5152b1d76d/f473ffeaf1aee62d99bd8d83944cbc49.png',
  },
  {
    chainId: 81457,
    address: '0x4fEE793d435c6D2c10C135983BB9d6D4fC7B9BBd',
    symbol: 'USD+',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/blast_token/logo_url/0x4fee793d435c6d2c10c135983bb9d6d4fc7b9bbd/4ab091d83d5510fdfb020193fd6d6d5e.png',
  },
  {
    chainId: 81457,
    address: '0x73c369F61c90f03eb0Dd172e95c90208A28dC5bc',
    symbol: 'OLE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/blast_token/logo_url/0x73c369f61c90f03eb0dd172e95c90208a28dc5bc/ca3a6e9dfe2be6d298011dedd407bfb9.png',
  },
  {
    chainId: 81457,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/zkfair_token/logo_url/zkfair/35ab0987153a8355a454223aae371ac7.png',
  },
  {
    chainId: 81457,
    address: '0xd43D8aDAC6A4C7d9Aeece7c3151FcA8f23752cf8',
    symbol: 'ANDY',
    decimals: 9,
    logoURI:
      'https://static.debank.com/image/blast_token/logo_url/0xd43d8adac6a4c7d9aeece7c3151fca8f23752cf8/93a54a2488ff8e5d1c01685dc33db161.png',
  },
  {
    chainId: 81457,
    address: '0x4300000000000000000000000000000000000003',
    symbol: 'USDB',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/blast_token/logo_url/0x4300000000000000000000000000000000000003/43c9fafca023ddd62f7900f357b26714.png',
  },
  {
    chainId: 81457,
    address: '0xcBf7B47E9da345812e3Bd732E3EE369a7203B5ae',
    symbol: 'PSTAKE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/blast_token/logo_url/0xcbf7b47e9da345812e3bd732e3ee369a7203b5ae/5163ad5ac41051712717c90c05c4720a.png',
  },
  {
    chainId: 81457,
    address: '0xe7903B1F75C534Dd8159b313d92cDCfbC62cB3Cd',
    symbol: 'wrsETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/blast_token/logo_url/0xe7903b1f75c534dd8159b313d92cdcfbc62cb3cd/570bd8c5a7c151124d71d35ccbfaaefb.png',
  },
  {
    chainId: 81457,
    address: '0xf77dd21c5ce38ac08786BE35Ef1d1DeC1a6a15F3',
    symbol: 'YOLO',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/blast_token/logo_url/0xf77dd21c5ce38ac08786be35ef1d1dec1a6a15f3/a11d206fd617e0c1445332df82cb8cd4.png',
  },
  {
    chainId: 81457,
    address: '0x4300000000000000000000000000000000000004',
    symbol: 'WETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mtr_token/logo_url/0x79a61d3a28f8c8537a3df63092927cfa1150fb3c/61844453e63cf81301f845d7864236f6.png',
  },
  {
    chainId: 81457,
    address: '0xb9dfCd4CF589bB8090569cb52FaC1b88Dbe4981F',
    symbol: 'BAG',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/blast_token/logo_url/0xb9dfcd4cf589bb8090569cb52fac1b88dbe4981f/961e7a71c9a33b2c57b469158ff23915.png',
  },
  {
    chainId: 81457,
    address: '0xb1a5700fA2358173Fe465e6eA4Ff52E36e88E2ad',
    symbol: 'BLAST',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/blast_token/logo_url/0xb1a5700fa2358173fe465e6ea4ff52e36e88e2ad/c0e1eb5f4051bd62ca904cf2e3282f47.png',
  },
  {
    chainId: 81457,
    address: '0x5ffd9EbD27f2fcAB044c0f0a26A45Cb62fa29c06',
    symbol: 'PAC',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/blast_token/logo_url/0x5ffd9ebd27f2fcab044c0f0a26a45cb62fa29c06/bc83055ece4155247d5d3c6fc8a0a051.png',
  },
  {
    chainId: 81457,
    address: '0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A',
    symbol: 'weETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee/6c02f6b3bcd264d433c3676100ad8da6.png',
  },
  {
    chainId: 81457,
    address: '0xF7bc58b8D8f97ADC129cfC4c9f45Ce3C0E1D2692',
    symbol: 'WBTC',
    decimals: 8,
    logoURI:
      'https://static.debank.com/image/blast_token/logo_url/0xf7bc58b8d8f97adc129cfc4c9f45ce3c0e1d2692/e58455cbeb72be75c798588eb6f2cda3.png',
  },
  {
    chainId: 81457,
    address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
    symbol: 'ezETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mode_token/logo_url/0x2416092f143378750bb29b79ed961ab195cceea5/a66d77b85dfd99539744bc62966e1fac.png',
  },
  {
    chainId: 534352,
    address: '0xa25b25548B4C98B0c7d3d27dcA5D5ca743d68b7F',
    symbol: 'wrsETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mode_token/logo_url/0xe7903b1f75c534dd8159b313d92cdcfbc62cb3cd/570bd8c5a7c151124d71d35ccbfaaefb.png',
  },
  {
    chainId: 534352,
    address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
    symbol: 'frxETH',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/28284/standard/frxETH_icon.png',
  },
  {
    chainId: 534352,
    address: '0x80137510979822322193FC997d400D5A6C747bf7',
    symbol: 'STONE',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/manta_token/logo_url/0x80137510979822322193fc997d400d5a6c747bf7/459d9fa5e0183355044954fe46dff73a.png',
  },
  {
    chainId: 534352,
    address: '0x95a52EC1d60e74CD3Eb002fE54A2c74b185A4C16',
    symbol: 'SKY',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/project/logo_url/scrl_skydrome/1e327a3489bd7457afa7078eb6d80800.png',
  },
  {
    chainId: 534352,
    address: '0x53878B874283351D26d206FA512aEcE1Bef6C0dD',
    symbol: 'rETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xae78736cd615f374d3085123a210448e74fc6393/0a56aa87c04449332f88702b2bd5f45c.png',
  },
  {
    chainId: 534352,
    address: '0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32',
    symbol: 'wstETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/canto_token/logo_url/0xc71aaf8e486e3f33841bb56ca3fd2ac3fa8d29a8/ba9510019b6fe342763515973115cc3c.png',
  },
  {
    chainId: 534352,
    address: '0xcA77eB3fEFe3725Dc33bccB54eDEFc3D9f764f97',
    symbol: 'DAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  {
    chainId: 534352,
    address: '0x3C1BCa5a656e69edCD0D4E36BEbb3FcDAcA60Cf1',
    symbol: 'WBTC',
    decimals: 8,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  },
  {
    chainId: 534352,
    address: '0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df',
    symbol: 'USDT',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
  },
  {
    chainId: 534352,
    address: '0x1467b62A6AE5CdcB10A6a8173cfe187DD2C5a136',
    symbol: 'SIS',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/scrl_token/logo_url/0x1467b62a6ae5cdcb10a6a8173cfe187dd2c5a136/f2a59df196e9e3933fd33f76abbfeb19.png',
  },
  {
    chainId: 534352,
    address: '0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4',
    symbol: 'USDC',
    decimals: 6,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  },
  {
    chainId: 534352,
    address: '0xc4d46E8402F476F269c379677C99F18E22Ea030e',
    symbol: 'pufETH(from Ethereum)',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xd9a442856c234a39a81a089c06451ebaa4306a72/d57c0830dcc41d8830c6be5b079b2e6d.png',
  },
  {
    chainId: 534352,
    address: '0x01f0a31698C4d065659b9bdC21B3610292a1c506',
    symbol: 'weETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee/6c02f6b3bcd264d433c3676100ad8da6.png',
  },
  {
    chainId: 534352,
    address: '0x5300000000000000000000000000000000000004',
    symbol: 'WETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/era_token/logo_url/0x5aea5775959fbc2557cc8789bc1bf90a239d9a91/61844453e63cf81301f845d7864236f6.png',
  },
  {
    chainId: 534352,
    address: '0x434cdA25E8a2CA5D9c1C449a8Cb6bCbF719233E8',
    symbol: 'UNI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/hmy_token/logo_url/0x90d81749da8867962c760414c1c25ec926e889b6/7ae820078682b6eb89b6279ef81dd2e9.png',
  },
  {
    chainId: 534352,
    address: '0x608ef9A3BffE206B86c3108218003b3cfBf99c84',
    symbol: 'KNC',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0xb448ec505c924944ca8b2c55ef05c299ee0781df/babb08402e4eb7819d92673b3e694d68.png',
  },
  {
    chainId: 534352,
    address: '0xAAAE8378809bb8815c08D3C59Eb0c7D1529aD769',
    symbol: 'NURI',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/scrl_token/logo_url/0xaaae8378809bb8815c08d3c59eb0c7d1529ad769/8701f4aa174e40878cef6a2de6e10ea8.png',
  },
  {
    chainId: 534352,
    address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
    symbol: 'axlUSDC',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/arb_token/logo_url/0xeb466342c4d449bc9f53a865d5cb90586f405215/7c4709a6d625beefa3190168f350c50e.png',
  },
  {
    chainId: 534352,
    address: '0x41b94c5867f7F6217C9a30520Cb3e793B1ee1b97',
    symbol: 'axlTIA',
    decimals: 6,
    logoURI:
      'https://static.debank.com/image/bsc_token/logo_url/0x420eeed09cbc6e8416decd28857ff3c7d991fc46/82e5d9441cacdfa6c773db0b3929c45c.png',
  },
  {
    chainId: 534352,
    address: '0x2b1D36f5B61AdDAf7DA7ebbd11B35FD8cfb0DE31',
    symbol: 'ITP',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0x2b1d36f5b61addaf7da7ebbd11b35fd8cfb0de31/63a7b04f3ae71cecb9385976aa05dde3.png',
  },
  {
    chainId: 534352,
    address: '0x690F1D2DA47D9A759A93Dd2B0ACe3c1627f216BA',
    symbol: 'VEN',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/scrl_token/logo_url/0x690f1d2da47d9a759a93dd2b0ace3c1627f216ba/4cf60722c06310eae660aa922eee439e.png',
  },
  {
    chainId: 1,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'ETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 10,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'ETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 30,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'RBTC',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/rsk_token/logo_url/0x542fda317318ebf1d3deaf76e0b632741a7e677d/4785a26ef5bb5df987e67ad49fc62137.png',
  },
  {
    chainId: 56,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'BNB',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
  },
  {
    chainId: 100,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'xDAI',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  },
  {
    chainId: 122,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'FUSE',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5634.png',
  },
  {
    chainId: 137,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'MATIC',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/matic/6f5a6b6f0732a7a235131bd7804d357c.png',
  },
  {
    chainId: 250,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'FTM',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/ftm_token/logo_url/ftm/33fdb9c5067e94f3a1b9e78f6fa86984.png',
  },
  {
    chainId: 252,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'frxETH',
    decimals: 18,
    logoURI:
      'https://assets.coingecko.com/coins/images/28284/standard/frxETH_icon.png',
  },
  {
    chainId: 288,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'ETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 324,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'ETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 1088,
    address: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
    symbol: 'METIS',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9640.png',
  },
  {
    chainId: 1101,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'ETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 1284,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'GLMR',
    decimals: 18,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6836.png',
  },
  {
    chainId: 1285,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'MOVR',
    decimals: 18,
    logoURI: 'https://assets.coingecko.com/coins/images/17984/small/9285.png',
  },
  {
    chainId: 1329,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'SEI',
    decimals: 18,
    logoURI: 'https://cdn.sei.io/sei-app/sei-icon.png',
  },
  {
    chainId: 1625,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'G',
    decimals: 18,
    logoURI: 'https://assets.gravity.xyz/token_logo.png',
  },
  {
    chainId: 5000,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'MNT',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8/a443c78c33704d48f06e5686bb87f85e.png',
  },
  {
    chainId: 8453,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'ETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 34443,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'ETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 42161,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'ETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 59144,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'ETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 81457,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'ETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 534352,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'ETH',
    decimals: 18,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  },
  {
    chainId: 1313161554,
    address: '0x0000000000000000000000000000000000000000',
    symbol: 'AETH',
    decimals: 18,
    logoURI:
      'https://static.debank.com/image/aurora_token/logo_url/aurora/d61441782d4a08a7479d54aea211679e.png',
  },
  {
    chainId: 1151111081099710,
    address: '11111111111111111111111111111111',
    symbol: 'SOL',
    decimals: 9,
    logoURI: 'https://assets.coingecko.com/coins/images/4128/small/solana.png',
  },
];

export default coins;
