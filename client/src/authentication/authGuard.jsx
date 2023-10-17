
import { useEffect, useState } from "react";

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
                <>
                    <h1>UNAUTHORIZED ACCESS</h1>
                </>
            );
        }
    };

    return GuardedComponent;
};