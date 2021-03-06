import { CarrinhoService } from './../../pedidos/shared/carrinho.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../shared/shared.service';

@Component({

  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.page.html',
  styleUrls: ['./lista-produtos.page.scss'],

})
export class ListaProdutosPage implements OnInit {

  produtos: Observable<any[]>;
  categorias: Observable<any[]>;
  categoriaSelecionada: string;
  produto: string;
  carrinhoPossuiItens: boolean = false;
  produtinhos: Observable<any[]>;

  constructor( 
               private router: Router,
               private produtosService: ProdutosService,
               private carrinhoService: CarrinhoService
             ) { }

  ngOnInit() {
    this.produtos = this.produtosService.getAll(null);
    this.categorias = this.produtosService.getCategoriasAll();
    this.carrinhoService.carrinhoPossuiItens().subscribe((existemItens: boolean)=> {
    this.carrinhoPossuiItens = existemItens;
    });
  }

  buscarProdutos(){
    this.produtos = this.produtosService.getAll(this.categoriaSelecionada);
  }

  adicionarProduto(produtoKey: string){
    this.router.navigate(['pedido/carrinho/novo-item/', produtoKey]);
  }
 
  getProprietario(){
    this.produtos = this.produtosService.getByCustomers(this.produto);
  }
  
}
