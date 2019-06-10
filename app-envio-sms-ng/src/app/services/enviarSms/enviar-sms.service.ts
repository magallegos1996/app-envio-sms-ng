import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sms} from '../../models/sms/sms';


@Injectable({
  providedIn: 'root'
})
export class EnviarSmsService {
  private url = 'http://localhost:4000/sms/enviarMensaje';

  constructor(private httpClient: HttpClient) { }
  enviarSms(sms): Observable<Sms> {
    const body = `{"from": "${sms.remitente}", "to":"${sms.destinatario}", "text":"${sms.mensaje}"}`;
    console.log(body);
    const httOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpClient.post<Sms>(this.url, body, httOptions);
  }
}
