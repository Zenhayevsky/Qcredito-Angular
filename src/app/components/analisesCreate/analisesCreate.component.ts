
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analise-create',
  templateUrl: './analisesCreate.component.html',
  styleUrls: ['./analisesCreate.component.css']
})
export class AnalisesCreateComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {

  }

  cancel(): void {
    
    this.router.navigate(['/cadastros'])
  }

}