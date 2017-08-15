export class Cache {
  constructor(storage) {
    this.storage = storage || localStorage;
  }

  save(key, data, cacheTime) {
    if (key && key.length) {
      const cacheData = {
        cacheTime: cacheTime || null,
        timestamp: new Date().getTime(),
        isExpired: false,
        data,
      };
      this.storage.setItem(key, JSON.stringify(cacheData));
      return true;
    }
    return new Error('Something went wrong. Invalid parameters! Data not saved to storage.');
  }

  get(key) {
    const dataFromStorage = JSON.parse(this.storage.getItem(key));
    dataFromStorage.isExpired = this.checkExpiration(dataFromStorage);
    if (dataFromStorage.isExpired) {
      return this.deleteData(key);
    }
    return dataFromStorage.data;
  }

  deleteData(key) {
    this.storage.removeItem(key);
    return null;
  }

  checkExpiration({ cacheTime, timestamp }) {
    if (cacheTime === null) {
      return false;
    }

    const currentDate = new Date().getTime();
    const delta = currentDate - timestamp;
    return delta > cacheTime;
  }
}

export default new Cache();

