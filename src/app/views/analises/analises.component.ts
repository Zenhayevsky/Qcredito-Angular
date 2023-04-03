import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content-analise',
  templateUrl: './analises.component.html',
  styleUrls: ['./analises.component.css']
})
export class AnalisesComponent implements OnInit {
  
  resposta: any;
  documentos: any;
  urlToJson = 'assets/grouped_analysis.json';

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.resposta = response;
      this.documentos = this.resposta.documents;
    });
  }

}
