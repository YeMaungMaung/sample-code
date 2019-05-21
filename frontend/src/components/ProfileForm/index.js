import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button, Form, Label, Input } from 'reactstrap';
import axios from 'axios';
import Store from '../../store/context';
import history from '../../helper/history';
import Alert from './MyAlert';
import ProfileFormStyle from './style';

const { REACT_APP_API_URL } = process.env;

export default function ProfileForm() {
  const [image, setImage] = useState('');
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');
  const [values, setValues] = useState({
    email: '',
    username: '',
    firstName: '',
    lastName: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('Update Success');

  const handleImageChange = e => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setImage(file);
      setImagePreviewUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const { state, dispatch } = useContext(Store);

  const {
    user: { id },
  } = state;

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await axios.get(`/users/${id}`);
        setValues({ ...data });
        if (data.avatar) {
          setImagePreviewUrl(`${REACT_APP_API_URL}/${data.avatar}`);
        }
      } catch (error) {
        if (error.response.status === 401) {
          dispatch({ type: 'LOGOUT', payload: { user: {} } });
          history.push('/login');
        }
      }
    }
    fetchUser();
  }, [dispatch, id]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.set('username', values.username);
      formData.set('email', values.email);
      formData.set('firstName', values.firstName);
      formData.set('lastName', values.lastName);
      formData.append('image', image);
      const { status } = await axios.patch(`/users/${id}`, formData);
      if (status !== 200) {
        setMessage('Update Failed!');
      }
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    } catch (error) {
      if (error.response.status === 401) {
        console.log(error.response);
        history.push('/login');
      }
    }
  }

  return (
    <ProfileFormStyle>
      <Container>
        {showAlert && <Alert message={message} />}
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <div className="form-group">
                <Label htmlFor="image">Profile</Label>
                <Input id="image" type="file" onChange={handleImageChange} />
                {imagePreviewUrl && (
                  <img
                    src={imagePreviewUrl}
                    alt="Profile"
                    width="200"
                    height="200"
                  />
                )}
              </div>

              <div className="form-group">
                <Label htmlFor="username">User Name</Label>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  value={values.username}
                  onChange={handleInputChange}
                  placeholder="User Name"
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="eamil"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                />
              </div>

              <div className="form-group">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="form-group no-margin">
                <Button className="btn-info btn-block">Update</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </ProfileFormStyle>
  );
}
