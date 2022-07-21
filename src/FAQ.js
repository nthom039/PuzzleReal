import { Card, Col, Row } from 'react-bootstrap'
import PuzzleHolder from './PuzzleHolder.jpeg'

function CanadaView() {
    return(
        <div>
            <h1>We get alot of question</h1>
            <h6>So we have alot of answers</h6>
            <Card className='faqCard'>
                <Card.Title>Where are you located</Card.Title>
                <Card.Text>My moms basement in the boonies of rural Ontario</Card.Text>
            </Card>
            <Card className='faqCard'>
                <Card.Title>How are they made</Card.Title>
                <Card.Text>With Magic</Card.Text>
            </Card>
            <Card className='faqCard'>
                <Card.Title>How long does it take to come in the mail</Card.Title>
                <Card.Text>It takes about 5-7 buissnes days, it all depends how quick the santa runs</Card.Text>
            </Card>
        </div>
    )
}

export default CanadaView