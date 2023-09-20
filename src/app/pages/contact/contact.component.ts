import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  recaptchaSitekey = environment.recaptchaSitekey;
  form = {
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  };

  constructor(private translate: TranslateService) {}

  sendEmail(e: Event) {
    e.preventDefault();
    this.form = {
      from_name: '',
      from_email: '',
      subject: '',
      message: ''
    };
    emailjs
      .sendForm(
        'service_x614xyl',
        'template_01dl5tf',
        e.target as HTMLFormElement,
        'wtF-1YDLULqPRJXpF'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result);
          alert(this.translate.instant('YOUR_MESSAGE_IS_SENT'));
          this.form = {
            from_name: '',
            from_email: '',
            subject: '',
            message: ''
          };
        },
        (error) => {
          console.log(error);
          alert(error);
        }
      );
  }

  // resolved(captchaResponse: string) {
  //   console.log(`Resolved captcha with response: ${captchaResponse}`);
  // }
}
