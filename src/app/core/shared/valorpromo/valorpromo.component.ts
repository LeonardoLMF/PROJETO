import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-valorpromo',
  templateUrl: './valorpromo.component.html',
  styleUrls: ['./valorpromo.component.scss'],
})
export class ValorpromoComponent implements OnInit {

  @Input()
  precoPromocao:number;

  constructor() { }

  ngOnInit() {}

}
