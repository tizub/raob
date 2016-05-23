import {provide} from '@angular/core';
import {XHRBackend} from '@angular/http';

import {InMemoryBackendService, SEED_DATA} from 'angular2-in-memory-web-api/in-memory-backend.service';
import {MockAoServiceData} from './api/ao';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {RAObayAppComponent} from './app.component';

bootstrap(RAObayAppComponent, [
    HTTP_PROVIDERS,
    provide(XHRBackend, {useClass: InMemoryBackendService}),
    provide(SEED_DATA, {useClass: MockAoServiceData})
]);