//const prompt = require('prompt-sync')()
import promptSync from 'prompt-sync';

const prompt = promptSync();

import chalk from 'chalk'

const num1 = Number(prompt('1° Número:'))
const num2 = Number(prompt('2° Número:'))
const soma = num1 + num2

console.log(`A soma é ${chalk.green(soma)}`)