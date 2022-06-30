import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default function About () {
    return (
        <Container>
            <Card border='info'>
                <Card.Header mb-0 card-body>About Us</Card.Header>
                <Card.Body>
                    <Card.Text>When returning from a spritual journey through the Earth, Monty McMansions decided to dedicate some of his fortune to offering spritiual wellness for others back in his hometown.</Card.Text>
                    <Card.Text>As the heir of the industrious McMansions fortune, Monty was never satisfied with the material wealth that provided him everything he desired.</Card.Text>
                    <Card.Text>Monty decided to travel around the world to find peace and happiness</Card.Text>
                </Card.Body>
                <Card.Img style={{'width': '50%', 'margin': '0 auto'}} alt='hotsprings' variant='bottom' src='hotsprings.jpg' />
            </Card>
        </Container>
    )
}
