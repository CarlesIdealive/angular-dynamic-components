import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => import('./pages/question-list/question-list.component')
  },
  {
    path: 'initial',
    loadComponent: () => import('./pages/initial-test/initial-test.component')
  },
  {
    path:'',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];
