export class Freelance {
    constructor(
        public id:number,
        public name:String,
        public surname:string,
        public email:string,
        public domain:string,
        public nationality:string,
        public cv?:File,
        public description?:Text
        ){}
}
