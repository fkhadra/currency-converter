import { db } from './db';

const currency = {
  url: 'http://ec.europa.eu/budg/inforeuro/api/public/monthly-rates',
  find(code) {
    return db.currencies.get({ isoA3Code: code });
  },
  list() {
    return new Promise(async (resolve, reject) => {
      const count = await db.currencies.count();
      if (count === 0) {
        try {
          const data = await (await fetch(this.url)).json();
          await db.currencies.bulkAdd(data);
          return resolve(db.currencies.toArray());
        } catch (error) {
          return reject(error);
        }
      }
      return resolve(db.currencies.toArray());
    });
  }
};

export default currency;
