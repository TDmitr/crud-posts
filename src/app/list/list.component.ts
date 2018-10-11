import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  @Input() data: any;
  filteredData: any;

  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.filteredData = this.data;
  }

  search(event) {
    this.filteredData = this.data.filter((e) => {
      return e.title.search(event.target.value.toLowerCase()) > -1;
    });
  }

}
