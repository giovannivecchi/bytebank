import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { TransferenciaService } from "src/services/transferencia.service";
import { transferencia } from "../models/transferencia.models";


@Component({
    selector: 'app-novaTransferencia',
    templateUrl: './novatransferencia.component.html',
    styleUrls: ['./novaTransferencia.component.scss']
})

export class NovaTransferenciaComponent {
    @Output() transferencia = new EventEmitter<any>();


    constructor(private service: TransferenciaService, private router: Router) { }

    valor: number;
    destino: number;

    transferir() {
        console.log("Solicitada nova transferencia");
        const valorEmitir: transferencia = { valor: this.valor, destino: this.destino }
        this.service.adicionar(valorEmitir).subscribe(resultado => {
            console.log(resultado)
            this.limparCampos()
            this.router.navigateByUrl('extrato')
        }, error => {
            console.log(error)
        })
    }

    limparCampos() {
        this.valor = 0;
        this.destino = 0;
    }
}