import { FC } from "react";
import Carousel from "components/forecast/carousel";
import { CarouselCardData } from "pages/Forecast/types/CarouselCardData";
import { Direction } from "models/enums/direction";

interface CarousalContainerProps {
    selectWeatherCard: (date: string) => void;
    carouselLeftArrowDisabled: boolean;
    carouselRightArrowDisabled: boolean;
    weatherList: CarouselCardData[];
    carouselRightArrowClicked: () => void;
    carouselLeftArrowClicked: () => void;
}

const CarousalContainer: FC<CarousalContainerProps> = ({
    selectWeatherCard,
    carouselLeftArrowDisabled,
    carouselRightArrowDisabled,
    weatherList,
    carouselRightArrowClicked,
    carouselLeftArrowClicked
}) => {

    const handleCarouselButtonClick = (direction: Direction) => {
        direction === Direction.right ? carouselRightArrowClicked() : carouselLeftArrowClicked();
    };

    return (
        <Carousel
            onCardClick={(date: string) => selectWeatherCard(date)}
            rightButtonDisabled={carouselRightArrowDisabled}
            leftButtonDisabled={carouselLeftArrowDisabled}
            weatherList={weatherList}
            onCarouselButtonClick={handleCarouselButtonClick}
        />
    )
};

export default CarousalContainer;
