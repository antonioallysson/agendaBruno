import { Component, OnInit } from '@angular/core';
import { Contato } from '../models/contato';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-exibe-favoritos',
  templateUrl: './exibe-favoritos.component.html',
  styleUrls: ['./exibe-favoritos.component.css'],
})
export class ExibeFavoritosComponent implements OnInit {
  favoritos: Contato[] = [];

  constructor(private agendaService: AgendaService) {}

  ngOnInit(): void {
    this.favoritos = this.agendaService.obterFavoritos();
  }
}
