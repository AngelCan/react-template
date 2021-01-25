import React from 'react'
import { Form as BulmaForm, Button } from 'react-bulma-components'

const { Field, Control, Label, Input } = BulmaForm

const Form = () => {
    const [formValues, setFormValues] = React.useState({
        name: '',
        unitaryPrice: '',
        size: '',
        description: ''
    })
    //handle significa manipular
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formValues)
    }

    //e does it mean event
    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setFormValues({ ...formValues, [name]: value })
    }
    return (
        <form onSubmit={handleSubmit}>
            <Field>
                <Label>Name</Label>
                <Control>
                    <Input
                        placeholder="Name"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </Control>
            </Field>
            <Field>
                <Label>unitaryPrice</Label>
                <Control>
                    <Input
                        placeholder="unitaryPrice"
                        name="unitaryPrice"
                        value={formValues.unitaryPrice}
                        onChange={handleChange}
                    />
                </Control>
            </Field>
            <Field>
                <Label>size</Label>
                <Control>
                    <Input
                        placeholder="size"
                        name="size"
                        value={formValues.size}
                        onChange={handleChange}
                    />
                </Control>
            </Field>
            <Field>
                <Label>Description</Label>
                <Control>
                    <Input
                        placeholder="description"
                        name="description"
                        value={formValues.description}
                        onChange={handleChange}
                    />
                </Control>
            </Field>
            <Button type="submit" color="primary">Submit</Button>
        </form>
    )
}

export default Form