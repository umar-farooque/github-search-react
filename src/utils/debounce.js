export default function debounce(fn, delay = 1000) {
  let id;
  let data = [];
  return (...args) => {
    if (id) clearTimeout(id);
    id = setTimeout(async () => {
      data = await fn(...args);
    }, delay);
    return data;
  };
}
