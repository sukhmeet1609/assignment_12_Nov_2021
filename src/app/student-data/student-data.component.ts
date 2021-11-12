import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss']
})
export class StudentDataComponent implements OnInit {

  columnDefs: ColDef[] = [
    { field: 'ID', sortable: true },
    { field: 'Name', sortable: true },
    { field: 'Class', sortable: true },
    { field: 'Seat', sortable: true },
    { field: 'Club', sortable: true },
  ];

  rowData: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.rowData = this.http.get<any[]>('../../assets/data/student.json');
  }

  ngOnInit(): void {
  }

}
