import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message = '';
  data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  testData = ['aa', 'bb', 'cc'];


  columns = [{
    type: 'autocomplete',
    source: (query, process) => {
      console.log(query);
      console.log(process);
      process(this.testData);
    }
  },
  {},
  {}
  ];

  options = {};

  constructor(private http: Http) { }

  changeTestData() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(((res) => res.json()))
      .subscribe(
      data => this.testData = data,
      error => this.message = 'Error');
  }
}
