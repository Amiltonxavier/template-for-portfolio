import { ChevronRight } from "lucide-react";
import { Button, Description, Title } from "../../common/common";
import { Container, Image, Wrapper } from "./styled";
import { colorType } from "../../../types/common";
import { size } from "../../../data/constants/style";


export function Card() {
    return (
        <Container>
            <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <Wrapper>
                <Title color={colorType.dark} align='left'>Work name here</Title>
                <Description align="left">
                    Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
                </Description>
                <Button styles={{ w: size.fit, py: size.lg }}>Know more <ChevronRight /></Button>
            </Wrapper>
        </Container>
    )
}
