export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);
  }

  const num = weakMap.get(endpoint);

  if (num >= 5) throw new Error('Endpoint load is high');
}
