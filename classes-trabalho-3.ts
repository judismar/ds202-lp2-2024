var SALARIO_MINIMO = 1412.00

class PessoaTrabalhadora
{
    protected nome: string;

    public constructor(nome: string)
    {
        this.nome = nome;
    }

    public getNome(): string
    {
        return this.nome;
    }
}

abstract class Funcionaria extends PessoaTrabalhadora
{
    protected salario: number = SALARIO_MINIMO;

    public getSalario(): number
    {
        return this.salario;
    }

    public getFuncao(): string
    {
        return "Pessoa funcionaria"
    }
}

class Eletricista extends Funcionaria
{
    
}

class Faxineira extends Funcionaria
{

}

class Vendedora extends Funcionaria
{

}

class Diretora extends Funcionaria
{
    
}
