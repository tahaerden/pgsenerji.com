import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnimationType } from 'src/app/shared/components/animations/animations';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { Slide } from 'src/app/shared/components/carousel/carousel.interface';
import { referencesList } from 'src/app/shared/data/references';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(CarouselComponent, { static: true }) carousel!: CarouselComponent;
  animationType = AnimationType.Fade;
  @ViewChild('horizontalScroll') horizontalScroll!: ElementRef;
  slides: Slide[] = [];
  services = [
    { route: 'lighting-services', translationKey: 'LIGHTING_SERVICES' },
    { route: 'cctv', translationKey: 'CCTV' },
    { route: 'compensation-systems', translationKey: 'COMPENSATION_SYSTEMS' },
    {
      route: 'engineering-services-and-projects',
      translationKey: 'ENGINEERING_SERVICES_AND_PROJECTS'
    },
    { route: 'og-facilities', translationKey: 'OG_FACILITIES' },
    { route: 'automation', translationKey: 'AUTOMATION' }
    // { route: 'lightning-rod-and-grounding', translationKey: 'LIGHTNING_ROD_AND_GROUNDING' },
    // { route: 'landscape-lighting', translationKey: 'LANDSCAPE_LIGHTING' },
    // { route: 'plc-systems', translationKey: 'PLC_SYSTEMS' },
    // { route: 'transformers', translationKey: 'TRANSFORMERS' }
  ];
  references = referencesList;

  constructor(translate: TranslateService) {
    this.slides = [
      {
        headline: translate.instant('SLIDES.PGS'),
        src: 'assets/video/pgs.mp4'
      },
      {
        headline: translate.instant('SLIDES.PROJECT'),
        src: 'assets/video/project.mp4'
      },
      {
        headline: translate.instant('SLIDES.TEAM'),
        src: 'assets/video/team.mp4'
      }
    ];
  }

  ngOnInit() {
    this.startHorizontalScroll();
  }
  startHorizontalScroll() {
    const scroll = setInterval(() => {
      let newScrollLeft = this.horizontalScroll.nativeElement.scrollLeft;
      let width = this.horizontalScroll.nativeElement.clientWidth;
      let scrollWidth = this.horizontalScroll.nativeElement.scrollWidth;
      this.horizontalScroll.nativeElement.scrollLeft += 5;
      if (scrollWidth - (newScrollLeft + width) == 0) {
        clearInterval(scroll);
        this.horizontalScroll.nativeElement.scrollLeft = 0;
        setTimeout(() => {
          this.startHorizontalScroll();
        }, 1000);
      }
    }, 50);
  }
}
