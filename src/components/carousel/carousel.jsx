import "./carousel.css";

export const CarouselCard = (props) => {
  return <img className="carousel-card" alt={props.src} src={props.src} />;
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
      {
        props.altComponent ? (
          <div className="alt-parent">
          <div className="alt-child">{props.altComponent}</div>
        </div>
        ) : (
      props.children
        )
      }
            {
        props.overlay ? (
          <div className="overlay-child">{props.overlay}</div>
        ) : (
      props.children
        )
      }
     
    </div>
  );
};
