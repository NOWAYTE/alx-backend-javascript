import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const array = [19, 20, 34];

  array.forEach((i) => {
    const classRoom = new ClassRoom(i);
    console.log(classRoom);
  });
}
