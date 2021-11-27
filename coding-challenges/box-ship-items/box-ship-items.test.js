const shipItem = require('./box-ship-items')

describe('Ship Items', () => {
  test('should pack macbook into large box', () => {
    const actual =  shipItem(["Macbook", "Macbook"])
    const expected =  [{"boxSize": "L", "item": ["Macbook"]}, {"boxSize": "L", "item": ["Macbook"]}];
    
    expect(actual).toEqual(expected);
  })
  test('should pack bluetooth speaker into large box', () => {
    const actual =  shipItem(["Bluetooth Speaker", "Bluetooth Speaker"])
    const expected =  [{"boxSize": "L", "item": ["Bluetooth Speaker"]}, {"boxSize": "L", "item": ["Bluetooth Speaker"]}];
    
    expect(actual).toEqual(expected);
  })
  test('should pack two cameras into medium box', () => {
    const actual =  shipItem(["Cam", "Cam"])
    const expected =  [{"boxSize": "M", "item": ["Cam", "Cam"]}];
    
    expect(actual).toEqual(expected);
  })
  test('should pack two headphones into medium box', () => {
     const actual =  shipItem(["headphones", "headphones"])
    const expected =  [{"boxSize": "M", "item": ["headphones", "headphones"]}];
    
    expect(actual).toEqual(expected);
  })
})