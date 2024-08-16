class Veiculo
{
    private readonly placa: string;
    private readonly modelo: string;
    private readonly categoria: string;
    protected cor: string;
    protected tempoEstacionado: number;

    public constructor(p: string, m: string, cat: string, cor: string)
    {
        this.placa = p;
        this.modelo = m;
        this.categoria = cat;
        this.cor = cor;
    }

    public getPlaca()
    {
        return this.placa;
    }

    public getModelo()
    {
        return this.modelo;
    }

    public getCategoria()
    {
        return this.categoria;
    }
}

class Motocicleta extends Veiculo{}

class Scooter extends Motocicleta{}

class MotoStreet extends Motocicleta{}

var veiculos: Veiculo[] = [];
veiculos.push(new Scooter("ABC-1000", "", '', 'cinza'));
veiculos.push(new MotoStreet("ABD-1000", "", '', 'azul'));
veiculos.push(new Scooter("ABE-1000", "", '', 'vermelho'));
console.log(veiculos);
