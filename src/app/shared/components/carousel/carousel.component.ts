import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Slide } from './carousel.interface';
import { trigger, transition, useAnimation } from '@angular/animations';

import {
  AnimationType,
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut,
  slideUp
} from '../animations/animations';
import { SafePipe } from 'src/app/core/pipes/safe.pipe';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slideAnimation', [
      /* scale */
      transition('void => scale', [useAnimation(scaleIn, { params: { time: '500ms' } })]),
      transition('scale => void', [useAnimation(scaleOut, { params: { time: '500ms' } })]),

      /* fade */
      transition('void => fade', [useAnimation(fadeIn, { params: { time: '2000ms' } })]),
      transition('fade => void', [useAnimation(fadeOut, { params: { time: '2000ms' } })]),

      /* flip */
      transition('void => flip', [useAnimation(flipIn, { params: { time: '500ms' } })]),
      transition('flip => void', [useAnimation(flipOut, { params: { time: '500ms' } })]),

      /* JackInTheBox */
      transition('void => jackInTheBox', [useAnimation(jackIn, { params: { time: '700ms' } })]),
      transition('jackInTheBox => void', [useAnimation(jackOut, { params: { time: '700ms' } })]),

      /* Slide Up */
      transition('void => slideUp', [useAnimation(slideUp, { params: { time: '2500ms' } })])
      // transition('slideUp => void', [useAnimation(jackOut, { params: { time: '700ms' } })])
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @ViewChild('videoRef', { static: false }) videoRef!: ElementRef;
  @Input() slides!: Slide[];
  @Input() animationType = AnimationType.Scale;
  @Input() timer: number = 0;
  slideInterval: any;

  currentSlide = 0;

  constructor(public safe: SafePipe, private changeDetectorRef: ChangeDetectorRef) {}

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    this.startVideo();
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    this.startVideo();
  }

  startInterval() {
    if (this.timer) {
      this.slideInterval = setInterval(() => {
        this.onNextClick();
      }, this.timer);
    }
  }

  ngOnInit() {
    // this.preloadImages(); // for the demo
    this.startInterval();
  }

  // preloadImages() {
  //   for (const slide of this.slides) {
  //     new Image().src = slide.src;
  //   }
  // }

  ngAfterViewInit(): void {
    this.startVideo();
  }

  startVideo() {
    this.changeDetectorRef.detectChanges();
    if (this.videoRef) {
      const media = this.videoRef.nativeElement;
      media.muted = true;
      media.play();
    }
  }
}
