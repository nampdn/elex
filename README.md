# elex 
Perform check on list of gateway to find the best reliable http gateway

[![npm version](https://badge.fury.io/js/elex.svg)](https://badge.fury.io/js/elex) [![Build Status](https://travis-ci.com/nampdn/elex.svg?branch=master)](https://travis-ci.com/nampdn/elex)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fnampdn%2Felex.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fnampdn%2Felex?ref=badge_shield)
## Installation

```bash
yarn add elex
```

## Usage

### Elect some:

```javascript
import {electSome} from 'elex'

(async () => {
  const urlsToCheck = ['https://google.com', 'https://bing.com', 'https://vgm.tv', 'https://not-found-404.com']
  const someFastUrls = await electSome(urlsToCheck, {count: 2, retries: 1}); // ['http://google.com', 'https://vgm.tv']
})()
```

### Elect one:

```javascript
import {electOne} from 'elex'

(async () => {
  const urlsToCheck = ['https://google.com', 'https://bing.com', 'https://vgm.tv', 'https://not-found-404.com']
  const mostFastUrls = await electOne(urlsToCheck, {prefer: 'https://vgm.tv', retries: 1}); // 'https://vgm.tv'
})()
```

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fnampdn%2Felex.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fnampdn%2Felex?ref=badge_large)
