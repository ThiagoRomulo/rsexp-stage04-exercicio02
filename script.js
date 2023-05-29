// Criação de variáveis
let students

// Entradas do usuário
students = [
  {
    inName: "Thiago",
    inTest1: 8,
    inTest2: 9,
  },
  {
    inName: "Romulo",
    inTest1: 5,
    inTest2: 4,
  },
  {
    inName: "Souza",
    inTest1: 6,
    inTest2: 10,
  },
]

// Processamento dos dados

function avg (students){
  // Criação de variáveis
  let average
  let msg1
  let msg2

  // Código da função
  average = (students.inTest1 + students.inTest2) / 2
  msg1 = `A média do aluno(a) ${students.inName} é: ${average}`
  msg2 = average >= 7 ?` Parabéns ${students.inName}! Você foi aprovado(a) no concurso!` : `Não foi dessa vez, ${students.inName}! Tente novamente!` 

  return (`${msg1} 
  ${msg2}`)
}

// Saída das informações
for(let student of students){
  let messageAvg = avg(student)
  alert(messageAvg)
}