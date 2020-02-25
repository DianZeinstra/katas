import { should } from 'chai';

import { Args } from './args';

should();

describe('Args should', () => {
  const schema = 'd,p#,h*';

  it('create with schema', () => {
    const args = new Args(schema);
    args.should.exist;
  });
});
