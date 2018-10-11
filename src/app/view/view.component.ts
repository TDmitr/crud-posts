import { Component, OnInit } from '@angular/core';
import { PostService } from "../post.service";
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.sass']
})
export class ViewComponent implements OnInit {
  post: any;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private router: Router) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.postService.get(params.postId).subscribe(res => {
        this.post = res;
      })
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialog);

    dialogRef.afterClosed().subscribe(result => {
      if(result === true) {
        this.postService.remove(this.post.id).subscribe(_ => {
          this.router.navigate(['/']);
        })
      }
    });
  }
}

@Component({
  selector: 'app-view-dialog',
  templateUrl: 'view.confirm-dialog.component.html',
})
export class ConfirmDeleteDialog {}
