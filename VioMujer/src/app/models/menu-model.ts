export class MenuModel{
    constructor(
        public title:string,
        public imagen:string, 
        public isInfo:boolean, 
        public info:string,
        public submenu:MenuModel[]
        ){
    }
}