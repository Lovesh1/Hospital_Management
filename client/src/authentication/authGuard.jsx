
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const AuthGuard = (WrappedComponent) => {

    const GuardedComponent = (props) => {
        const [isAuthenticated, setAuthentaction] = useState(false);

        useEffect(() => {
            async function getToken() {
                const token = await localStorage.getItem("token");
                if (token) {
                    setAuthentaction(true);
                }
            }
            getToken();
        }, []);

        if (isAuthenticated) {

            return <WrappedComponent {...props} />;
        } else {
            return (
                <div className="flex items-center gap-6 p-5 h-screen">
                    <img src="../../forbidden.png" className="h-screen"></img>
                    <div className="flex flex-col items-center justify-center max-w-sm">
                        <h1 className="text-3xl font-semibold">SORRY!</h1>
                        <p className="text-slate-400 text-center mt-2 text-lg">You are not authorized to access this
                            page. please check your Login
                            credentials or contact the
                            administrator for access.
                        </p>
                        <p className="text-slate-400 mt-2 text-lg">Click to <Link to='/'><button className="px-4 rounded-md text-white bg-blue-950">Logout</button> </Link></p>

                    </div>
                </div>
            );
        }
    };

    return GuardedComponent;
};