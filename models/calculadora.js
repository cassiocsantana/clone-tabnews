function somar(numero1, numero2) {
  if (typeof numero1 === "string") {
    return "error";
  }

  if (typeof numero2 === "string") {
    return "error";
  }

  return numero1 + numero2;
}

exports.somar = somar;
