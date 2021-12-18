import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  isUserAuthenticated = false;
  userId: string;
  constructor() {}
}
