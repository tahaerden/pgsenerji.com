import { Component } from '@angular/core';
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

  sendEmail(e: Event) {
    e.preventDefault();
    this.form = {
      from_name: '',
      from_email: '',
      subject: '',
      message: ''
    };
    emailjs.sendForm('service_X', 'template_X', e.target as HTMLFormElement, 'user_X').then(
      (result: EmailJSResponseStatus) => {
        console.log(result);
        alert('Your message is sent. Thank you.');
        this.form = {
          from_name: '',
          from_email: '',
          subject: '',
          message: ''
        };
      },
      (error) => {
        console.log(error);
        alert('reCAPTCHA failed, please try again. \nError:' + error.text);
      }
    );
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
