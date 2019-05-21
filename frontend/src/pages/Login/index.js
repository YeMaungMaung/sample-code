import React from 'react';
import LoginStyle from './styles';
import LoginForm from '../../components/LoginForm';

export default function Login() {
  return (
    <LoginStyle>
      <section className="login-page h-100">
        <div className="container h-100">
          <div className="row justify-content-md-center h-100">
            <div className="card-wrapper">
              <div className="card fat">
                <div className="card-body">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LoginStyle>
  );
}
