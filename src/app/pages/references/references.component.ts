import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  references = [
    'ankara-buyuksehir-belediyesi.jpeg',
    'asfat.jpeg',
    'aydin-buyuksehir-belediyesi.jpeg',
    'cankaya-belediyesi.jpeg',
    'gebze-belediyesi.jpeg',
    'icisleri-bakanligi.jpeg',
    'kastamonu-universitesi.jpeg',
    'malatya-valiligi.jpeg',
    'msb.jpeg',
    'saglik-bakanligi.jpeg',
    'tobb.jpeg',
    'toki.jpeg'
  ];
}
