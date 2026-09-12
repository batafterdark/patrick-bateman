export default function Card(props) {
  const style = {
    backgroundImage: `url(${props.images.fixed_width_still.url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <div className="card"
      onClick={
        () => {
          props.onClick();
        }
      }
      style={style}>
    </div>
  );
}
