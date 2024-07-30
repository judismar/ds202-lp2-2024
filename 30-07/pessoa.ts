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
