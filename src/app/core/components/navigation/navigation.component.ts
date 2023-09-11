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
  selectedLang = this.translate.getDefaultLang();
  isHomePage = false;

  constructor(private translate: TranslateService, private router: Router) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isHomePage = router.url === '/' ? true : false;
      });
  }

  switchLanguage(selectedLang: string) {
    this.translate.use(selectedLang);
    this.selectedLang = selectedLang;
  }
}
