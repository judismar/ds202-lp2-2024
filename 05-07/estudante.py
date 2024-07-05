class Estudante
{
    private nome: string;
    private notaFinal: number;
    private matricula: string;
    private certificacao: number;

    public constructor(nome: string, mat: string)
    {
        this.nome = nome;
        this.notaFinal = -1;
        this.matricula = mat;
        this.certificacao = 1;
    }
}

//Testes:
var estudante1: Estudante;
estudante1 = new Estudante("Moisés", "m09817153");
var estudante2: Estudante; 
estudante2 = new Estudante("Luís Eduardo", "m103657");
console.log(estudante1, estudante2);
