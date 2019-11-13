import { enableProdMode } from '@angular/core';
// what platform we want to target
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// loading AppModule into browser platform
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
