import React from 'react'
import {Container, Section, Button} from 'react-bulma-components'

const Addbutton = ({onClick}) =>(
    <Section>
        <Container>
            <div className = "is-pulled-right">
                <Button color = "primary" onClick={onClick}>Add</Button>
            </div>
        </Container>
    </Section>
)

export default Addbutton