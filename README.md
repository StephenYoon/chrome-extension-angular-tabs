# ChromeExtensionAngularTabs

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## General development steps
* create a new angular app with routing (ng new chrome-extension-angular-tabs)
* install the required packages by running command "npm install"
* create manifest.json in the angular src folder
* npm install --save firebase @angular/fire
* npm install --save @types/chrome
* npm install --save bootstrap
* npm install --save font-awesome

## Running locally with Chrome
* "ng build" your Angular application
* Enable extensions in Chrome
* Add your extension by referencing your "dist" output folder from your "ng build"

## Special note
The default tsconfig.json and tsconfig.app.json files may not be structured in a manner that is compatible with browserify if you plan on using gulp to run task content-script for it's js file. After a bit of research, the format I have in this repo seems to work.

## More information about Chrome Extensions
A Chrome Extension essentially needs an index.html and a manifest.json file as the minimum to run locally.
However, to create a fully feature extension we can use Angular as it is an easy framework to work with and enables us to use a variety of libraries quickly.
A few tweaks to the angular.json file to ensure your "outputPath", "index" and your "styles" and when you ng build your Angular application, it will be ready to be used as a Chrome Extension.

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
