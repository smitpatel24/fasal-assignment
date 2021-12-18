import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import axios from 'axios';
import { StateService } from '../state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private state: StateService
  ) {}

  ngOnInit() {}

  async presentToast(info: string) {
    const toast = await this.toastCtrl.create({
      message: info,
      duration: 3000,
      color: 'dark',
    });
    toast.present();
  }

  onLogin() {
    let payload = {
      username: this.username,
      password: this.password,
    };
    console.log(this.username, this.password);
    return new Promise((resolve) => {
      axios
        .post('http://localhost:5000/api/users/login', payload)
        .then((res) => {
          // console.log(res.data._id);
          this.state.userId = res.data._id;
          this.state.isUserAuthenticated = true;
          this.router.navigate(['/start/tabs/tab1']);
          resolve(true);
        })
        .catch((error) => {
          console.log(error);
          this.presentToast('Something went wrong.');
          resolve(false);
        });
    });
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
