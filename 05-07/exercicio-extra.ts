//Crie uma função que retorna a média de um array de números.

function media(numeros: number[]): number
{
  var soma: number = 0;
  for(var i = 0; i < numeros.length; i++)
  {
    soma += numeros[i]
  }
  return soma/numeros.length
}
