export default function cleanSet(set, startString) {
  let res = '';
  if (!startString || !startString) return res;
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      res += `${value.slice(startString.length)}-`;
    }
  });

  return res.slice(0, res.length, -1);
}
