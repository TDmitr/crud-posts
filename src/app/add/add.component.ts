import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from "../post.service";
import { IndexComponent} from "../index/index.component";
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.sass']
})
export class AddComponent implements OnInit {

  constructor(private postService: PostService, public dialog: MatDialog) { }

  save(form: NgForm) {
    this.postService.add(form).subscribe(res => {
      IndexComponent.returned.next(false);
      this.openDialog();
    });
  }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(AddDialog);
  }
}

@Component({
  selector: 'app-add-dialog',
  templateUrl: 'add.dialog.html',
})
export class AddDialog {}
