import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: { animation: 'home' },
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'solution-partners',
    data: { animation: 'solution-partners' },
    loadChildren: () =>
      import('./pages/solution-partners/solution-partners.module').then(
        (m) => m.SolutionPartnersModule
      )
  },
  {
    path: 'about-us',
    data: { animation: 'about-us' },
    loadChildren: () => import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule)
  },
  {
    path: 'mission-vision',
    data: { animation: 'mission-vision' },
    loadChildren: () =>
      import('./pages/mission-vision/mission-vision.module').then((m) => m.MissionVisionModule)
  },
  {
    path: 'team',
    data: { animation: 'team' },
    loadChildren: () => import('./pages/team/team.module').then((m) => m.TeamModule)
  },
  {
    path: 'responsibilities',
    data: { animation: 'responsibilities' },
    loadChildren: () =>
      import('./pages/responsibilities/responsibilities.module').then(
        (m) => m.ResponsibilitiesModule
      )
  },
  {
    path: 'references',
    data: { animation: 'references' },
    loadChildren: () =>
      import('./pages/references/references.module').then((m) => m.ReferencesModule)
  },
  {
    path: 'services',
    data: { animation: 'services' },
    loadChildren: () => import('./pages/services/services.module').then((m) => m.ServicesModule)
  },
  {
    path: 'projects',
    data: { animation: 'projects' },
    loadChildren: () => import('./pages/projects/projects.module').then((m) => m.ProjectsModule)
  },
  {
    path: 'contact',
    data: { animation: 'contact' },
    loadChildren: () => import('./pages/contact/contact.module').then((m) => m.ContactModule)
  },
  {
    path: 'service/:name',
    loadChildren: () => import('./pages/service/service.module').then((m) => m.ServiceModule)
  },
  {
    path: 'career',
    data: { animation: 'career' },
    loadChildren: () => import('./pages/career/career.module').then((m) => m.CareerModule)
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
