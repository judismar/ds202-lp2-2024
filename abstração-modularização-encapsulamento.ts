//Abstração: Simplificar; exemplo: temos o território do Brasil, mas podemos usar um mapa para nos localizar. Outro exemplo: Em LP1, usamos print() e randint() sem saber como são implementados, mas sim como são usados.

//Modularização: Dividir o programa em módulos: funções, arquivos com funções; classes, arquivos com classes etc.

//Encapsulamento: De forma resumida, interagir com objetos sem conhecer seu funcionamento interno. Ex: Microondas. Separação dos detalhes externos do objeto (que são acessíveis), de seus detalhes internos de implementação, que são abstraídos.

class Pessoa
{
        private nome: string;
        private cpf: number;

        public constructor(nome: string, cpf:number)
        {
            this.nome = nome;
            this.cpf = cpf;
        }

        public briga(p: Pessoa): void
        {
            console.log(this.nome + " dá um tapa em " + p.nome);
        }

        public elogia(p: Pessoa): void
        {
            console.log(this.nome + " fala bem de " + p.nome);
        }

        public getCpf(): number //CPf não pode ser alterado por ser private! Pode ser apenas acessado!
        {
            return this.cpf;
        }

        public getNome(): string
        {
            return this.nome;
        }

        public setNome(novoNome): void //Nome pode ser alterado.
        {
            this.nome = novoNome;
        }
}

//Tudo é herdado de Pessoa: atributos e métodos
class Estudante extends Pessoa
{
        private notaFinal: number;
        private matricula: string;

        public constructor(nome: string, cpf: number, mat: string)
        {
            super(nome, cpf);
            this.matricula = mat;
            this.notaFinal = 10;
        }
}

    //Tudo é herdado de Pessoa: atributos e métodos
class Docente extends Pessoa
{

}

var p1: Pessoa;
p1 = new Pessoa("Fernando Pessoa", 0);
var p2: Docente = new Docente("Judis", 133121);
var p3: Estudante = new Estudante("Dudu", 133213, "m00001");
var p4: Estudante = new Estudante("Zaza", 42341, "m00002");
var p5: Estudante = new Estudante("Serra", 233443, "m00003");
var p6: Estudante = new Estudante("Asafe", 4134352, "m00004");
var a: Pessoa[] = [];
a.push(p1);
a.push(p2);
a.push(p3);
a.push(p4);
a.push(p5);
p3.elogia(p2);
p2.elogia(p1);
