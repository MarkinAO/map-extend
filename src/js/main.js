export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
  }

  addSettings(key, value) {
    if (!this.userSettings.has(key)) this.userSettings.set(key, value);
  }

  getSettings() {
    [...this.defaultSettings].forEach((el) => {
      if (!this.userSettings.has(el[0])) this.userSettings.set(el[0], el[1]);
    });
    return this.userSettings;
  }
}
