import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuModel } from '../../app/models/menu-model';
import { ShowinfoPage } from '../../pages/showinfo/showinfo';
import { DenunciaPage } from '../../pages/denuncia/denuncia';
/**
 * Generated class for the ImagemenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-imagemenu',
  templateUrl: 'imagemenu.html',
})
export class ImagemenuPage {
  items:MenuModel[];
  title:string;
  constructor(public navCtrl: NavController, public param:NavParams) {
    this.items=param.data.items;
    this.title=param.data.title;
    console.log(param);
  }
  
  imgClick(menuitem:MenuModel){
    console.log(menuitem);
    if(menuitem.isInfo && menuitem.submenu==null){
      this.navCtrl.push(ShowinfoPage, {title:menuitem.title,image:menuitem.imagen, info:menuitem.info});
    } 
    else if(menuitem.isInfo){
      this.navCtrl.push(DenunciaPage, {title:menuitem.title,image:menuitem.imagen, info:menuitem.info});
    } 
    else{
      this.navCtrl.push(ImagemenuPage, {items:menuitem.submenu, title:menuitem.title});
    }
  }
}
