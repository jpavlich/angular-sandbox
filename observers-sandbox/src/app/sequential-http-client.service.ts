import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';

@Injectable()
export class SequentialHttpClientService {
  private currentObservable: Observable<any> = Observable.of(0);

  constructor(private httpClient: HttpClient) { }

  get(url: string): Observable<any> {
    this.currentObservable = this.currentObservable.concatMap((_) => this.httpClient.get(url));
    return this.currentObservable;
  }
}
