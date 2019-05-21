import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Alert } from 'reactstrap';

const propTypes = { message: PropTypes.string.isRequired };

export default function MyAlert({ message }) {
  console.log(message);
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Alert color={message === 'Update Success' ? 'success' : 'danger'}>
            {message}
          </Alert>
        </Col>
      </Row>
    </React.Fragment>
  );
}

MyAlert.propTypes = propTypes;
