import styled from 'styled-components';

const LoginStyle = styled.div`
  .login-page {
    font-size: 14px;
    margin: auto;
    width: 60%;
  }

  .login-page .card-wrapper {
    width: 400px;
    margin-top: 200px;
  }

  .login-page .card {
    border-color: transparent;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);
  }

  .login-page .card.fat {
    padding: 10px;
  }

  .login-page .card .card-title {
    margin-bottom: 30px;
  }

  .login-page .form-control {
    border-width: 2.3px;
  }

  .login-page .form-group label {
    width: 100%;
  }

  .login-page .btn.btn-block {
    padding: 12px 10px;
  }

  .login-page .margin-top20 {
    margin-top: 20px;
  }

  .login-page .no-margin {
    margin: 0;
  }

  .login-page .footer {
    margin: 40px 0;
    color: #888;
    text-align: center;
  }
`;

export default LoginStyle;
