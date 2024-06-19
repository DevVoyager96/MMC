let numero1;
let numero2;
let resultados = 0;

console.log("Digite 2 números que deseja calcular o seu mmc: ");
process.stdin.on("data", function (data) {
  let input = +data.toString().trim();

  if (!numero1) {
    numero1 = input;
    let i;
    let maior;
  } else {
    numero2 = input;
    let i;

    if (numero1 > numero2) {
      i = numero1;
    } else {
      i = numero2;
      maior = numero2;
    }
    for (i; i <= numero1 * numero2; i++) {
      console.log(i);
      if (i % numero1 == 0 && i % numero2 == 0) {
        console.log("MMC: " + i);
        break;
      }
    }
    process.exit();
  }
});
