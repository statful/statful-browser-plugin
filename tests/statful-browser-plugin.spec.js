import bowser from 'bowser';
import StatfulBrowserPlugin from '../src/statful-browser-plugin';

describe('Statful Browser Plugin', () => {
    test('should not be null', () => {
        expect(StatfulBrowserPlugin).not.toBeNull();
    });

    test('should have defaults when no information is available on bowser', () => {
        const instance = new StatfulBrowserPlugin();
        jest.spyOn(bowser, 'getParser').mockImplementation(() => null);
        instance.onInit();

        expect(instance.name).toEqual('statful-browser-plugin');
        expect(instance.version).toEqual('1.0.0');
        expect(instance.tags).toEqual({});
    });

    test('should not populate tags', () => {
        const instance = new StatfulBrowserPlugin();
        jest.spyOn(bowser, 'getParser').mockImplementation(() => {
            return {
                getResult: () => {}
            };
        });
        instance.onInit();

        expect(instance.name).toEqual('statful-browser-plugin');
        expect(instance.version).toEqual('1.0.0');
        expect(instance.tags).toEqual({});
    });

    test('should populate all tags', () => {
        const instance = new StatfulBrowserPlugin();
        jest.spyOn(bowser, 'getParser').mockImplementation(() => {
            return {
                getResult: () => {
                    return {
                        browser: {
                            name: 'Chrome',
                            version: '69.1.2'
                        },
                        platform: {
                            type: 'desktop'
                        },
                        os: {
                            name: 'os',
                            version: '2.0.0'
                        }
                    };
                }
            };
        });
        instance.onInit();

        expect(instance.name).toEqual('statful-browser-plugin');
        expect(instance.version).toEqual('1.0.0');
        expect(instance.tags).toEqual({
            browser: 'Chrome',
            browser_version: '69.1.2',
            device_type: 'desktop',
            os: 'os',
            os_version: '2.0.0'
        });
    });

    test('should populate all tags escaping words', () => {
        const instance = new StatfulBrowserPlugin();
        jest.spyOn(bowser, 'getParser').mockImplementation(() => {
            return {
                getResult: () => {
                    return {
                        browser: {
                            name: 'Chrome Mobile',
                            version: '69.1.2 3'
                        },
                        platform: {
                            type: 'desktop a'
                        },
                        os: {
                            name: 'os NT',
                            version: '2.0.0 3'
                        }
                    };
                }
            };
        });
        instance.onInit();

        expect(instance.name).toEqual('statful-browser-plugin');
        expect(instance.version).toEqual('1.0.0');
        expect(instance.tags).toEqual({
            browser: 'Chrome-Mobile',
            browser_version: '69.1.2-3',
            device_type: 'desktop-a',
            os: 'os-NT',
            os_version: '2.0.0-3'
        });
    });

    test('should not populate browser tags', () => {
        const instance = new StatfulBrowserPlugin();
        jest.spyOn(bowser, 'getParser').mockImplementation(() => {
            return {
                getResult: () => {
                    return {
                        platform: {
                            type: 'desktop'
                        },
                        os: {
                            name: 'os',
                            version: '2.0.0'
                        }
                    };
                }
            };
        });
        instance.onInit();

        expect(instance.name).toEqual('statful-browser-plugin');
        expect(instance.version).toEqual('1.0.0');
        expect(instance.tags).toEqual({
            device_type: 'desktop',
            os: 'os',
            os_version: '2.0.0'
        });
    });

    test('should not populate device tag', () => {
        const instance = new StatfulBrowserPlugin();
        jest.spyOn(bowser, 'getParser').mockImplementation(() => {
            return {
                getResult: () => {
                    return {
                        browser: {
                            name: 'Chrome',
                            version: '69.1.2'
                        },
                        os: {
                            name: 'os',
                            version: '2.0.0'
                        }
                    };
                }
            };
        });
        instance.onInit();

        expect(instance.name).toEqual('statful-browser-plugin');
        expect(instance.version).toEqual('1.0.0');
        expect(instance.tags).toEqual({
            browser: 'Chrome',
            browser_version: '69.1.2',
            os: 'os',
            os_version: '2.0.0'
        });
    });

    test('should not populate os tags', () => {
        const instance = new StatfulBrowserPlugin();
        jest.spyOn(bowser, 'getParser').mockImplementation(() => {
            return {
                getResult: () => {
                    return {
                        browser: {
                            name: 'Chrome',
                            version: '69.1.2'
                        },
                        platform: {
                            type: 'desktop'
                        }
                    };
                }
            };
        });
        instance.onInit();

        expect(instance.name).toEqual('statful-browser-plugin');
        expect(instance.version).toEqual('1.0.0');
        expect(instance.tags).toEqual({
            browser: 'Chrome',
            browser_version: '69.1.2',
            device_type: 'desktop'
        });
    });
});
