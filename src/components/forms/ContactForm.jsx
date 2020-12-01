import React from "react"
import styled from 'styled-components'
import Button from "../Button"

const ContactForm = () => {
  return (
    <form onSubmit={e => alert(JSON.stringify(e))} method="POST" id="contactForm">
      <Fields>
        <FieldWrap>
          <Label htmlFor='name'>Imie:</Label>
          <TextInput id='name' type='text'/>
        </FieldWrap>
        <FieldWrap>
          <Label htmlFor='email'>Email:</Label>
          <TextInput id='email' type='email'/>
        </FieldWrap>
        <FieldWrap>
          <Label htmlFor='content'>Treść:</Label>
          <TextAreaInput   width="80%" id='content' type='area'/>
        </FieldWrap>
      </Fields>
      <ButtonWrapper>
        <Button type="submit" withArrowIcon>Wyślij</Button>
      </ButtonWrapper>
    </form>
  )
}

const Fields = styled.div`
  margin: 18px 0 24px;
`;

const FieldWrap = styled.div`
  margin: 9px 0;
`;

const Label = styled.label`
  display: block;
  line-height: 1.5em;
`;

const TextInput = styled.input`
  width: 100%;
  min-height: 26px;
  border-radius:4px;
  border: 1px #e0e0e0 solid;
  width: 40%;
  padding: 0 5px;
`;

const TextAreaInput = styled.textarea`
  width: 100%;
  min-height: 26px;
  border-radius:4px;
  border: 1px #e0e0e0 solid;
  height: 150px;
  resize: none;
  padding: 10px 8px;
`;

const ButtonWrapper = styled.div`
  width: 100px;
  margin-bottom: 15px;
`;

export default ContactForm;
