export default function nameValidator(value) {
  let name = value.replace(/[^А-Яа-яЁё]/g, "");
  return [name, !(name.length === 0)];
}
