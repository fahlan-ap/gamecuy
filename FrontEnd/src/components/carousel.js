import React, { useState, useRef, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import bg1 from "../assets/image/GOW-logo.jpg";
import bg2 from "../assets/image/Ghost-Of-Tsushima-logo.jpg";
import bg3 from "../assets/image/RDR2-logo.jpg";

function CarouselComponent() {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        const carouselElement = carouselRef.current;

        if (!carouselElement) return;

        const handleScroll = (event) => {
            if (event.deltaY > 0) {
                setActiveIndex((prevIndex) => Math.min(prevIndex + 1, 2)); // Max index: 2
            } else {
                setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Min index: 0
            }
        };

        carouselElement.addEventListener("wheel", handleScroll);

        return () => {
            carouselElement.removeEventListener("wheel", handleScroll);
        };
    }, []);

    return (
        <div ref={carouselRef} style={{ overflow: "hidden" }}>
            <Carousel
                activeIndex={activeIndex}
                onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
            >
                <Carousel.Item>
                    <img className="d-block w-100" src={bg1} alt="First slide" />
                    <Carousel.Caption>
                        <h3>God Of War Ragnarök</h3>
                        <p>
                            dirilis untuk pertama kalinya dengan bentuk lintas generasi <br />
                            dalam seri God Of War, merupakan angsuran kesembilan dalam seri, <br />
                            yang kesembilan secara kronologis, sekaligus merupakan <br />
                            lanjutan dari God Of War tahun 2018.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={bg2} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Ghost Of Tsushima</h3>
                        <p>
                            video game dengan genre laga petualangan dengan <br />
                            perspektif orang ketiga yang mengontrol Jin Sakai, <br />
                            seorang samurai dalam misinya melindungi pulau Tsushima <br />
                            saat invasi Mongol pertama ke Jepang.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={bg3} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Red Dead Redemption 2</h3>
                        <p>
                            video game aksi-penjelajahan tahun 2018 yang dikembangkan <br />
                            dan diterbitkan oleh Rockstar Games, game ini adalah entri <br />
                            ketiga dalam seri Red Dead dan merupakan prekuel <br />
                            dari game Red Dead Redemption tahun 2010.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarouselComponent;