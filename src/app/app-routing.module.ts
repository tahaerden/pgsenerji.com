import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'solution-partners',
        loadChildren: () =>
          import('./pages/solution-partners/solution-partners.module').then(
            (m) => m.SolutionPartnersModule
          )
      },
      {
        path: 'about-us',
        loadChildren: () => import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule)
      },
      {
        path: 'references',
        loadChildren: () =>
          import('./pages/references/references.module').then((m) => m.ReferencesModule)
      },
      {
        path: 'services',
        loadChildren: () => import('./pages/services/services.module').then((m) => m.ServicesModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('./pages/projects/projects.module').then((m) => m.ProjectsModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then((m) => m.ContactModule)
      }
    ]
  },
  {
    path: '404',
    loadChildren: () =>
      import('./pages/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
