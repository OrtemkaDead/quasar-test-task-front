export default function dateValidator(value) {
  let year = value?.split("-")[0];

  return !(year <= 1860 || year >= new Date().getFullYear());
}
