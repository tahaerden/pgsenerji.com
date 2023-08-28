import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    { route: 'lighting-services', translationKey: 'LIGHTING_SERVICES' },
    { route: 'cctv', translationKey: 'CCTV' },
    { route: 'compensation-systems', translationKey: 'COMPENSATION_SYSTEMS' },
    {
      route: 'engineering-services-and-projects',
      translationKey: 'ENGINEERING_SERVICES_AND_PROJECTS'
    },
    { route: 'og-facilities', translationKey: 'OG_FACILITIES' },
    { route: 'automation', translationKey: 'AUTOMATION' },
    { route: 'lightning-rod-and-grounding', translationKey: 'LIGHTNING_ROD_AND_GROUNDING' },
    { route: 'landscape-lighting', translationKey: 'LANDSCAPE_LIGHTING' },
    { route: 'plc-systems', translationKey: 'PLC_SYSTEMS' },
    { route: 'transformers', translationKey: 'TRANSFORMERS' }
  ];
}
