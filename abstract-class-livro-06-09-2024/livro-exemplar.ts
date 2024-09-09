abstract class Livro
{
    private readonly titulo: string;
    private readonly genero: string;

    public constructor(t: string, g: string)
    {
        this.titulo = t;
        this.genero = g;
    }
    public getTitulo(): string
    {
        return this.titulo;
    }
    public getGenero(): string
    {
        return this.genero;
    }
}

class Exemplar extends Livro
{
    private valor: number;
    private qtd: number;

    public constructor(titulo: string, gen: string, val:number = 50, qtd: number = 1)
    {
        super(titulo, gen);
        this.valor = val;
        this.qtd = qtd;
    }

    public getPreco(): number
    {
        return this.valor;
    }
    public getQtd(): number
    {
        return this.qtd;
    }
    public setValor(novoVal: number): void
    {
        this.valor = novoVal;
    }
    public incrementaQtd(incremento: number = 1): number
    {
        this.qtd += incremento;
        return this.qtd;
    }
    public decrementaQtd(decremento: number = 1): number
    {
        this.qtd -= decremento;
        return this.qtd;
    }

}

var dc: Exemplar = new Exemplar("La Divina Commedia", "Poema Épico", 250, 10);
var etica: Exemplar = new Exemplar("Ética", "Filosofia", 90, 10);
var fugitiva: Exemplar = new Exemplar("Le Fugitive", "Literatura Internacional", 80, 20);

var abm: Exemplar = new Exemplar("Além do bem e do mal", "Filosofia");
var macbeth: Exemplar = new Exemplar("Macbeth", "Poesia Dramática");
var banquete: Exemplar = new Exemplar("O Banquete", "Filosofia");
