export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw new Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const newView = new DataView(buffer, 0, length);
  newView.setInt8(position, value);

  return newView;
}
