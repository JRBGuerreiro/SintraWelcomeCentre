import {useState} from 'react'
import emailjs from "emailjs-com"
import validateFormInfo from './validateForm'

const useForm = () => {
    const [values, setValues] = useState({
        name: "",
        lastName: "",
        email:"",
        textArea: ""
    })

    const [formErrors, setFormErrors] = useState({})

    const handleChange = event => {
        const {name, value} = event.target

        setValues({
            ...values,
            [name]:value
        })
    }

    const [isSubmitted, setSubmitted] = useState(false)
    const [isError, setError] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        const errors = validateFormInfo(values)
        setFormErrors(errors)
        
        ///only submit if we have no errors
        if(errors
            && Object.keys(errors).length === 0
            && Object.getPrototypeOf(errors) === Object.prototype) {
                const templateParameters = {
                    from_name: values.name + " " + values.lastName,
                    to_name: "info@sintrawelcomecentre.com",
                    message: values.textArea,
                    email: values.email,
                }
                
                const name = document.getElementById("name")
                const lastname = document.getElementById("lastname")
                const email = document.getElementById("email")
                const message = document.getElementById("message")

            emailjs
            .send("default_service", "template_1oixrtt", templateParameters, "user_nibGXcWm9DhkdSVEaAZHw")
            .then((result) => {
                console.log(result)
                setSubmitted({isSubmitted:true})
                name.value = ""
                lastname.value = ""
                email.value = ""
                message.value = ""
            }, (error) => {
                setError({isError:true})
            })
        }
        
    }

    let paragraph

    if(isSubmitted) {
        paragraph = <p>Message has been sent!</p>
    } else if (isError) {
        paragraph = <p>There has been an error submitting your message. Please try again</p>
    } else {
        paragraph = null
    }
    
    return {handleChange, values, handleSubmit, paragraph, formErrors}
}

export default useForm