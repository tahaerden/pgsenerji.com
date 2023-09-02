import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { AnimationType } from 'src/app/shared/components/animations/animations';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { Slide } from 'src/app/shared/components/carousel/carousel.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(CarouselComponent, { static: true }) carousel!: CarouselComponent;
  animationType = AnimationType.Fade;
  slides: Slide[] = [
    {
      headline: '<span>P</span>roje&nbsp;ve&nbsp;<span>G</span>üç&nbsp;<span>S</span>istemleri',
      src: 'https://www.youtube.com/embed/FG0fTKAqZ5g?si=yyLEM_jsuXDDbj-y&amp;clip=Ugkxu5X8a47Je7Hh30ArMZ7GYEhQr-yua1KO&amp;clipt=EOBdGPCrAQ'
    },
    {
      headline: 'Projeler slogan',
      src: 'https://www.youtube.com/embed/O9F4rXp1Ogc?si=6jhIRmXTT9N9bTde&amp;clip=UgkxVvV2RMxVcvwYgNql10T7osDr1Drakj45&amp;clipt=EPTkARi58wI'
    },
    {
      headline: 'Güven, Yenilik, Profesyonellik',
      src: 'https://www.youtube.com/embed/O9F4rXp1Ogc?si=W0t08nyzzrF_jJ-v&amp;clip=UgkxaaXVwmRcTxtvuVBWq_gtH3QKX4Ki_-5y&amp;clipt=ELKOARi22wE'
    }
  ];
  projects: Slide[] = [
    {
      subtitle: 'Proje 1',
      src: 'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
    },
    {
      subtitle: 'Proje 2',
      src: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
    },
    {
      subtitle: 'Proje 3',
      src: 'https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80'
    },
    {
      subtitle: 'Proje 4',
      src: 'https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
    }
  ];
}
