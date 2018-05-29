# Quotes Independent Project

This is the first Independent project for Moringa Core, May 25th, 2018.
The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.


## Description

The Quotes Angular application allows users to create quotes and have those quotes voted on whether they are terrible or are inspirational.

## Features

1. Allows users to enter quotes and display back to the user.
2. The user can view the Quotes, author and number of days it was logged which appear on the quote section.
3. Clicking on the `more details` button user can view the number of upvotes downvotes and delete a quote button.
4. User can vote for a quote by clicking `Upvote` or `Downvote` and see the changes.
5. User can also delete their quote by clicking `delete quote`.
6. The quote with the greatest number of votes is highlighted in blue.

## Behaviour Driven Development

| Behaviour | Input | Output |
| --------- | ------| ------ |
| Create new quote | Name, Quote, Author, Date| Displays quote, name, author, days passed and more details|
| Upvote | Click `more details` then click `upvote` button | Increased number of upvotes|
| Downvote |Click `more details` then click `downvote` button |  Increased number of downvotes|
| Delete a quote | Click `more details` then click `delete quote`| Quote is deleted |

## Known Bugs
The highest number of votes does not highlight.


## Live Website
View the complete site [here](https://sophianm.github.io/selfassessment3/)

## Technologies Used
It is built using Angular JS, HTML, Bootstrap.

## Contributors
 - Sophia Murage

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## License
---------
### MIT License

Copyright (c) [2018] [Sophia Njeri Murage]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


### Contact Information
njerimurage92@gmail.com | snmurage1@gmail.com

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
