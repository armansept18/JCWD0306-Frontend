import CarouselImg from "../assets/carousel.jpg";

const Carousel = () => {
  return (
    <div className="carousel">
      <img src={CarouselImg} alt="" />
      <div className="subtitle">
        <h3 style={{ fontSize: "24px", margin: "10px 0px" }}>Chicago</h3>
        <p>
          <b>Thank you, Chicago - A night we won't forget.</b>
        </p>
      </div>
    </div>
  );
};

export default Carousel;
