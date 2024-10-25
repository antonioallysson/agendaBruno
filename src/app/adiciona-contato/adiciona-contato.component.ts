import { Component } from '@angular/core';
import { Contato, TipoContato } from '../models/contato';
import { AgendaService } from '../agenda.service';


@Component({
  selector: 'app-adiciona-contato',
  templateUrl: './adiciona-contato.component.html',
  styleUrls: ['./adiciona-contato.component.css']
})
export class AdicionaContatoComponent {
  nome: string = '';
  telefone: string = '';
  email: string = '';
  aniversario: string = '';
  tipo: TipoContato = TipoContato.Amigo;
  favorito: boolean = false;

  contatos: Contato[] = [];
  tiposContato = Object.values(TipoContato);

  adicionarContato() {
    const novoContato = new Contato(
      this.nome,
      this.telefone,
      this.email,
      this.aniversario,
      this.tipo,
      this.favorito
    );

    this.contatos.push(novoContato);

    
    this.nome = '';
    this.telefone = '';
    this.email = '';
    this.aniversario = '';
    this.tipo = TipoContato.Amigo;
    this.favorito = false;
  }
}
