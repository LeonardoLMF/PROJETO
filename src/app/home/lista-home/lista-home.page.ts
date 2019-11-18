import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-lista-home',
  templateUrl: './lista-home.page.html',
  styleUrls: ['./lista-home.page.scss'],
})
export class ListaHomePage implements OnInit {
  
  produtos: Observable<any[]>;

    slideOpts = {
      initialSlide: 1,
      loop: true,
      autoplay: true
    };

  constructor(private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.produtos = this.sharedService.getAll();
  }

  adicionarProduto(produtoKey: string){
    this.router.navigate(['pedido/carrinho/novo-item/', produtoKey]);
  }

}
