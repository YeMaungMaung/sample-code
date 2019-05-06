import React, {useState} from 'react';
import { Container, Row, Col, Button, Form, Label, Input } from 'reactstrap';
import axios from 'axios';

export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { REACT_APP_API_URL } = process.env;
      await axios.post(`${REACT_APP_API_URL}/v1/login`, {
        email,
        password,
      });
    } catch (error) {
      if (error.response.status === 401) {
        console.log(error.response)
      }
    }
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <div className="form-group">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="eamil"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  autoFocus
                />
              </div>

              <div className="form-group">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  data-eye
                />
              </div>
              <div className="form-group no-margin">
                <Button className="btn-info btn-block">Login</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}