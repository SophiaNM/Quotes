import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Sophia Murage','Whereof one cannot speak, thereof one must be silent','Ludwig Wittgenstein', new Date(2018,3,14),0,0),
    new Quote(2,'Mark Taiwin','The only thing I know is that I know nothing','Socrates',new Date(2018,3,15),0,0),
    new Quote(3,'Emilia Markal', 'You can discover more about a person in an hour of play than in a year of conversation','Plato',new Date(2018,3,16),0,0)
    new Quote(4,'John Momoa', 'That man is wisest who, like Socrates, realizes that his wisdom is worthless','Plato',new Date(2018,3,24),0,0)
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
