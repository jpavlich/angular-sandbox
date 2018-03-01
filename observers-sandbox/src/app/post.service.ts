import { HttpClient } from '@angular/common/http';
import { SequentialHttpClientService } from './sequential-http-client.service';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class PostService {

  constructor(private service: SequentialHttpClientService, private service2: HttpClient) { }


  getSequential(ids: number[]) {
    for (const id of ids) {
      this.service.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .subscribe(
          data => {
            console.log(data);
          },
          error => console.log(error)
        );
    }
  }

  getNonSequential(ids: number[]) {
    for (const id of ids) {
      this.service2.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .subscribe(
          data => {
            console.log(data);
          },
          error => console.log(error)
        );
    }
  }
}
