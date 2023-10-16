import { Helmet } from 'react-helmet';
import { LogForm } from '../../components/LogForm/LogForm';

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LogForm />
    </div>
  );
}

export default Login;