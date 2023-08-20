# chrome-extension-downloads

A simple npm package for getting the installations number of a Google Chrome extension.

## Installation

```bash
npm i chrome-extension-downloads
```

or

```bash
yarn add chrome-extension-downloads
```

## Usage

```js
import chromeExtensionDownloads from "chrome-extension-downloads";

const chromeExtensionURL =
  "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn";

console.log("Downloads:", await chromeExtensionDownloads(chromeExtensionURL));
```

## License

MIT licensed.
