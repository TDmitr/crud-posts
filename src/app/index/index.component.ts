import { Component, OnInit } from '@angular/core';
import { PostService } from "../post.service";
import {Subject} from "rxjs/Rx";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  postList: any;
  public static returned: Subject<any> = new Subject();

  constructor(private postService: PostService) {
    IndexComponent.returned.subscribe(_ => {
      this.init();
    });
  }

  init() {
    this.postService.fetch().subscribe(res => {
      this.postList = res;
    })
  }

  ngOnInit() {
    this.init();
  }

}
