# ChromeExtensionAngularTabs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## General development steps
* create a new angular app with routing (ng new chrome-extension-angular-tabs)
* install the required packages by running command "npm install"
* create manifest.json in the angular src folder
* npm install @types/Chrome -–save-dev

## More information about Chrome Extensions
A Chrome Extension can have three distinct front-end components:
* **Extension icon** (browser action) – this is an icon that is displayed next to the browser’s Omnibox (Google Chrome’s address bar)
* **Popup** – This is a popup HTML page that is displayed when the extension icon is clicked. It can reference JavaScript and CSS files
* **Extension pages** – these are HTML pages hosted by the extension. Each page can reference both JavaScript and CSS files

The backend has these three components:
* **Content script** – a JavaScript file that runs in the context of a page displayed in the browser tab. It has limited access to Chrome extension API (eg. it cannot influence other tabs), but it can do a lot of things in context of the page, eg. explore DOM elements, inject new objects and read the page’s local storage
* **Event page** (background script) – a page that runs in the background, that is developed either as and HTML page or as a single JavaScript file. It has full access to the Chrome extension API. It is typically used to receive the requests and send replies to other extension elements. External requests (eg. to external APIs) should be executed in this part.
* **Extension/popup page script** – a JavaScript file referenced by HTML page hosted by extension. It has full access to Chrome extension API.

Reference:
* More information at: https://developer.chrome.com/extensions/getstarted

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
