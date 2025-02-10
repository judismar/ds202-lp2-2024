interface Trabalhador
{
    SALARIO_MINIMO: number;
    getNome(): string;
    getSalario(): number;
    atualizaSalario(novoSalario: number): void;
}

abstract class Funcionario implements Trabalhador
{
    public readonly SALARIO_MINIMO = 1518.00;
    private nome: string;
    private salario: number;

    public constructor(salario: number, nome: string)
    {
        this.salario = salario;
        if(this.salario < this.SALARIO_MINIMO)
            this.salario = 2*this.SALARIO_MINIMO;
        this.nome = nome;
    }

    public getNome(): string
    {
        return this.nome;
    }

    public getSalario(): number
    {
        return this.salario;
    }

    public atualizaSalario(novoSalario: number): void
    {
        this.salario = novoSalario;
        if(this.salario < this.SALARIO_MINIMO)
            this.salario = 2*this.SALARIO_MINIMO;
    }

    public abstract descricao(): string;
}

class AtendenteLoja extends Funcionario
{
    public descricao(): string
    {
        return "Atendente"
    }
}

class GerenteLoja extends Funcionario
{
    public descricao(): string
    {
        return "Gerente"
    }
}

var listaFuncionarios: Funcionario[] = [];
listaFuncionarios.push(new AtendenteLoja(3000, "Hy"));
listaFuncionarios.push(new AtendenteLoja(3000, "Luiz"));
listaFuncionarios.push(new GerenteLoja(9000, "Paixão"));

for(var k = 0; k < listaFuncionarios.length; k++)
{
    console.log(listaFuncionarios[k].descricao());
}
