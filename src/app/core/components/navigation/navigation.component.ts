import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  showProfileMenu = false;
  selectedLang = this.translate.getDefaultLang();

  constructor(private translate: TranslateService) {}

  switchLanguage(selectedLang: string) {
    this.translate.use(selectedLang);
    this.selectedLang = selectedLang;
  }
}
