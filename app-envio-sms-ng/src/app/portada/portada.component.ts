import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  irAEnviarMensaje() {
    console.log('HIT ME');
    this.router.navigate(['/enviarSms']);
  }

}
