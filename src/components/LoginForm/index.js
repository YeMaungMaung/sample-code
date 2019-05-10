import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button, Form, Label, Input } from 'reactstrap';
import axios from 'axios';
import Store from '../../store/context';
import history from '../../helper/history';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    if (state.isAuth) history.push('/');
  }, [state.isAuth]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post('/login', {
        email,
        password,
      });
      dispatch({ type: 'LOGIN', payload: data });
      history.push('/');
    } catch (error) {
      if (error.response.status !== 200) {
        setError(error.response.data.message);
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
              <div className="form-group">
                <p className="text-danger text-error">{error}</p>
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
