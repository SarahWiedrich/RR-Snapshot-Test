import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { useState, useEffect } from 'react'

export default function About () {
    const [gitHubName, setGitHubName] = useState('')

    useEffect(() => {
      fetch('https://api.github.com/users/SarahWiedrich')
      .then(res => res.json())
      .then(data => {
        setGitHubName(data.name)
      })
    }, [])

    return (
        <Container>
            <Card border='info'>
                <Card.Header mb-0 card-body>About Me</Card.Header>
                <Card.Body>
                    <Card.Text>GitHub Username: {gitHubName}</Card.Text>
                    <Card.Text>My photo</Card.Text>
                    <Card.Text>Blurb about me</Card.Text>
                </Card.Body>
                <Card.Img style={{'width': '50%', 'margin': '0 auto'}} alt='hotsprings' variant='bottom' src='hotsprings.jpg' />
            </Card>
        </Container>
    )
}
