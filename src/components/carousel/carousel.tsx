import Slider from "react-slick";
import { Card } from "./card/card";
import { Wrapper } from "./styled";


export function Carousel() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            <Wrapper>
                <Card />
            </Wrapper>
            <Wrapper>
                <Card />
            </Wrapper>
            <Wrapper>
                <Card />
            </Wrapper>
        </Slider>
    );
}