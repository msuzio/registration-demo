 // ng-cli leaves this import out, and I've never 
 // had issues before,but was suggested by Heroku tutorial. 
 // Including just because I'm leery of browser issues 
 // biting me, given limited ability to test
 // a wide sample.
import './polyfills.ts';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
