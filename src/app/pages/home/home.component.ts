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
  referenceScrollInterval: any;
  partnersScrollInterval: any;
  @ViewChild('referenceScroll') referenceScroll!: ElementRef;
  @ViewChild('partnersScroll') partnersScroll!: ElementRef;
  slides: Slide[] = [];
  slides2 = [
    {
      src: 'assets/img/home/equality of opportunity.jpg',
      paragraph: 'SLIDES2.EQUALITY',
      buttonText: 'EQUALITY_OF_OPPORTUNITY',
      buttonUrl: '/career'
    },
    {
      src: 'assets/img/home/internship.jpg',
      paragraph: 'SLIDES2.INTERNSHIP',
      buttonText: 'INTERNSHIP',
      buttonUrl: '/career'
    },
    {
      src: 'assets/img/home/sustainability.jpg',
      paragraph: 'SLIDES2.SUSTAINABILITY',
      buttonText: 'SUSTAINABILITY',
      buttonUrl: '/responsibilities'
    }
  ];
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
  partnersImgName = [
    '2m-kablo.png',
    'abb.png',
    'ankalight.jpeg',
    'astor.jpeg',
    'atempo.png',
    'dlex.png',
    'eae.jpeg',
    'ecf.jpeg',
    'erse.jpeg',
    'gersan.png',
    'hcs.jpeg',
    'hik-vision.png',
    'oznur-kablo.png',
    'pinarsan.png',
    'prosis.png',
    'prosis2.jpeg',
    'prysmian.png',
    'sts.jpeg',
    'vekta.png'
  ];

  constructor() {
    this.slides = [
      {
        headline: 'SLIDES.PGS',
        src: 'assets/video/pgs.mp4'
      },
      {
        headline: 'SLIDES.PROJECT',
        src: 'assets/video/project.mp4'
      },
      {
        headline: 'SLIDES.TEAM',
        src: 'assets/video/team.mp4'
      }
    ];
  }

  ngOnInit() {
    setTimeout(() => {
      this.startHorizontalScroll();
    }, 200);
  }
  ngOnDestroy() {
    clearInterval(this.referenceScrollInterval);
    clearInterval(this.partnersScrollInterval);
  }
  startHorizontalScroll() {
    this.referenceScrollInterval = setInterval(() => {
      let newScrollLeft = this.referenceScroll.nativeElement.scrollLeft;
      let width = this.referenceScroll.nativeElement.clientWidth;
      let scrollWidth = this.referenceScroll.nativeElement.scrollWidth;
      this.referenceScroll.nativeElement.scrollLeft += 5;
      if (scrollWidth - (newScrollLeft + width) == 0) {
        clearInterval(this.referenceScrollInterval);
        this.referenceScroll.nativeElement.scrollLeft = 0;
        setTimeout(() => {
          this.startHorizontalScroll();
        }, 1000);
      }
    }, 50);
    this.partnersScrollInterval = setInterval(() => {
      let newScrollLeft = this.partnersScroll.nativeElement.scrollLeft;
      let width = this.partnersScroll.nativeElement.clientWidth;
      let scrollWidth = this.partnersScroll.nativeElement.scrollWidth;
      this.partnersScroll.nativeElement.scrollLeft += 5;
      if (scrollWidth - (newScrollLeft + width) == 0) {
        clearInterval(this.partnersScrollInterval);
        this.partnersScroll.nativeElement.scrollLeft = 0;
        setTimeout(() => {
          this.startHorizontalScroll();
        }, 1000);
      }
    }, 50);
  }
}
