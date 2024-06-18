import { Link } from "react-router-dom";
import LoginForm from "../components/fragments/LoginForm";
import AuthLayout from "../components/layouts/AuthLayouts";

const LoginPage = () => {
    return (
        <AuthLayout title="Login">
            <LoginForm />
            <p className="mt-6 font-regular text-center">Don't have an account? <Link to="/register" className="font-bold hover:text-blue-600">Register</Link></p>
        </AuthLayout>
    )
}

export default LoginPage;