interface FormaGeometrica
{
    perimetro: () => number;
    area: () => number;
}

class Retangulo implements FormaGeometrica
{
    private altura: number;
    private largura: number;

    public constructor(altura: number, largura: number)
    {
        this.altura = altura;
        this.largura = largura;
    }

    public perimetro(): number
    {
        return (this.altura+this.largura)*2;
    }

    public area(): number
    {
        return this.altura*this.largura;
    }
}

class Circulo implements FormaGeometrica
{
    private pi: number;
    private raio: number;

    public constructor(raio: number)
    {
        this.pi = 3.14;
        this.raio = raio;
    }

    public perimetro(): number
    {
        return 2*this.pi*this.raio;
    }

    public area(): number
    {
        return this.pi*this.raio*this.raio;
    }
}

var r: Retangulo;
r = new Retangulo(4, 3);
var c: Circulo;
c = new Circulo(10);
console.log(c.perimetro(), c.area())

var x: FormaGeometrica[];
x =[new Retangulo(2, 5), new Circulo(4), new Circulo(90), new Retangulo(1, 1)];

console.log(x);
