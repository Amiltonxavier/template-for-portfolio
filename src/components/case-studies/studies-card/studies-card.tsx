import { Img, Wrapper, Badge, Card, Header } from "./style";
import caseImg from "../../../assets/maskgroup.png"
import { ChevronRight } from "lucide-react";
import type { StudiesProps } from "../../../types/studies";
import { Button, Description, Title } from "../../common/common";
import { colorType } from "../../../types/common";

type Props = {
    item: StudiesProps
}
export function StudiesCard({ item }: Props) {
    return (
        <Card>
            {item.position === 'left' ? <>
                <Wrapper>
                    <Header>
                        <Badge color={item.color}>{item.tag}</Badge>
                    </Header>
                    <Title color={colorType.dark}>Work name here</Title>
                    <Description align="left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </Description>
                    <Button styles={{ bg: item.color }} type="button" color={item.color}>
                        View case study <ChevronRight size={20} color="#fff" />
                    </Button>
                </Wrapper>
                <Img src={caseImg} alt="" position={item.position} />
            </>
                :
                <>
                    <Img src={item.img} alt="" position={item.position} />
                    <Wrapper>
                        <Header>
                            <Badge color={item.color}>{item.tag}</Badge>
                        </Header>
                        <Title color={colorType.dark}>Work name here</Title>
                        <Description align="left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            sed do eiusmod tempor incididunt ut labore et dolore magna.
                        </Description>
                        <Button type="button" color={item.color}>
                            View case study <ChevronRight size={20} color="#fff" />
                        </Button>
                    </Wrapper>
                </>
            }
        </Card>
    )
}
