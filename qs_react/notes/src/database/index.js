import Loki from 'lokijs'
export const db = new Loki('notes', {
  autoload: true,
  autosave: true,
  autosaveInterval: 3000,
  persistenceMethod: 'localStorage',
  autoloadCallback: databaseInitialize
})
function databaseInitialize() {
  // Collection 在mongoDB里面属于表的意思
  const notes = db.getCollection('notes');
  if (notes === null) {
    db.addCollection('notes');
  }
}
export function loadCollection(collection) {
  return new Promise(resolve => {
    const _collection = db.getCollection(collection) || db.addCollection(collection);
    resolve(_collection);
  })
}