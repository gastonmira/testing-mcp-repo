// Example test file to ensure testing setup works

describe('Example Test Suite', () => {
  it('should pass basic test', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle async operations', async () => {
    const asyncFunction = async () => {
      return Promise.resolve('success');
    };

    const result = await asyncFunction();
    expect(result).toBe('success');
  });

  it('should test object equality', () => {
    const obj1 = { name: 'Test', value: 42 };
    const obj2 = { name: 'Test', value: 42 };
    
    expect(obj1).toEqual(obj2);
  });

  it('should test array operations', () => {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map(n => n * 2);
    
    expect(doubled).toEqual([2, 4, 6, 8, 10]);
    expect(doubled).toHaveLength(5);
  });
});

// Example utility function test
export const sum = (a: number, b: number): number => a + b;

describe('Utility Functions', () => {
  it('should add two numbers correctly', () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });
});