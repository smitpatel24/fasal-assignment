import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import axios from 'axios';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router, private toastCtrl: ToastController) {}

  ngOnInit() {}

  async presentToast(info: string) {
    const toast = await this.toastCtrl.create({
      message: info,
      duration: 3000,
      color: 'dark',
    });
    toast.present();
  }

  onSignup() {
    let payload = {
      username: this.username,
      password: this.password,
    };
    return new Promise((resolve) => {
      axios
        .post('http://localhost:5000/api/users/register', payload)
        .then((res) => {
          this.presentToast('Account created successfully!');
          this.router.navigate(['']);
          resolve(true);
        })
        .catch((error) => {
          this.presentToast(
            'Something went wrong. Try using another username.'
          );
          resolve(false);
        });
    });
  }
}
