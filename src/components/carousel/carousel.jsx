import "./carousel.css";

export const CarouselCard = (props) => {
  return (
      <img
        className='carousel-card'
        alt={props.src}
        src={props.src}
      />
  );
};

export const Carousel = (props) => {
  return (
    <div
      className="carousel-container"
      style={{
        height: props.height ? props.height : 300,
        // width: 'auto'
      }}
    >
      {props.children}
    </div>
  );
};
