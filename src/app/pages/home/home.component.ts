import { Component, ViewChild } from '@angular/core';
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
      headline: 'test',
      src: 'https://www.youtube.com/embed/bFDNrQp7vi4'
    }
    // {
    //   headline: 'Güven, Yenilik, Profesyonellik',
    //   src: 'https://www.youtube.com/embed/bFDNrQp7vi4?autoplay=1&mute=1&loop=1&playlist=bFDNrQp7vi4&controls=0&rel=0&modestbranding=0'
    // },
    // {
    //   headline: 'TODO: Projeler slogan',
    //   src: 'https://www.youtube.com/clip/UgkxVvV2RMxVcvwYgNql10T7osDr1Drakj45?si=Eq5PFtcDGSETbDYg'
    // },
    // {
    //   headline: 'TODO: Çalışanlar slogan',
    //   src: 'https://www.youtube.com/clip/UgkxaaXVwmRcTxtvuVBWq_gtH3QKX4Ki_-5y?si=upWGY6OER5NcrPcq'
    // }
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
