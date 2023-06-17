export default function PlaceImg({ place, index = 0, className = null }) {
  if (place.photos?.lengh) {
    return "";
  }
  if (!className) {
    className = "object-cover";
  }
  return (
    <img
      className="object-cover"
      src={"http://localhost:4000/uploads/" + place.photos[index]}
      alt=""
    />
  );
}
