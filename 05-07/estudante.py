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
