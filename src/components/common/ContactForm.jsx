"use client";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "@emotion/styled";

const FormWrapper = styled(Container)`
  background-color: #f3f3fe;
  border-radius: 10px;
  padding: 2rem;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const FormHeading = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 1.5rem;
`;

const StyledInput = styled(Form.Control)`
  border-radius: 10px;
  padding: 10px 20px;
  border: none;
  margin-bottom: 1rem;
`;

const StyledTextArea = styled(Form.Control)`
  border-radius: 10px;
  padding: 10px 20px;
  border: none;
  height: 150px; // Set a fixed height for the textarea
  margin-bottom: 1rem;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #4b3f6b;
  border: none;
  &:hover {
    background-color: #3a3153;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem; // Large font size for the title
  margin-bottom: 0.5rem;
  font-weight: 600;

  @media (min-width: 992px) {
    color: #454545;
  }
`;

const P = styled.p`
  font-weight: 400;
  color: #454545;
`;

const SubmissionMessage = styled.div`
  text-align: center;
  color: #333;
  margin-top: 1rem;
`;
const Section = styled.section``;

const ContactForm = () => {
  return (
    <Section>
      <Container>
        <Row className="mt-4">
          <Col xs={12} lg={6}>
            <Title>Contact us</Title>
            <P>
              Got questions, feedback, or want to know more? We&apos;re here to
              help. Fill out the form below, and we&apos;ll get back to you as
              soon as we can. Let&apos;s make the earth greener together!
            </P>
          </Col>
          <Col>
            <FormWrapper>
              <FormHeading>Get In Touch</FormHeading>
              <Form>
                <Row>
                  <Col sm={12} md={6}>
                    <StyledInput type="text" placeholder="First Name" />
                  </Col>
                  <Col sm={12} md={6}>
                    <StyledInput type="text" placeholder="Last Name" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={6}>
                    <StyledInput type="email" placeholder="Email" />
                  </Col>
                  <Col sm={12} md={6}>
                    <StyledInput type="tel" placeholder="Phone" />
                  </Col>
                </Row>
                <StyledInput type="text" placeholder="Address" />
                <StyledTextArea
                  as="textarea"
                  placeholder="Type your message here"
                />
                <SubmitButton type="submit">Submit</SubmitButton>
                <SubmissionMessage>Thanks for submitting!</SubmissionMessage>
              </Form>
            </FormWrapper>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default ContactForm;
