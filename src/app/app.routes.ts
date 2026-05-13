import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: 'services',
    loadComponent: () =>
      import('./services/services.page').then((m) => m.ServicesPage),
  },

  {
    path: 'events',
    loadComponent: () =>
      import('./events/events.page').then((m) => m.EventsPage),
  },
];