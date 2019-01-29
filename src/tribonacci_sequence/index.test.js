const tribonacci = require('./index');

describe('tribonacci', () => {
  test('should return [1,1,1,3,5,9,17,31,57,105]', () => {
    expect(tribonacci([1,1,1],10)).toMatchObject([1,1,1,3,5,9,17,31,57,105]);
  });

  test('should return [0,0,1,1,2,4,7,13,24,44]', () => {
    expect(tribonacci([0,0,1],10)).toMatchObject([0,0,1,1,2,4,7,13,24,44]);
  });

  test('should return [0,1,1,2,4,7,13,24,44,81]', () => {
    expect(tribonacci([0,1,1],10)).toMatchObject([0,1,1,2,4,7,13,24,44,81]);
  });

  test('should return [1,0,0,1,1,2,4,7,13,24]', () => {
    expect(tribonacci([1,0,0],10)).toMatchObject([1,0,0,1,1,2,4,7,13,24]);
  });

  test('should return [0,0,0,0,0,0,0,0,0,0]', () => {
    expect(tribonacci([0,0,0],10)).toMatchObject([0,0,0,0,0,0,0,0,0,0]);
  });

  test('should return [1,2,3,6,11,20,37,68,125,230]', () => {
    expect(tribonacci([1,2,3],10)).toMatchObject([1,2,3,6,11,20,37,68,125,230]);
  });

  test('should return [3,2,1,6,9,16,31,56,103,190]', () => {
    expect(tribonacci([3,2,1],10)).toMatchObject([3,2,1,6,9,16,31,56,103,190]);
  });

  test('should return [1]', () => {
    expect(tribonacci([1,1,1],1)).toMatchObject([1]);
  });

  test('should return []', () => {
    expect(tribonacci([300,200,100],0)).toMatchObject([]);
  });

  test('should return [0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5]', () => {
    expect(tribonacci([0.5,0.5,0.5],30)).toMatchObject([0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5]);
  });
});
