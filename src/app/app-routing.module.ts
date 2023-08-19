import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  {
    path: '404',
    loadChildren: () =>
      import('./pages/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'anasayfa',
        pathMatch: 'full'
      },
      {
        path: 'anasayfa',
        loadChildren: () => import('./pages/anasayfa/anasayfa.module').then((m) => m.AnasayfaModule)
      }
    ]
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
