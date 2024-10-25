export enum TipoContato {
    Amigo = 'Amigo(a)',
    Familia = 'Família',
    Trabalho = 'Trabalho',
    Outro = 'Outro'
  }
  
  export class Contato {
    public nome: string;
    public telefone: string;
    public email: string;
    public aniversario: string;
    public tipo: TipoContato;
    public favorito: boolean;  // Novo atributo
  
    constructor(nome: string, telefone: string, email: string, aniversario: string, tipo: TipoContato, favorito: boolean) {
      this.nome = nome;
      this.telefone = telefone;
      this.email = email;
      this.aniversario = aniversario;
      this.tipo = tipo;
      this.favorito = favorito
    }
  
    
    public getNome(): string {
      return this.nome;
    }
  
    public setNome(nome: string): void {
      this.nome = nome;
    }
  
    public getTelefone(): string {
      return this.telefone;
    }
  
    public setTelefone(telefone: string): void {
      this.telefone = telefone;
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public setEmail(email: string): void {
      this.email = email;
    }
  
    public getAniversario(): string {
      return this.aniversario;
    }
  
    public setAniversario(aniversario: string): void {
      this.aniversario = aniversario;
    }
  
    public getTipo(): TipoContato {
      return this.tipo;
    }
  
    public setTipo(tipo: TipoContato): void {
      this.tipo = tipo;
    }
    public getFavorito(): boolean {
      return this.favorito
    }
  }
  