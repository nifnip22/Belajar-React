import LoginForm from '../components/fragments/LoginForm';
import AuthLayout from '../components/layouts/AuthLayouts';

const LoginPage = () => {
	return (
		<AuthLayout title='Login' type="login">
			<LoginForm />
		</AuthLayout>
	);
};

export default LoginPage;
