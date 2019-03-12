// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// You can get these values below from https://console.firebase.google.com/project/<your project>/overview

export const environment = {
  production: false,
  firebase: {
    apiKey: "long-api-key",
    authDomain: "angular-firebase-what.firebaseapp.com",
    databaseURL: "https://angular-firebase-what.firebaseio.com",
    projectId: "angular-firebase-what",
    storageBucket: "angular-firebase-what.appspot.com",
    messagingSenderId: "12345"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
