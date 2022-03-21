
const {positiveSum} = require('../sum.js');
const {opposite} = require('../opp.js')
const {removeChar} = require('../first.js');
const {repeatStr} = require('../string.js');


test('positiveSum',() => {
  expect(positiveSum([1,2,3,4,5])).toEqual(15);
  expect(positiveSum([-1,4,6,2,8])).toEqual(20);
  expect(positiveSum([-1,-4,-6,-2,-8])).toEqual(0);
  expect(positiveSum([])).toEqual(0);
});

test('opposite',() => {
    expect(opposite(1)).toEqual(-1);
    expect(opposite(-10)).toEqual(10);
  });

test('removeChar',() => {
    expect(removeChar('Ананас')).toEqual('нана');
    expect(removeChar('JavaScript')).toEqual('avaScrip');
  });

test('repeatStr',() => {
    expect(repeatStr(5,'r')).toEqual('rrrrr');
    expect(repeatStr(2,'X')).toEqual('XX');
    expect(repeatStr(1,'PLPLPL')).toEqual('PLPLPL');
  });


