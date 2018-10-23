# Statful Browser Plugin

Statful plugin to capture browser information and add it on your metrics.

[![Build Status](https://travis-ci.org/statful/statful-browser-plugin.svg?branch=master)](https://travis-ci.org/statful/statful-browser-plugin)
[![devDependency Status](https://david-dm.org/statful/statful-browser-plugin/dev-status.svg)](https://david-dm.org/statful/statful-browser-plugin#info=devDependencies)


## Table of Contents

* [Installation](#installation)
* [Quick Start](#quick-start)
* [Tags](#tags)
* [Contribute](#contribute)
* [Authors](#authors)
* [License](#license)

## Installation

```
npm install --save statful-browser-plugin
```

## Quick Start

```javascript
    <script type="text/javascript" src="node_modules/statful-client-javascript/dist/statful.umd.min.js"></script>
    <script type="text/javascript" src="node_modules/statful-browser-plugin/dist/statful-browser-plugin.umd.min.js"></script>

    <script>
        // Init statful
        statful.initialize({
            dryrun: false,
            debug: false,
            app: 'exampleApp',
            flushInterval: 5000
        });

        // Use Statful Browser Plugin
        statful.use(new StatfulBrowserPlugin());

        // Send a metric
        statful.counter('page_load');
    </script>
```

## Tags
These tags are only populated if available.

| Tag | Description |
|:---|:---|
| browser | browser name |
| browser_version | browser version | 
| device | device type (desktop, tablet or mobile)|
| os | os name| 
| os_version | os version| 


## Contribute

Follow the standard *Fork and Pull Request* workflow and:

* Add tests for new feats
* Make sure the test suite passes
* Update or add documentation accordingly

### Installation

```bash
$ npm install
```

### Tests

```bash
$ npm test
```

## Authors

[Mindera - Software Craft](https://github.com/Mindera)

## License

Statful Javascript Client is available under the MIT license. See the [LICENSE](https://raw.githubusercontent.com/statful/statful-browser-plugin/master/LICENSE) file for more information.
