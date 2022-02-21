class Storage {
  setStorage(key: string, value: any): void {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getStorage(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteStorage(key: string) {
    window.localStorage.removeItem(key)
  }

  clearStorage() {
    window.localStorage.clear()
  }
}
export default new Storage()
