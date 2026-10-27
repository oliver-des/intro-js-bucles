// Ejercicio 1
let suma = 0


for (let i = 1; i <= 100; i++) {
   suma += i
}
console.log(`La suma de todos los numeros es ${suma}`)

// Ejercicio 2
for (let i = 1; i <= 50; i++) {
   //Cada vez que sea par lo imprimo en la consola
   if (i % 2 == 0) // si cada numero dividido entre dos el resto es 0.... (%) saca el resto  (=) es solo para asignar (==) me dice que es igual a
   {
      console.log(`El número ${i} es par`)
   }
}


// Ejercicio 3 
let resp = parseInt(prompt("Escribe un numero")) //variable con prompt, parseInt para datarlo como numero

for (let i = 0; i <= 10; i++) // bucle for porque es un numero determinado de veces que se va a repetir
{
   let resultado = resp * i //creamos variable (resultado) que almacenará la multiplicación (si la metemos fuera del bucle = undefined)
   console.log(`${resp} x ${i} = ${resultado}`) //imprimimos en la consola, al estar dentro del bucle se imprimen todas las multiplicaciones
}
