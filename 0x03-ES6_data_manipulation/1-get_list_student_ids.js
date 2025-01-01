export default function getListStudentsIds(arrayObjects) {
  if (!Array.isArray(arrayObjects)) return [];

  return arrayObjects.map((key) => key.id);
}
