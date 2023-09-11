import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
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
  slides: Slide[] = [
    {
      headline: '<span>P</span>roje&nbsp;ve&nbsp;<span>G</span>üç&nbsp;<span>S</span>istemleri',
      src: 'assets/video/pgs.webm'
    },
    {
      headline: 'Projeler slogan',
      src: 'assets/video/project.webm'
    },
    {
      headline: 'Güven, Yenilik, Profesyonellik',
      src: 'assets/video/team.webm'
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
  team: Slide[] = [
    {
      subtitle: 'Proje 1 şantiyesinden',
      src: 'assets/img/about-us/team.jpeg'
    },
    {
      subtitle: 'Proje 2 şantiyesinden',
      src: 'assets/img/about-us/team.jpeg'
    }
  ];
  references = referencesList;

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
