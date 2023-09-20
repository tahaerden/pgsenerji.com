import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  showProfileMenu = false;
  selectedLang: string;
  isHomePage = false;
  isSticky = false;

  constructor(private translate: TranslateService, private router: Router) {
    const storedLang = localStorage.getItem('lang');
    this.selectedLang = storedLang || this.translate.getDefaultLang();

    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHomePage = router.url === '/' ? true : false;
      });
  }

  switchLanguage(selectedLang: string) {
    this.translate.use(selectedLang);
    this.selectedLang = selectedLang;
    localStorage.setItem('lang', selectedLang);
  }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollEvent, true);
  }
  scrollEvent = (event: any): void => {
    try {
      if (event.target.scrollingElement) {
        const scrollTopVal = event.target.scrollingElement.scrollTop;
        this.isSticky = scrollTopVal > 300 ? true : false;
      }
    } catch (error) {
      console.log(error);
    }
  };
}
