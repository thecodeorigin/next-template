export const jsonSafeParse = (str) => {
  try {
    if (typeof str !== 'string') return false
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}