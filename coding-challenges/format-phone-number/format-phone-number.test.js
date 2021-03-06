const formatPhoneNumber = require('./format-phone-number');

describe('Format Phone Number', () => {
    test('only numbers are valid', () => {
      const actual = formatPhoneNumber("Aa2129876");
      const expected = "(212) 987-6";
    
      expect(actual).toEqual(expected);
    })
    test('When 1 digit is enter, it should be preceded by `(`', () => {
      const actual = formatPhoneNumber(2);
      const expected = "(2";
    
      expect(actual).toEqual(expected);
    })
    test('When 4 digit is enter, the 4th number should be preceded by `)`', () => {
      const actual = formatPhoneNumber(2129);
      const expected = "(212) 9";
    
      expect(actual).toEqual(expected);
    })
    test('When 7 digit is enter, the 7th number should be preceded by `-`', () => {
      const actual = formatPhoneNumber(2129876);
      const expected = "(212) 987-6";
    
      expect(actual).toEqual(expected);
    })
    test('The max numbers allowed are 10', () => {
      const actual = formatPhoneNumber(21298765431);
      const expected = "(212) 987-6543";
    
      expect(actual).toEqual(expected);
    })
})


