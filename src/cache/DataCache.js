export class DataCache {
    constructor() {
        this.data = null;
        this.lastFetchTimestamp = null;
        this.cacheExpiration = 5 * 60 * 1000; // 5 minutos en milisegundos
    }

    setData(data) {
        this.data = data;
        this.lastFetchTimestamp = Date.now();
    }

    getData() {
        if (!this.data || this.isCacheExpired()) {
            return null;
        }
        return this.data;
    }

    isCacheExpired() {
        if (!this.lastFetchTimestamp) return true;
        return Date.now() - this.lastFetchTimestamp > this.cacheExpiration;
    }

    clearCache() {
        this.data = null;
        this.lastFetchTimestamp = null;
    }
}