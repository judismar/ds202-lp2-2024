abstract class Trabalhador
{
	public abstract print(): void;
}

//As classes abaixo são de um sistema de livraria física. Esse detalhe pode ser abstraído neste trabalho, de modo que funcionárias e funcionários sejam de qualquer tipo de empresa.
class Funcionario extends Trabalhador
{
	private nome: string;
	private salario: number;
	
	public constructor(nome: string, sal: number)
	{
        super();
		this.nome = nome;
		this.salario = sal;
	}

	public getNome(): string
	{
		return this.nome;
	}

	public getSalario(): number
	{
		return this.salario;
	}
}

class Assistente extends Funcionario
{
	private assistido: Funcionario;
	public constructor(nome: string, f: Funcionario, sal: number = 1200.00)
	{
		super(nome, sal);
		this.assistido = f;
	}
}

class Atendente extends Funcionario
{
	private codigoContratoAtendente: number; //número que pode ser arbitrário
	public constructor(nome: string, codigo: number, sal: number = 1500.00)
	{
		super(nome, sal);
		this.codigoContratoAtendente = codigo;
	}
}

class Gerente extends Funcionario
{
	private descricao: string; //Descrição do gerente: atencioso, rigoroso etc.
	public constructor(nome: string, descricao: string, sal: number = 7000.00)
	{
		super(nome, sal);
		this.descricao = descricao;
	}
}
