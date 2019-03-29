import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, UrlHandlingStrategy } from '@angular/router';

@Component({ selector: 'app-empty', template: '' })
class EmptyComponent {}

@Component({ selector: 'app-ng2-route', template: '<h3>Ng2 Route</h3>' })
class Ng2RouteComponent {}

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/ng2-route',
  },
  {
    path: 'ng2-route',
    component: Ng2RouteComponent,
  },
  // { path: '', component: EmptyComponent },
];

export class CustomHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return url.toString().startsWith('/ng2-route') || url.toString() === '/';
    // return url.toString().startsWith('/ng2-route');
  }
  extract(url) {
    return url;
  }
  merge(url, whole) {
    return url;
  }
}

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: true,
    }),
  ],
  declarations: [EmptyComponent, Ng2RouteComponent],
  exports: [RouterModule],
  providers: [
    { provide: UrlHandlingStrategy, useClass: CustomHandlingStrategy },
  ],
})
export class AppRoutingModule {}
