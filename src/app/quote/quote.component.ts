import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Sophia Murage','Theorem of Self-Awareness. This referes to the ability to be self aware','Budhaa', new Date(2018,3,14),0,0),
    new Quote(2,'Mark Taiwin','Philosophy in Relativity. Readon relativity','Socrates',new Date(2018,3,15),0,0),
    new Quote(3,'Edith Markal', 'Meaning of Life Read on meaning of life beiing 42','Plato',new Date(2018,3,16),0,0)
  ];

  deleteQuote(isComplete,index){
      if (isComplete){
          let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}'s quote`)

          if(toDelete){
              this.quotes.splice(index,1)
          }
      }
  }

  toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
      // alert("this works");
  }


  addNewQuote(quote){
      let quoteLength = this.quotes.length;
      quote.id=quoteLength+1;
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)

  }

  constructor() { }

  ngOnInit() {
  }

}
