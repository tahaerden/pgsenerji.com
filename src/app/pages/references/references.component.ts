import { Component } from '@angular/core';
import { referencesList } from 'src/app/shared/data/references';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  references = referencesList;
}
