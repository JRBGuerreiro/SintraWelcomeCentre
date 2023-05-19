import React, {useState, useRef, useEffect} from 'react'
import styled from "styled-components";
import {MdContactMail} from "react-icons/md"
import useForm from "../hooks/useForm"
import validateFormInfo from '../hooks/validateForm';
import { titles } from '../utility/text/titles';
import { formText } from '../utility/text/formText';
import { Language } from '../utility/types/types';

const Form = styled.form<{animateForm: boolean}> `
    transform: translateX(${({animateForm}) => (animateForm ? "0" : "-100vw")});
    transition: transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    width: 600px;
    margin: 0 0 30px 0;
    background-color: #dde4e4;
    display:flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        color: #333;
        font-size: 10pt;
        margin: 0;
    }

    @media (max-width: 767px) {
        width: 90%;
    }
`;

const DivWrapper = styled.div<{animate: boolean}> `
    transform: translateX(${({animate}) => (animate ? "0" : "-100vw")});
    transition: transform 1s;
    display: flex;
    justify-content: center;
    border-radius: 0 0 100px 100px;
`;

const HeaderTitle = styled.h1 `
    color: #333;
    font-size: 24pt;
    font-weight: 200;
    font-family: 'Raleway', sans-serif;
    font-weight: 200;
    margin: 20px 0 10px 0;
`;

const ContactTextWrapper = styled.div<{animateOpacityWrapper: boolean}> `
    opacity: ${({animateOpacityWrapper}) => (animateOpacityWrapper ? "1" : "0")};
    transition: opacity 1.2s;
    width: calc(600px * 0.6);
    padding: 12px 18px;
`;

const Icon = styled.div<{animateIcon: boolean}>`
    transform: translateX(${({animateIcon}) => (animateIcon ? "0" : "-100vw")});
    transition: transform 1s ease
`

const Paragraph = styled.p<{animateOpacityParagraph: boolean}> `
opacity: ${({animateOpacityParagraph}) => (animateOpacityParagraph ? "1" : "0")};
transition: opacity 1s;
transition-delay: 0.6s;
`

type FormDataProps = { language: Language }

const FormData = (props: FormDataProps) => {
    const {handleChange, values, handleSubmit, paragraph, formErrors} = useForm(validateFormInfo)
    //Animations whilst scrolling
    const [show, doShow] = useState({
        wrapperTitle: false,
        title: false,
        form: false,
        contactWrapper: false,
        icon: false,
        paragraph: false
    })

    const refWrapperTitle = useRef(null),
        refTitle = useRef(null),
        refForm = useRef(null),
        refContactTitleWrapper = useRef(null),
        refIcon = useRef(null),
        refParagraph = useRef(null)

    useEffect(() => {
        const topPos = (element: any) => element.getBoundingClientRect().top

        const titleWrapperPos = topPos(refWrapperTitle.current),
              formWrapperPos = topPos(refForm.current),
              contactWrapperPos = topPos(refContactTitleWrapper.current),
              iconPos = topPos(refIcon.current),
              paragraphPos = topPos(refParagraph.current)

        const scrollHandler = () => {
            const scrolPos = window.scrollY + window.innerHeight
            if(titleWrapperPos < scrolPos) {
                doShow(state => ({...state, wrapperTitle: true}))
                doShow(state => ({...state, title: true}))
            } 
            if(formWrapperPos < scrolPos) {
                doShow(state => ({...state, form: true}))
            }
            if(contactWrapperPos < scrolPos) {
                doShow(state => ({...state, contactWrapper: true}))
            }
            if(iconPos < scrolPos) {
                doShow(state => ({...state, icon: true}))
            }
            if(paragraphPos < scrolPos) {
                doShow(state => ({...state, paragraph: true}))
            }

        }
        window.addEventListener("scroll", scrollHandler)

        return () => {
            window.removeEventListener("scroll", scrollHandler)
        };
    }, [])

    ///Business logic for the form with custom hook
    
    return(
        <section className="formWrapper" id="contact">
            <DivWrapper animate={show.wrapperTitle} ref={refWrapperTitle}>
                <HeaderTitle ref={refTitle}>{titles[props.language].contactUs}</HeaderTitle>
            </DivWrapper>
            <Icon ref={refIcon} animateIcon={show.icon} className="iconWrapper">
                <MdContactMail className="form-icon"/>
            </Icon>
            <ContactTextWrapper animateOpacityWrapper={show.contactWrapper} ref={refContactTitleWrapper} className="contactTextWrapper">
                <Paragraph ref={refParagraph} animateOpacityParagraph={show.paragraph}>{formText[props.language].title}</Paragraph>
            </ContactTextWrapper>
            <Form animateForm={show.form} ref={refForm} name="contact-form">
                {formErrors.name && <p>{formErrors.name}</p>}
                <label htmlFor="name">First Name</label>
                <input type="text" value={values.name} name="name" onChange={handleChange} placeholder={formText[props.language].firstName} id="name"></input>
                {formErrors.lastName && <p>{formErrors.lastName}</p>}
                <label htmlFor="lastname">Last Name</label>
                <input type="text" value={values.lastName} name="lastName" onChange={handleChange} placeholder={formText[props.language].lastName} id="lastname"></input>
                {formErrors.email && <p>{formErrors.email}</p>}
                <label htmlFor="email">Email</label>
                <input type="text" value={values.email} name="email" onChange={handleChange} placeholder="E-mail" id="email"></input>
                {formErrors.textArea && <p>{formErrors.textArea}</p>}
                <label htmlFor="message">Message...</label>
                <textarea value={values.textArea} name="textArea" onChange={handleChange} placeholder={formText[props.language].message} id="message"></textarea>
                {paragraph ? paragraph : ""}
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </Form>
        </section>
    )
}

export default FormData