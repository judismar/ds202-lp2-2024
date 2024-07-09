class Estudante
{
    //Atributos:
    private nome: string;
    private matricula: string;
    private notas: number[];
    private certAtual: number;

    //Métodos:
    public constructor(nome: string, mat: string)
    {
        this.nome = nome;
        this.matricula = mat;
        this.notas = [0, 0, 0]
        this.certAtual = 1;
    }

    public registraProva(nota: number): void
    {
        if(this.certAtual > 3)
        {
            console.log("Acabaram as 3 certificações!!")
        }
        else
        {
            this.notas[this.certAtual-1] = nota;
            this.certAtual ++;
        }
    }

    public printEstudante(): void
    {
        console.log(this.nome, this.matricula, this.notas[0], this.notas[1], this.notas[2]);
        //Pedido de Moisés (como fazer for):
        /*for(var i = 0; i < this.notas.length; i++)
        {
            console.log(this.notas[i]);
        }*/
    }
}

var e1: Estudante;
e1 = new Estudante("Luiz Felipe", "m019361");
var e2: Estudante;
e2 = new Estudante("Moisés E.", "m121257");
e1.registraProva(9.7);
e1.registraProva(10);
e1.registraProva(8.3);
e1.printEstudante();
