interface Atleta
{
    getNome(): string;
    atualizaNome(novoNome: string): void;
    getCpf(): number;
}

class AtletaNatacao implements Atleta
{
    private nome: string;
    private cpf: number;

    public constructor(nome: string, cpf: number)
    {
        this.nome = nome;
        this.cpf = cpf;
    }

    public getNome(): string
    {
        return this.nome;
    }

    public atualizaNome(novoNome: string): void
    {
        this.nome = novoNome;
    }

    public getCpf(): number
    {
        return this.cpf;
    }
}
