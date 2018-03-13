// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBNkXpDTUewY00vjQLMG9xZbZunFaUNSEY',
    authDomain: 'bytebay-test.firebaseapp.com',
    databaseURL: 'https://bytebay-test.firebaseio.com',
    projectId: 'bytebay-test',
    storageBucket: '',
    messagingSenderId: '660795245306'
  }
};
