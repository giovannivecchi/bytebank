import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { transferencia } from 'src/app/models/transferencia.models';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private transferenciaList: any[];
  private url = 'http://localhost:3000/transferencias'

  constructor(private httpClient: HttpClient) {
    this.transferenciaList = []
  }

  get transferencias() {
    return this.transferenciaList
  }

  todas() {
    return this.httpClient.get(this.url)
  }

  adicionar(transferencia: transferencia): Observable<transferencia> {
    this.hidratar(transferencia)
    return this.httpClient.post<transferencia>(this.url, transferencia)
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date()
  }

}
