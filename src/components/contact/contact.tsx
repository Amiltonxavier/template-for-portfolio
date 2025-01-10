import { ChevronRight } from 'lucide-react'
import { colorType } from '../../types/common'
import { Button, Container, Description, MainWrapper, Title } from '../common/common'
import { Form, Input, Label, TextArea, WrapperForm } from './styled'
import { rounded, size } from '../../data/constants/style'

export function Contact() {
    return (
        <Container color={colorType.dark}>
            <MainWrapper>
                <Title color={colorType.light}>Get In Touch</Title>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br /> eiusmod tempor incididunt ut labore et dolore magna aliqua. </Description>
                <Form>
                    <WrapperForm>
                        <Label>Email</Label>
                        <Input placeholder='Please enter your email' />
                    </WrapperForm>
                    <WrapperForm>
                        <Label>Mobile</Label>
                        <Input placeholder='Please enter your email' />
                    </WrapperForm>
                    <WrapperForm>
                        <Label>Message</Label>
                        <TextArea placeholder='Enter your message' />
                    </WrapperForm>

                    <Button styles={{ rounded: rounded.base, w: size.full }}>
                        Submit <ChevronRight />
                    </Button>
                </Form>
            </MainWrapper>
        </Container>
    )
}
