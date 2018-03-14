import Dexie from 'dexie';

// const db = new Dexie('currency_converter');
 const db = new Dexie('vat_checker');

db.version(1).stores({
  currencies: 'isoA3Code, isoA2Code'
});

export { db };
