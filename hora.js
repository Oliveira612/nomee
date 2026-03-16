// Valores Iniciais do dia

let valorPorHora = 50;
let horasTrabalhadas = 8;

console.log("--- Resumo do Expediente---");
console.log(`Horas Iniciais: ${horasTrabalhadas}`);

//No dia seguinte ele precisou sair uma hora mais cedo para ir ao médico
horasTrabalhadas--
console.log(`Após saída antecipada (horasTrabalhadas--): ${horasTrabalhadas}h`);

//Cálculo final
let taxaSistema = 15;
let pagamentoTotal = (horasTrabalhadas * valorPorHora) - taxaSistema;
