// import nock from 'nock';
// import axios from 'axios';
// const matchers = require('jest-extended');
// expect.extend(matchers)
// axios.defaults.adapter = require('axios/lib/adapters/http');

describe.only('Testing leaderboards fetch', () => {
  async function getRecords() {
    const response = await fetch(`http://localhost:5001/leaderboards`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const records = await response.json();
    console.log(records);
    return records;
  }
//   afterEach(nock.cleanAll);

//   const controller = new AbortController()
//   async function fetchData() {
//     try {
//       const res = await axios.get('http://localhost:5000/api', {
//         signal: controller.signal,
//         validateStatus: () => true
//       });
//       console.error(res);
//       if (res.status !== 200) {
//         throw Error();
//       }
//       return res.data
//     } catch(err: any) {
//       return { error: err }
//     }
//   }
  it('sends data on 200 status code', async () => {
    const result = await getRecords()
    expect(result).toBeTruthy();
    expect(result[0].name).toBe('Dre Sean Sutton');
  })
})
