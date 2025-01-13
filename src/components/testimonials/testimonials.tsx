import { colorType } from "../../types/common";
import { Container, Description, MainWrapper, Title } from "../common/common";
import { Wrapper } from "./style";
import { TestimonialsCard } from "./testimonials-card/testimonials-card";

export function Testimonials() {
    return (
        <Container color={colorType.dark}>
            <MainWrapper>
                <Title color="white">Testimonials</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. </Description>
                <Wrapper>
                    <TestimonialsCard />
                    <TestimonialsCard />
                    <TestimonialsCard />
                    <TestimonialsCard />
                </Wrapper>
            </MainWrapper>
        </Container>
    )
}
