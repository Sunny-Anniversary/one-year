function Tile({
  title,
  description,
  firstPicture,
  secondPicture,
  firstWidth = "50%",
  secondWidth = "50%",
}) {
  return (
    <div className="tile">
      <h2>{title}</h2>
      <img src={firstPicture} alt="" width={firstWidth} />
      <img src={secondPicture} alt="" width={secondWidth} />
      <p>{description}</p>
    </div>
  );
}

export default Tile;
