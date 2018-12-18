import bowser from 'bowser';

export default class StatfulBrowserPlugin {
    onInit() {
        const browser = bowser.getParser(window.navigator.userAgent);
        this.name = PACKAGE_NAME;
        this.version = PACKAGE_VERSION;
        this.tags = {};

        if (browser) {
            const result = browser.getResult();

            if (result) {
                if (result.browser) {
                    this.tags.browser = result.browser.name;
                    this.tags.browser_version = result.browser.version;
                }

                if (result.platform) {
                    this.tags.device_type = result.platform.type;
                }

                if (result.os) {
                    this.tags.os = result.os.name;
                    this.tags.os_version = result.os.version;
                }
            }
        }

        Object.keys(this.tags).forEach(key => {
            this.tags[key] = this.escape(this.tags[key]);
        });
    }

    escape(str) {
        return str.replace(/\s+/g, '-');
    }
}
