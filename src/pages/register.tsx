import { Link } from "react-router-dom";
import RegisterForm from "../components/fragments/RegisterForm";
import AuthLayout from "../components/layouts/AuthLayouts";

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <RegisterForm />
            <p className="mt-6 font-regular text-center">Already have an account? <Link to="/login" className="font-bold hover:text-blue-600">Login</Link></p>
        </AuthLayout>
    )
}

export default RegisterPage;