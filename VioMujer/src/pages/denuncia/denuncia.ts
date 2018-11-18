import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GeografiaProvider } from '../../providers/geografia/geografia';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the ShowinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-denuncia',
  templateUrl: 'denuncia.html',
})
export class DenunciaPage {
  Departamentos;
  Ciudades;
  Descripcion;
  Direccion;
  title:string;
  image:string; 
  imagenReporte: string = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Geografia:GeografiaProvider,private camera: Camera ) {
    this.title=navParams.data.title;
    this.image=navParams.data.image;
    this.Geografia.GetDepartamentos().then(
      data=>{
        this.Departamentos=data;
      });
  }
  Reporte(){
    this.Geografia.Report(this.Direccion,this.Descripcion).then(
      data=>{
        alert("Mensaje enviado");
      },error=>{console.error(error);alert(error);});  
  }
  ionViewDidLoad() {
    //this.Geografia.GetCiudades(24);
  }
  getPicture(){
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.imagenReporte = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error =>{
      console.error( error );
    });
  }
}
