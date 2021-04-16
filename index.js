/*
Este problema foi utilizado em 259 Dojo(s).

Dado um cheque com o seu valor por extenso, desenvolva um programa que retorne o seu valor numérico.

Por exemplo se informarmos "dois mil quinhentos e vinte e três reais e dezoito centavos", o seu programa deve retornar "2523,18"
*/

const dictionaryUnidade = {
  'zero': 0,
  'um': 1,
  'dois': 2,
  'tres': 3,
  'quatro': 4,
  'cinco': 5,
  'seis': 6,
  'sete': 7,
  'oito': 8,
  'nove': 9,
}

const dictionaryDezena = {
  'dez': 10,
  'onze': 11,
  'doze': 12,
  'treze': 13,
  'catorze': 14,
  'quinze': 15,
  'dezesseis': 16,
  'dezessete': 17,
  'desoito': 18,
  'dezenove': 19
} 

let inputNumber = 'dois mil quinhentos e vinte e três reais e dezoito centavos';
let splitString = split.inputNumber(' ');


