import { Component, OnInit } from '@angular/core';
import { AnaliseService } from '../../components/analise/analise.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  analises: any;
  urlToJson = 'assets/grouped_analysis.json';
  resposta: any;
  uuidResposta: any;

  constructor(private analiseService: AnaliseService, public http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>(this.urlToJson).subscribe(response => {
      this.resposta = response;
    });
  }

  verifyData(value: any): void {
    this.uuidResposta = this.resposta.uuid;
    if (value == this.uuidResposta) {
      console.log('OK');
      this.analiseService.showOnConsole('operacao executada com sucesso');
      this.router.navigate(['/analises'])
    }else {
      this.analiseService.showOnConsole('Codigo de acesso errado. Insira o codigo correto para acessar as demais areas da aplicação');
    }
  }

  setData(value: any) : void {
    localStorage.setItem("uuid", value);
    this.verifyData(value);
  }

}
