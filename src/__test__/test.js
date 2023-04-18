import Settings from '../js/main';

test('Test method addSettings', () => {
  const settings = new Settings();
  expect(settings.userSettings.size).toBe(0);

  settings.addSettings('music', 'off');
  expect(settings.userSettings.size).toBe(1);
  expect(settings.userSettings).toEqual(new Map([['music', 'off']]));

  settings.addSettings('music', 'off');
  expect(settings.userSettings.size).toBe(1);
});

test('Test method getSettings', () => {
  const settings = new Settings();
  const testValue = new Map([
    ['theme', 'dark'],
    ['music', 'off'],
    ['difficulty', 'nightmare'],
  ]);

  settings.addSettings('music', 'off');
  settings.addSettings('difficulty', 'nightmare');
  expect(settings.getSettings()).toEqual(testValue);
});
