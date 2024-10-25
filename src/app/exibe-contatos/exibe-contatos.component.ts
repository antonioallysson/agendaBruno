import { Component, OnInit } from '@angular/core';
import { Contato } from '../models/contato';
import { AgendaService } from '../models/agenda.service';

@Component({
  selector: 'app-exibe-contatos',
  templateUrl: './exibe-contatos.component.html',
  styleUrls: ['./exibe-contatos.component.css']
})
export class ExibeContatosComponent implements OnInit {
  contatos: Contato[] = [];

  constructor(private agendaService: AgendaService) {}

  ngOnInit(): void {
    this.contatos = this.agendaService.obterTodos();
  }
}
