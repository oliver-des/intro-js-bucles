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