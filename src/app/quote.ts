export class Quote {
  public showDescription:boolean;
  constructor(public id:number, public name:string, public description:string,public author:string, public completeDate:Date, public upvote:number, public downvote:number){
    this.showDescription=false
    this.upvote=0
    this.downvote=0
  }
}
