import { Component, OnInit } from '@angular/core';
// import { Analise } from '../../components/analise/analise.model';
import { AnaliseService } from '../../components/analise/analise.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-cadastro',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {

  // analises: Analise[] = [];

  constructor(private analiseService: AnaliseService,
    private router: Router) { }

  ngOnInit(): void {
    // this.analiseService.read().subscribe(analises => {
    //   this.analises = analsies
    //   console.log(analises)
    // })
  }

  createAnalise(): void {
    this.router.navigate(['/analises/create']);
  }

  cancel(): void {
    this.router.navigate(['/'])
  }

}
