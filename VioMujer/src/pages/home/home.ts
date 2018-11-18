import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppName} from '../../app/app.module';
import { ImagemenuPage } from '../imagemenu/imagemenu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nav: NavController;
  constructor(public navCtrl: NavController) {
    this.nav=navCtrl;
  }
  AppName() {
    return AppName;    
  } 
  continueClick(){

    var model=[];
    model.push(this.creaTepodemosAyudar());
    model.push(this.crearMenuConocederechos());
    model.push(this.crearVecinoDenuncia());
    // model.push({title:"Educando a los hombres",imagen:"strong.jpg",isInfo:true,info:"",submenu:null});
    // model.push({title:"Titulo 1",imagen:"Camara.png",isInfo:false,info:"",submenu:null});
    // model.push({title:"Titulo 2",imagen:"Camara.png",isInfo:false,info:"",submenu:null});
    // model.push({title:"Titulo 3",imagen:"Camara.png",isInfo:false,info:"",submenu:null});
    // model.push({title:"Titulo 4",imagen:"Camara.png",isInfo:false,info:"",submenu:null});
    this.nav.push(ImagemenuPage, {items:model, title:"Inicio"});
  }
  creaTepodemosAyudar(){
    var registro=
    {
      title:"Te podemos ayudar!!!",
      imagen:"Ambulancia.jpg",
      isInfo:true,
      info:"<h4>Sí fuiste o estas siendo víctima de violencia física, psicológica, sexual o política, comunícate inmediatamente a cualquiera de estas líneas  o acércate a la estación de policía más cercana</h4><div class=\"lista\"><a href=\"tel:123\">Línea Policía nacional 123</a><a href=\"tel:155\">Línea orientación Psicológica 155</a><a href=\"tel:195\">Línea purpura mujeres Bogotá</a></div>",
      submenu:null
    };
    // registro=
    // {
    //   title:"TITULO",
    //   imagen:"CAMARA.png",
    //   isInfo:true,
    //   info:"<h4>EJEMPLO INFORMACION TEXTO h4</h4><h3>EJEMPLO INFORMACION TEXTO h3</h3><p>Parrafo<br/>Tag<a href=\"tel:123\"> Tipo a en un texto</a></p><div class=\"lista\"><a href=\"tel:123\">Tag Tipo a dentro de un div clase list</a></div>",
    //   submenu:null
    // };
    return registro;
    
  }
  crearVecinoDenuncia(){
    var registro=
    {
      title:"Vecino informa",
      imagen:"Denuncia.png",
      isInfo:true,
      info:"",
      submenu:"DENUNCIA"
    };
    return registro;
  }
  crearMenuConocederechos()
  {    
    var registro=
    {
      title:"¿Tips en caso de Violencia?",
      imagen:"TiposViolencia.jpg",
      isInfo:false,
      info:"",
      submenu:[
        // http://www.sedem.chiapas.gob.mx/index.php/tipos_violencia
        {title:"Violencia Física y psicológica",imagen:"ViolenciaFisica.png",isInfo:true,info:"<h2>¿Cúales son los tipos de violencia física?</h2><ul><li>Existe <b>violencia física</b>cuando te agreden o golpean tu cuerpo con cualquier tipo de objeto, arma cortopunzante, tirones de cabello, armas, cachetadas, puños ,patadas  entre otros.</li><li>Existe <b>violencia psicológica</b> cuando te humillan, manipulan, extorsionan o simplemente te aíslan de tus derechos como mujer.</li><li><b>Violencia Familiar</b><ul><li>Recuerda que son personas que componen una pareja sentimental que estén casados o lleven conviviendo mas de 2 años</li><li>Personas con hijos sin ninguna relación de pareja sentimental.</li><li>Personas con hijos directos de sangre o adoptados.</li><li>Personas que convivan en tu casa con hasta 3cer grado de consanguinidad.</li></ul></li><li><b>Violencia NO Familiar</b><ul><li>Recuerda que son personas que fueron parte de tu pasado como exnovios, exesposos, compañeros sentimentales.</li><li>Cuando visualices violencia en casos de mujeres que ejercen la prostitución.</li><li>Cuando sin excluir ningún tipo de raza, condición sociopoliticoeconómica, o condición medica seas violentada por otra persona.</li></ul></li></ul><h2>Prepárate</h2><ul><li>Prepárate con : <ol><li>Documentos.</li<li>Dinero.</li><li>Copia de las de las llaves de tu casa con alguien de confianza.</li><li>Avísale o coméntale a tu mejor amiga de lo que esta ocurriendo.</li><li><a href=\"tel:123\">Llama a la policia</a></li></ol></li></ul>",submenu:null},
        {title:"Violencia Sexual",imagen:"ViolenciaSexual.png",isInfo:true,info:"<h2>Existe violencia sexual cuando</h2><ul><li>Eres obligada a tener cualquier tipo de contacto sexual físico, verbal ,o virtual ,normalmente este tipo de violencia esta representada en tu pareja sentimental , familiares , o amigos  sin olvidar que te pueden estar extorsionando en caso de que distribuyan material sexual por medios digitales.</li><li>En casos donde te propongan tener relaciones sexuales en compensación de que te no te despidan del trabajo, un asenso o para obtener una nota en el colegio o universidad como acoso sexual.</li><li>En casos donde te toquen en contra de tu voluntad.</li><li>En casos donde te obliguen a ver contenidos sexuales.</li><li>En casos donde seas manipulada para ejercer la prostitución.</li></ul><h2>Prepárate</h2><ul><li>Prepárate con : <ol><li>Documentos.</li<li>Dinero.</li><li>Copia de las de las llaves de tu casa con alguien de confianza.</li><li>Avísale o coméntale a tu mejor amiga de lo que esta ocurriendo.</li><li><a href=\"tel:123\">Llama a la policia</a></li></ol></li></ul>",submenu:null},
        {title:"Violencia económica",imagen:"ViolenciaEconomica.png",isInfo:true,info:"<h2>Existe violencia económica cuando</h2><ul><li>Existe violencia Económica cuando estas siendo manipulada y obligada a asumir deudas o pedir créditos o cuando estas siendo explotada económicamente.</li><li>Recuerda que la violencia económica es motivo de divorcio ,y si tuviste hijos con el abusador debe pagarte para mantenimiento.        </li></ul><h2>Prepárate</h2><ul><li>Prepárate con : <ol><li>Documentos.</li<li>Dinero.</li><li>Copia de las de las llaves de tu casa con alguien de confianza.</li><li>Avísale o coméntale a tu mejor amiga de lo que esta ocurriendo.</li><li><a href=\"tel:123\">Llama a la policia</a></li></ol></li></ul>",submenu:null},
        {title:"Violencia política",imagen:"Violenciapolitica.png",isInfo:true,info:"<h2>Existe violencia política cuando</h2><ul><li>Existe Violencia política cuando eres violentada a l no poder ejercer tu derecho al boto a la libre expresión o ser una mujer líder cuando reprimen tu derecho a participar en procesos políticos ,esto conlleva a presentar casos de atentados contra tu vida o familiares cercanos para obstruir tu participación.</li><li>Si tu pareja sentimental o familiares prohíben la participación en escenarios sociales o políticos.</li><li>Si vulneran tus derechos como mujer de participar activamente y políticamente, de acuerdo  a la (<a href=\"http://wp.presidencia.gov.co/sitios/normativa/leyes/Documents/Juridica/LEY%20581%20DE%202000.pdf\">ley581 de 2000</a> y la <a href=\"http://www.secretariasenado.gov.co/senado/basedoc/ley_1475_2011.html\">ley 1475 de 2011</a>).</li></ul><h2>Prepárate</h2><ul><li>Prepárate con : <ol><li>Documentos.</li<li>Dinero.</li><li>Copia de las de las llaves de tu casa con alguien de confianza.</li><li>Avísale o coméntale a tu mejor amiga de lo que esta ocurriendo.</li><li><a href=\"tel:123\">Llama a la policia</a></li></ol></li></ul>",submenu:null},
      ]
    };
    return registro;
  }
}
