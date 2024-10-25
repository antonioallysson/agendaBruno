import { Injectable } from '@angular/core';
import { Contato } from './models/contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private contatos: Contato[] = [];

  adicionar(contato: Contato): boolean {
    if (!this.existe(contato)) {
      this.contatos.push(contato);
      return true;
    }
    return false;
  }

  existe(contato: Contato): boolean {
    return this.contatos.some(
      (c) => c.email === contato.email && c.telefone === contato.telefone
    );
  }

  obterTodos(): Contato[] {
    return [...this.contatos];
  }

  obterFavoritos(): Contato[] {
    return this.contatos.filter((c) => c.favorito);
  }

  obterContatoPorNome(nome: string): Contato | undefined {
    return this.contatos.find(
      (c) => c.nome.trim().toLowerCase() === nome.trim().toLowerCase()
    );
  }
}
