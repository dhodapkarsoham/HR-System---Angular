import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public employeeList = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://157.245.91.103:3000/employees')
    .subscribe(resp => {
      this.employeeList = resp['response'];
    })
  }

}
