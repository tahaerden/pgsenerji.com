import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { cities } from 'src/app/shared/data/cities';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {
  cities = cities;
  education = ['HIGH_SCHOOL', 'DEGREE', 'MASTERS_DEGREE', 'PhD'];
  form = {
    name: '',
    phone: '',
    email: '',
    education: '',
    city: '',
    position: ''
  };

  constructor(private translate: TranslateService) {}

  sendEmail(e: Event) {
    e.preventDefault();
    this.form = {
      name: '',
      phone: '',
      email: '',
      education: '',
      city: '',
      position: ''
    };
    emailjs
      .sendForm(
        'service_x614xyl',
        'template_v92hsq7',
        e.target as HTMLFormElement,
        'wtF-1YDLULqPRJXpF'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result);
          alert(this.translate.instant('YOUR_MESSAGE_IS_SENT'));
        },
        (error) => {
          console.log(error);
          alert(error);
        }
      );
  }
}
