import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  quotes = [
    new Quote(1,'Budhaa','Theorem of Self-Awareness. This referes to the ability to be self aware', new Date(2018,3,14)),
    new Quote(2,'Socrates','Philosophy in Relativity. Readon relativity',new Date(2018,3,15)),
    new Quote(3,'PLato', 'Meaning of Life Read on meaning of life beiing 42',new Date(2018,3,16))

  ]

}
