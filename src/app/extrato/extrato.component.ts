import { Component, Input, OnInit } from '@angular/core';
import { TransferenciaService } from 'src/services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[];
  Transferencia: [];

  constructor(private service: TransferenciaService) { }



  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: []) => {
      console.table(transferencias)
      this.transferencias = transferencias;
    });

  }



}
