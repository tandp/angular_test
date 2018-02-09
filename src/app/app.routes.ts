import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

function getWindow(): any {
  return window;
}

let base = getWindow().baseUrl;
if (base == undefined) base = '';
else base = base.replace(/^\//, '')

export const ROUTES: Routes = [
  { path: base + '',      component: HomeComponent },
  { path: base + '/results/:result', component: HomeComponent },
  { path: '**',    component: HomeComponent },
];
