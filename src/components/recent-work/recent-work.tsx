import { colorType } from '../../types/common'
import { Carousel } from '../carousel/carousel'
import { Container, Description, MainWrapper, Title } from '../common/common'

export function RecentWork() {
    return (
        <Container>
            <MainWrapper>
                <Title color={colorType.dark}>Recent Work</Title>
                <Description>
                    Solving user & business problems since last 15+ years<br />.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Description>

                <Carousel />
            </MainWrapper>
        </Container>
    )
}