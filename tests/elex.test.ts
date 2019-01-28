import {electSome} from '../src/elex';

describe('elex', () => {
  it('elect some fast url', async (done) => {
    const urls = [
      'https://google.com',
      'https://facebook.com',
      'https://vgm.tv',
      'https://cloudflare.com',
    ];
    const availableUrls = await electSome(urls);
    expect(availableUrls.length).toBeGreaterThan(1);
    done();
  });
});
