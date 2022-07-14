export default function dateValidator(value) {
  let [year] = value?.split("-");

  return !(year <= 1860 || year >= new Date().getFullYear());
}
