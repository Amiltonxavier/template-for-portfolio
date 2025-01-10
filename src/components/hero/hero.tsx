import { ChevronRight } from "lucide-react";
import { ContainerPhoto, DescriptionWrapper, Grid, Section, Title } from './styled';
import { TechnologyCarousel } from "../TechnologyCarousel/TechnologyCarousel";
import { Button, Description, Img } from "../common/common";
import { size } from "../../data/constants/style";
import { CONSTANTS } from "../../data/constants";

const technologies = [
    { name: 'Javascript', icon: 'JS', color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: 'JS', color: '#38B2AC' },
    { name: 'Styled Components', icon: 'TS', color: '#DB7093' },
    { name: 'Redux', icon: 'JS', color: '#F7DF1E' },
    { name: 'Angular', icon: 'TS', color: '#3178C6' },
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: 'JS', color: '#38B2AC' },
    { name: 'Styled Components', icon: 'TS', color: '#DB7093' },
];

export function Hero() {
    return (
        <Section>
            <div>
                <Grid>
                    <ContainerPhoto>
                        <Img size={350}
                            src={CONSTANTS.profile.photo} alt="profile" />
                    </ContainerPhoto>
                    <DescriptionWrapper>
                        <Title>{CONSTANTS.profile.fullName}</Title>
                        <Description align="left">Intro text: Lorem ipsum dolor sit amet, consectetur<br />
                            adipiscing elit, sed do eiusmod tempor incididunt ut<br />
                            labore et dolore magna aliqua.
                        </Description>
                        <Button type="button" styles={{ w: size.fit }}>Let’s get started <ChevronRight color="#fff" /></Button>
                    </DescriptionWrapper>
                </Grid>
                <TechnologyCarousel duplicatedTech={technologies} />
            </div>
        </Section>
    )
}
