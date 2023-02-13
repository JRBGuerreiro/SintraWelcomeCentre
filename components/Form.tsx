import React, { useState, useRef, useEffect } from 'react';

const FormData = () => {
  /* const { handleChange, values, handleSubmit, paragraph, formErrors } =
    useForm(validateFormInfo); */
  //Animations whilst scrolling
  const [show, doShow] = useState({
    wrapperTitle: false,
    title: false,
    form: false,
    contactWrapper: false,
    icon: false,
    paragraph: false
  });

  const refWrapperTitle = useRef(null),
    refTitle = useRef(null),
    refForm = useRef(null),
    refContactTitleWrapper = useRef(null),
    refIcon = useRef(null),
    refParagraph = useRef(null);

  useEffect(() => {
    const topPos = (element: any) => element.getBoundingClientRect().top;

    const titleWrapperPos = topPos(refWrapperTitle.current),
      formWrapperPos = topPos(refForm.current),
      contactWrapperPos = topPos(refContactTitleWrapper.current),
      iconPos = topPos(refIcon.current),
      paragraphPos = topPos(refParagraph.current);

    const scrollHandler = () => {
      const scrolPos = window.scrollY + window.innerHeight;
      if (titleWrapperPos < scrolPos) {
        doShow((state) => ({ ...state, wrapperTitle: true }));
        doShow((state) => ({ ...state, title: true }));
      }
      if (formWrapperPos < scrolPos) {
        doShow((state) => ({ ...state, form: true }));
      }
      if (contactWrapperPos < scrolPos) {
        doShow((state) => ({ ...state, contactWrapper: true }));
      }
      if (iconPos < scrolPos) {
        doShow((state) => ({ ...state, icon: true }));
      }
      if (paragraphPos < scrolPos) {
        doShow((state) => ({ ...state, paragraph: true }));
      }
    };
    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  ///Business logic for the form with custom hook

  return (
    <section className="formWrapper" id="contact">
      {/* <DivWrapper animate={show.wrapperTitle} ref={refWrapperTitle}>
        <HeaderTitle animateOpacity={show.title} ref={refTitle}>
          {titles[language].contactUs}
        </HeaderTitle>
      </DivWrapper>
      <Icon ref={refIcon} animateIcon={show.icon} className="iconWrapper">
        <MdContactMail className="form-icon" />
      </Icon>
      <ContactTextWrapper
        animateOpacityWrapper={show.contactWrapper}
        ref={refContactTitleWrapper}
        className="contactTextWrapper"
      >
        <Paragraph ref={refParagraph} animateOpacityParagraph={show.paragraph}>
          {formText[language].title}
        </Paragraph>
      </ContactTextWrapper>
      <Form animateForm={show.form} ref={refForm} name="contact-form">
        {formErrors.name && <p>{formErrors.name}</p>}
        <label htmlFor="name">First Name</label>
        <input
          type="text"
          value={values.name}
          name="name"
          onChange={handleChange}
          placeholder={formText[language].firstName}
          id="name"
        ></input>
        {formErrors.lastName && <p>{formErrors.lastName}</p>}
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          value={values.lastName}
          name="lastName"
          onChange={handleChange}
          placeholder={formText[language].lastName}
          id="lastname"
        ></input>
        {formErrors.email && <p>{formErrors.email}</p>}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={values.email}
          name="email"
          onChange={handleChange}
          placeholder="E-mail"
          id="email"
        ></input>
        {formErrors.textArea && <p>{formErrors.textArea}</p>}
        <label htmlFor="message">Message...</label>
        <textarea
          type="textarea"
          styler="resize:none"
          value={values.textArea}
          name="textArea"
          onChange={handleChange}
          placeholder={formText[language].message}
          id="message"
        ></textarea>
        {paragraph}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </Form> */}
    </section>
  );
};

export default FormData;
