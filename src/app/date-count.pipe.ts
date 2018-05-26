import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();//Get the current date
    let todayWithNoTime:any = new Date(today);
    var dateDifference = todayWithNoTime-value;
    const secondsInDay = 86400;

    var dateDifferenceSeconds = dateDifference*0.001;

    var dateCounter = dateDifferenceSeconds/secondsInDay;
    console.log(value);

    if(dateCounter>=1) return Math.round(dateCounter);
    else return 0;
    }
  }
}
