import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
    
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/lista-home/lista-home.module#ListaHomePageModule'
          }
        ]
      },

      {
        path: 'produtos',
        children: [
          {
            path: '',
            loadChildren: '../produtos/lista-produtos/lista-produtos.module#ListaProdutosPageModule'
          }
        ]
      },

      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: '../usuarios/perfil/perfil.module#PerfilPageModule'
          }

        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      } 
    ]
  },

  {
    path: 'usuarios',
    children: [
      {
        path: 'enderecos',
        loadChildren: '../enderecos/lista-endereco/lista-endereco.module#ListaEnderecoPageModule'
      },

      {
        path: 'enderecos/novo',
        loadChildren: '../enderecos/form-endereco/form-endereco.module#FormEnderecoPageModule'
      },

      {
        path: 'enderecos/editar/:key',
        loadChildren: '../enderecos/form-endereco/form-endereco.module#FormEnderecoPageModule'
      },

      {
        path: 'sobre',
        loadChildren: '../usuarios/sobre/sobre.module#SobrePageModule'
      },

      { 
        path: 'lista-pedidos',
        loadChildren: '../pedidos/lista-pedido/lista-pedido.module#ListaPedidoPageModule'
      }

     
    ]
  },  

  {
    path: 'pedido',
    children: [
      {
        path: 'carrinho/novo-item/:key',
        loadChildren: '../pedidos/form-item-pedido/form-item-pedido.module#FormItemPedidoPageModule'
      },

      {
        path: 'carrinho',
        loadChildren: '../pedidos/lista-item-pedido/lista-item-pedido.module#ListaItemPedidoPageModule'
      },

      { path: 'form-pagamento',
      loadChildren: '../pedidos/form-pagamento/form-pagamento.module#FormPagamentoPageModule'
      },

      { path: 'produtos/:key',
        loadChildren: '../pedidos/lista-produto-pedido/lista-produto-pedido.module#ListaProdutoPedidoPageModule'

      },
    ]
  },


    {
      path: 'pedidos',
      children: [
          { 
          path: 'lista-pedidos',
          loadChildren: '../pedidos/lista-pedido/lista-pedido.module#ListaPedidoPageModule'
          }

      ]
    },

  
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  } 
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
