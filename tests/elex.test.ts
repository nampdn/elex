import {electSome} from '../src/elex';

const urls = [
  'https://google.com',
  'https://facebook.com',
  'https://vgm.tv',
  'https://cloudflare.com',
];

const urlSamePath = [
  'https://ipfs.io',
  'https://cloudflare-ipfs.com',
  'https://gateway.vgm.tv'
]

describe('elex', () => {
  it('elect some fast url', async done => {
    const availableUrls = await electSome(urls);
    expect(availableUrls.length).toBeGreaterThan(0);
    done();
  });

  it('elect at least 2 fast urls', async done => {
    const availableUrls = await electSome(urls, {count: 2});
    expect(availableUrls.length).toEqual(2);
    done();
  });

  it('elect url with checkPath', async done => {
    const checkPath = '/ipfs/Qmf9FuLMA8KY1pYxLGmFQ1rRUTWvWtsB6pt1gqeJFznAvy'
    const availableUrls = await electSome(urlSamePath, {count: 2, checkPath});
    expect(availableUrls).toHaveLength(2);
    done();
  })

  it('electSome reject when all are inaccessible or 404 not found', async () => {
    expect.assertions(1);
    await expect(
      electSome([
        'http://google.com/not-found-url',
        'https://www.facebook.com/not-found-url',
      ]),
    ).rejects.toThrowError();
  });
});
