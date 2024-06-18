import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError() as { statusText?: string, message?: string };

    return (
        <>
            <div className='flex flex-col space-y-4 justify-center bg-gradient-to-r from-gray-50 via-blue-100 to-blue-50 min-h-screen items-center'>
                <p className="font-bold text-gray-400 text-8xl">404</p>
                <p className="font-bold text-gray-400 text-2xl">Page is {error.statusText || error.message}</p>
            </div>
        </>
    )
}

export default ErrorPage;