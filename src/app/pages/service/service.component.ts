import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  service!: string;
  translationKey!: string;
  constructor(private router: Router) {
    this.service = this.router.url.replace('/service/', '');
    switch (this.service) {
      case 'lighting-services':
        this.translationKey = 'LIGHTING_SERVICES';
        break;
      case 'cctv':
        this.translationKey = 'CCTV';
        break;
      case 'compensation-systems':
        this.translationKey = 'COMPENSATION_SYSTEMS';
        break;
      case 'engineering-services-and-projects':
        this.translationKey = 'ENGINEERING_SERVICES_AND_PROJECTS';
        break;
      case 'og-facilities':
        this.translationKey = 'OG_FACILITIES';
        break;
      case 'automation':
        this.translationKey = 'AUTOMATION';
        break;
      case 'lightning-rod-and-grounding':
        this.translationKey = 'LIGHTNING_ROD_AND_GROUNDING';
        break;
      case 'landscape-lighting':
        this.translationKey = 'LANDSCAPE_LIGHTING';
        break;
      case 'plc-systems':
        this.translationKey = 'PLC_SYSTEMS';
        break;
      case 'transformers':
        this.translationKey = 'TRANSFORMERS';
        break;

      default:
        break;
    }
  }
}
