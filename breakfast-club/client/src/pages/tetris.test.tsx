import nock from 'nock';
import axios from 'axios';
const matchers = require('jest-extended');
expect.extend(matchers)
axios.defaults.adapter = require('axios/lib/adapters/http');

describe.only('Testing leaderboards fetch', () => {
  afterEach(nock.cleanAll);

  const controller = new AbortController()
  async function fetchData() {
    try {
      const { status, data } = await axios.get('https://localhost:5000/tetris/leaderboard/list', {
        signal: controller.signal,
        validateStatus: () => true
      });
      console.error(status);
      if (status !== 200) {
        throw Error();
      }
      return data
    } catch(err: any) {
      return { error: err }
    }
  }
  it('sends data on 200 status code', async () => {
    const result = await fetchData()
    expect(result).toBeTruthy();
    expect(result.displayName).toBe('Dre');
  })
})
