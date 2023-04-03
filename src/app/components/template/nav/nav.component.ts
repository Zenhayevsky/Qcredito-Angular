import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  urlToJson = 'assets/grouped_analysis.json';
  resposta: any;
  uuidResposta: any;

  constructor(private router: Router, public http: HttpClient) { }

  goToApp(page: string): void {
    var keyUuid = localStorage.getItem('uuid');
    this.uuidResposta = this.resposta.uuid;

    if (keyUuid === this.uuidResposta) {
      if (page === 'cadastros') {
        this.router.navigate(['/cadastros'])
      } else if(page === 'analises') {
        this.router.navigate(['/analises'])
      } else {
        this.router.navigate(['/'])
      }
    }
  }

  ngOnInit(): void {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.resposta = response;
    });
  }

}
