import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ShowinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-showinfo',
  templateUrl: 'showinfo.html',
})
export class ShowinfoPage {

  title:string;
  image:string; 
  info:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title=navParams.data.title;
    this.image=navParams.data.image;
    this.info=navParams.data.info;
  }

  ionViewDidLoad() {
  }

}
