export default function nameValidator(value) {
  let name = value.replace(/[^A-Za-zА-Яа-яЁё]/g, "");
  return [name, !(name.length === 0)];
}
