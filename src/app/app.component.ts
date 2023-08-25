import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              top: '100px',
              left: 0,
              width: '100%'
            })
          ],
          { optional: true }
        ),
        query(':enter', [style({ opacity: 0, transform: 'scale(0.8)' })], { optional: true }),
        group([
          query(
            ':leave',
            [animate('300ms ease-out', style({ opacity: 0, transform: 'scale(0.8)' }))],
            { optional: true }
          ),
          query(
            ':enter',
            [animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))],
            { optional: true }
          )
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'PGS Enerji';
  constructor(translate: TranslateService, private contexts: ChildrenOutletContexts) {
    translate.setDefaultLang('tr');
    translate.use('tr');
  }
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
