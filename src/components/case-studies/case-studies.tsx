import { CONSTANTS } from "../../data/constants";
import { MainWrapper } from "../common/common";
import { StudiesCard } from "./studies-card/studies-card";
import { Container, Description, Title } from "./style";


export default function CaseStudies() {
    return (
        <Container>
            <MainWrapper>
                <Title>Case Studies</Title>
                <Description>Solving user & business problems since last 15+ years.<br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. </Description>
                {
                    CONSTANTS.Studies.map((item) => (
                        <StudiesCard item={item} key={item.id} />
                    ))
                }
            </MainWrapper>
        </Container>
    )
}
