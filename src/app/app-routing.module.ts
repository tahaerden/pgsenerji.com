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
    path: 'services/cctv',
    loadChildren: () => import('./pages/services/cctv/cctv.module').then((m) => m.CctvModule)
  },
  {
    path: 'services/compensation-systems',
    loadChildren: () =>
      import('./pages/services/compensation-systems/compensation-systems.module').then(
        (m) => m.CompensationSystemsModule
      )
  },
  {
    path: 'services/engineering-services-and-project',
    loadChildren: () =>
      import(
        './pages/services/engineering-services-and-projects/engineering-services-and-projects.module'
      ).then((m) => m.EngineeringServicesAndProjectsModule)
  },
  {
    path: 'services/og-facilities',
    loadChildren: () =>
      import('./pages/services/og-facilities/og-facilities.module').then(
        (m) => m.OgFacilitiesModule
      )
  },
  {
    path: 'services/automation',
    loadChildren: () =>
      import('./pages/services/automation/automation.module').then((m) => m.AutomationModule)
  },
  {
    path: 'services/lightning-rod-and-grounding',
    loadChildren: () =>
      import(
        './pages/services/lightning-rod-and-grounding/lightning-rod-and-grounding.module'
      ).then((m) => m.LightningRodAndGroundingModule)
  },
  {
    path: 'services/landscape-lighting',
    loadChildren: () =>
      import('./pages/services/landscape-lighting/landscape-lighting.module').then(
        (m) => m.LandscapeLightingModule
      )
  },
  {
    path: 'services/plc-systems',
    loadChildren: () =>
      import('./pages/services/plc-systems/plc-systems.module').then((m) => m.PlcSystemsModule)
  },
  {
    path: 'services/transformers',
    loadChildren: () =>
      import('./pages/services/transformers/transformers.module').then((m) => m.TransformersModule)
  },
  {
    path: 'services/lighting-services',
    loadChildren: () =>
      import('./pages/services/lighting-services/lighting-services.module').then(
        (m) => m.LightingServicesModule
      )
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
