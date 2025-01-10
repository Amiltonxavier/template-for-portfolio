import { Card } from './style'
import { Description, Img } from '../../common/common';
import uppercaseCommas from "../../../assets/uppercase-commas.svg"

export function TestimonialsCard() {
    return (
        <Card>
            <span>
                <img src={uppercaseCommas} alt="" />
            </span>
            <Description align='left'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Description>
            <div>
                <Img size={50} alt='profile' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                <h4>John Due</h4>
            </div>
        </Card>
    )
}
