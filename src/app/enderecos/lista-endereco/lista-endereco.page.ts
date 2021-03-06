
import { Component, OnInit, Input } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { EnderecoService } from 'appfinal/src/app/enderecos/shared/endereco.service';
import { ToastService } from 'appfinal/src/app/core/shared/toast.service';
import { AlertService } from 'appfinal/src/app/core/shared/alert.service';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.page.html',
  styleUrls: ['./lista-endereco.page.scss'],
})
export class ListaEnderecoPage implements OnInit {


   enderecos: Observable<any[]>;
   @Input()
   
   selecionarEndereco: boolean = false;


  constructor(private enderecoService: EnderecoService,
      private alert: AlertService,
      private toast: ToastService,
      private router: Router,
      private modalController: ModalController)

    {}

  ngOnInit(){

   this.enderecos = this.enderecoService.getAll();

  }

  getEnderecoText(endereco: any){
    let enderecoText: '';
    enderecoText = endereco.logradouro;
    enderecoText += ', ' + endereco.numero;
    if (endereco.complemento){
      enderecoText += ', ' + endereco.complemento;
    }
    enderecoText += ' - ' + endereco.bairro;
    enderecoText += ' - ' + endereco.cep;
    return enderecoText;
  }

  setEnderecoSelecionado(endereco: any){

  if(this.selecionarEndereco) {
    const enderecoText = this.getEnderecoText(endereco);
    this.modalController.dismiss({ endereco: enderecoText });
       }

   }

  remover(endereco: any){

      this.alert.ShowConfirmaExclusao(endereco.logradouro+', '+endereco.numero, () =>{
      this.enderecoService.remove(endereco.key)
       .then( () =>{
       this.toast.show('Endereço removido com sucesso !!');

       })
    })

  }
  
  editar(key: string){

    this.router.navigate (['/usuarios/enderecos/editar', key])

  }

}
