const crypto = require('crypto');

describe('1', () => {
  it('should be ok', () => {
    for (let i = 0; i < 1000; i++) {
      crypto.randomBytes(1024 * 1024);
    }
  });
});
