import Slider from "react-slick";
import "./Galeria.css";

const Galeria = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <section className="seccion">
      <h2>Galería</h2>
      <Slider {...settings}>
        <div>
          <img src="/assets/galeria/33.jpg" alt="obra 1" />
        </div>
        <div>
          <img src="/assets/galeria/22.jpg" alt="obra 2" />
        </div>
        <div>
          <img src="/assets/galeria/11.jpg" alt="obra 3" />
        </div>
      </Slider>
    </section>
  );
};

export default Galeria;
