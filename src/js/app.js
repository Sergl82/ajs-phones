export default class Validator {
  static numberPhone(num) {
    const result = num.replace(/\D/g, '');
    return `+${result.replace(/^8(\d{10})$/, '7$1')}`;
  }
}
