import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Sms} from '../models/sms/sms';
import {EnviarSmsService} from '../services/enviarSms/enviar-sms.service';
declare var $: any; // Importante no hacer: import $ from 'jquery' sino como se muestra ahi

@Component({
  selector: 'app-enviar-sms',
  templateUrl: './enviar-sms.component.html',
  styleUrls: ['./enviar-sms.component.css']
})
export class EnviarSmsComponent implements OnInit, AfterViewInit {

  sms = new Sms();

  constructor(
    private readonly enviarSmsService: EnviarSmsService
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $('.toast').toast();
  }
  /* Donde se cogen los valores? con ngModel se hace two-way binding y los valores de los atributos del objeto 'sms' se van actualizando a medida que el usuario llena los campos */
  enviarSms() {
    // console.log(this.sms);
    const smsEnviado$ = this.enviarSmsService.enviarSms(this.sms);
    smsEnviado$.subscribe(value => {
      console.log('Mensaje enviado');
      $('.toast').toast('show');
   }, error => {
      return error;
    });
  }
}
