import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from "../post.service";
import { ActivatedRoute } from '@angular/router';
import {IndexComponent} from "../index/index.component";
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  post: any;

  constructor(private postService: PostService, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postService.get(params.postId).subscribe(res => {
        this.post = res;
      })
    });
  }

  save(form: NgForm) {
    this.postService.add(form).subscribe(_ => {
      IndexComponent.returned.next(false);
      this.openDialog();
    });
  }

  openDialog(): void {
    this.dialog.open(EditDialog);
  }
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: 'edit.dialog.html',
})
export class EditDialog {}
