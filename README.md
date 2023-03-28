# TAE Project

<p align="center"> 
<a href="https://github.com/romellfudi/webdriveio/actions"><img src="https://github.com/romellfudi/webdriveio/workflows/CI/badge.svg" alt="Continuous Integration"></a>
</p>

### by Romell Freddy Dominguez

[![](https://raw.githubusercontent.com/romellfudi/assets/master/favicon.ico)](https://portfolio.romellfudi.com/)

## Project Structure

```
.
├── .github
│   └── workflows
│       └── ci.yml              // Github Actions configuration for CI
├── .gitignore
├── README.md                   // This file :)
├── babel.config.js
├── package-lock.json
├── package.json
├── test
│   ├── data
│   │   ├── data.json           // Ranndom Data for the test
│   │   └── dataWords.js        // Read data words from json file
│   ├── pageobjects
│   │   ├── clientdelayPage.js  // Page Object for Client Delay
│   │   └── wikipediaPage.js    // Page Object for Wikipedia
│   └── specs
│       ├── clientdelay.js      // Test for Client Delay
│       └── wikipedia.js        // Test for Wikipedia
└── wdio.conf.js
```


## License
[![GNU GPLv3 Image](https://www.gnu.org/graphics/gplv3-127x51.png)](http://www.gnu.org/licenses/gpl-3.0.en.html)

IMDB KATA is a Free Software: You can use, study share and improve it at your
will. Specifically you can redistribute and/or modify it under the terms of the
[GNU General Public License](https://www.gnu.org/licenses/gpl.html) as
published by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.  