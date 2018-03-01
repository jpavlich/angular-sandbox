import { Component } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(private service: PostService) { }

  getSeqPosts() {
    this.service.getSequential([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }

  getNonSeqPosts() {
    this.service.getNonSequential([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  }
}
