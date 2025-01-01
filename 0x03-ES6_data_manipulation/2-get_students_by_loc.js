export default function getStudentsByLocation(arrayObjects, city) {
  return arrayObjects.filter((key) => key.location === city);
}
