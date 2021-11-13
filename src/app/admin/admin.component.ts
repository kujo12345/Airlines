import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toCreateFlight(){
    this.router.navigate('create-flight');
  }
  
  toCancelFlight(){
    this.router.navigate('cancel-flight');
  }

  toViewFlights(){
    this.router.navigate('/view-flights');
  }
  
  toViewUsers(){
    this.router.navigate('/view-users');
  }