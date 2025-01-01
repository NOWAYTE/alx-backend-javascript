export default function getStudentsIdsSum(arrayObjects) {
  const array = arrayObjects.map((key) => key.id);

  return array.reduce((acc, curr) => acc + curr);
}
