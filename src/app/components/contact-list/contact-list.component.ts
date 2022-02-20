import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContactListService } from './contact-list.service';
import { CreateEditContactDialogComponent } from './create-edit-contact-dialog/create-edit-contact-dialog.component';

export interface Contacts {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
}

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'phone', 'action'];
  dataSource!: MatTableDataSource<Contacts>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  data: Array<Contacts> = [];

  constructor(public dialog: MatDialog, private contactListService: ContactListService) { }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit() {
    this.setPaginatorNSorting();
  }

  setPaginatorNSorting() {
    if (this.dataSource) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  getData() {
    this.contactListService.getContactList().subscribe((res) => {
      this.data = res;
      this.setData();
    })
  }

  setData() {
    this.dataSource = new MatTableDataSource(this.data);
    this.setPaginatorNSorting();
  }

  add() {
    const dialogRef = this.dialog.open(CreateEditContactDialogComponent, {
      data: {
        action: 'add'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data) {
        let tempData = result.data;
        tempData.id = this.data.length;
        this.data.push(tempData);
        this.setData();
      }
    });
  }

  update(row: any, action: string, indx: number) {
    const dialogRef = this.dialog.open(CreateEditContactDialogComponent, {
      data: {
        row: row,
        action: action
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data && result.action == 'update') {
        this.data[indx] = result.data;
        this.setData();
      }
    });
  }

  delete(id: number) {
    this.data = this.data.filter((item) => item.id !== id);
    this.setData();
  }

  search(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
