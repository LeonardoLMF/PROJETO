import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../shared/usuarios.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user: any = {};
  key: string;
  userId: string;
  formImg: FormGroup;

  private file: File = null;
  imgUrl = '';
  filePath = '';

  constructor(private usuariosService: UsuariosService, private afAuth: AngularFireAuth,
              private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.user = this.usuariosService.getDadosUsuario();
    console.log(this.user);
    this.userId = this.afAuth.auth.currentUser.uid;
    console.log(this.userId);
    this.formularioImagem();
    console.log(this.formularioImagem);
  }

  sair() {
    this.usuariosService.logout()
    .then( () => {
      this.router.navigate(['/login']);
    });
  }


  formularioImagem() {
    this.key = null;
    this.formImg = this.formBuilder.group({
      img: ['']
  });
    this.file = null;
    this.imgUrl = '';
    this.filePath = '';
}

upload(event: any) {
  if (event.target.files.length) {
    this.file = event.target.files[0];
  } else {
    this.file = null;
  }
}



}
