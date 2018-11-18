import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ImagemenuPage } from '../pages/imagemenu/imagemenu';
import { ShowinfoPage } from '../pages/showinfo/showinfo';
import { DenunciaPage } from '../pages/denuncia/denuncia';
import { GeografiaProvider } from '../providers/geografia/geografia';

export const AppName="MujerAPP";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ImagemenuPage,
    ShowinfoPage,
    DenunciaPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ImagemenuPage,
    ShowinfoPage,
    DenunciaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeografiaProvider,
    HttpClientModule,
    Camera
  ]
})
export class AppModule {

}
