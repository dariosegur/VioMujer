import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GeografiaProvider } from '../../providers/geografia/geografia';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
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
  Ubicacion;
  Telefono;
  title:string;
  image:string; 
  imagenReporte: string = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public Geografia:GeografiaProvider,private camera: Camera,private transfer: FileTransfer) {
    this.title=navParams.data.title;
    this.image=navParams.data.image;
    this.Geografia.GetDepartamentos().then(
      data=>{
        this.Departamentos=data;
      });
  }

  uploadFile(id) {   
    const fileTransfer: FileTransferObject = this.transfer.create();
  
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'file',
      chunkedMode: false,
      mimeType: "image/jpeg",
      params:{'Id':id},
      httpMethod:"POST",
      headers: {}
    }
    console.log("Iniciando carga de evidencia....");  
      fileTransfer.upload(this.imagenReporte, 'http://paidcoldev.com/Denuncia/UploadImagen', options)
      .then((data) => {
      console.log(data+" Uploaded Successfully");  
      alert("Reporte y evidencia enviados");   
    }, (err) => {
      alert(err);     
    });
  }

  Reporte(){
    this.Geografia.Report(this.Direccion,this.Descripcion,this.Telefono, this.Ubicacion).then(
      data=>{
        console.log(data);
        if(this.imagenReporte!=null){
          this.uploadFile(data);
        }else{
          alert("Reporte enviado");
        }
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
