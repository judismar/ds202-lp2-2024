abstract class Trabalhador
{
    private readonly nome: string;

    public constructor(nome: string)
    {
        this.nome = nome;
    }

    public getNome(): string
    {
        return this.nome;
    }

    public abstract tipoServico(): string;
}

class Atendente extends Trabalhador
{
    public tipoServico(): string
    {
        return "Faz atendimento";
    }
}
class Gerente extends Trabalhador
{
    public tipoServico(): string
    {
        return "Gerencia";
    }
}

class AtendenteDeStand extends Atendente
{
    public tipoServico(): string
    {
        return "Faz atendimento em stands";
    }
}

class ListaAtendentes
{
    private atendentes: Atendente[] = [];

    public insere(a: Atendente): void
    {
        this.atendentes.push(a);
    }

    public getAtendenteNoIndice(indice: number): Atendente
    {
        return this.atendentes[indice];
    }
    //O for não cai no trabalho, mas na prova sim!
    public print(): void
    {
        var s: string = "";
        for(var i = 0; i < this.atendentes.length; i++)
        {
            s += this.atendentes[i].getNome() + "\n";
        }
        console.log(s);
    }
}

var l: Trabalhador[];
l = [];
l.push(new Gerente("Moses"))
l.push(new Gerente("Zai"))
l.push(new Atendente("Judis"))
l.push(new Gerente("Tomás"))
l.push(new Atendente("Ygor"))
console.log(l);
