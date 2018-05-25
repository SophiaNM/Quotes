import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Budhaa','Theorem of Self-Awareness. This referes to the ability to be self aware', new Date(2018,3,14)),
    new Quote(2,'Socrates','Philosophy in Relativity. Readon relativity',new Date(2018,3,15)),
    new Quote(3,'PLato', 'Meaning of Life Read on meaning of life beiing 42',new Date(2018,3,16))
  ];

  deleteQuote(isComplete,index){
      if (isComplete){
          let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

          if(toDelete){
              this.quotes.splice(index,1)
          }
      }
  }

  toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
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
