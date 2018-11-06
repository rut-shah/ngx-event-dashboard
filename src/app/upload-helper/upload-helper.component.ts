import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-upload-helper',
  templateUrl: './upload-helper.component.html',
  styleUrls: ['./upload-helper.component.css']
})
export class UploadHelperComponent implements OnInit {

  dataSource = new MatTableDataSource([
    { position: 1, title: 'Ms.', fName: 'Margaret', lName: 'Bond', email: 'xyz@test.com', hPhone: '(04916) 9672310', mPhone: '(04916) 9672310', address: '926-8362 Donec Ave', zip: '7119', city: 'Hohen Neuendorf' },
    { position: 1, title: 'Ms.', fName: 'Margaret', lName: 'Bond', email: 'xyz@test.com', hPhone: '(04916) 9672310', mPhone: '(04916) 9672310', address: '926-8362 Donec Ave', zip: '7119', city: 'Hohen Neuendorf' },
    { position: 1, title: 'Ms.', fName: 'Margaret', lName: 'Bond', email: 'xyz@test.com', hPhone: '(04916) 9672310', mPhone: '(04916) 9672310', address: '926-8362 Donec Ave', zip: '7119', city: 'Hohen Neuendorf' }
  ]);

  displayedColumns: string[] = ['position', 'title', 'fName', 'lName', 'email', 'hPhone', 'mPhone', 'address', 'zip', 'city'];
  columnLabels: string[] = ['#', 'TITLE', 'FIRST-NAME', 'LAST-NAME', 'EMAIL', 'PHONE (HOME)', 'PHONE (MOBILE)', 'ADDRESS', 'ZIP', 'CITY'];

  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  displayFilterDialog(event) {
    let targetLeft = event.currentTarget.offsetLeft,
        targetTop = event.currentTarget.offsetTop,
        dialog = (<HTMLDivElement>document.getElementsByClassName('filter-dialog-container')[0]);
    
    dialog.style.left = targetLeft + 'px';
    dialog.style.top = targetTop + (event.currentTarget.clientHeight/1.5) + 'px';
    dialog.style.display = "block";
  }

  hideFilterDialog() {
    (<HTMLDivElement>document.getElementsByClassName('filter-dialog-container')[0]).style.display = "none";
  }
}
