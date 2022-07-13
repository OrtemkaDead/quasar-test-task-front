export default function phoneValidator(value) {
  let x = value
    .replace(/\D/g, "")
    .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

  return (value = !x[2]
    ? x[1]
    : "(" +
      x[1] +
      ")" +
      x[2] +
      (x[3] ? "-" + x[3] : "") +
      (x[4] ? "-" + x[4] : ""));
}
