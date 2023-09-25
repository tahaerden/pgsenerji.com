import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  selectedLang!: string;
  constructor(private translate: TranslateService) {
    const storedLang = localStorage.getItem('lang');
    this.selectedLang = storedLang || this.translate.getDefaultLang();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.selectedLang = event.lang;
    });
  }
}
