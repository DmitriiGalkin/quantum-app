import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../tools/hooks";

export const HomeLayout = () => {
    const { user } = useAuth();
    const outlet = useOutlet();

    if (user) {
        return <Navigate to="/dashboard/profile" replace />;
    }

    return (
        <div>
            {outlet}
        </div>
    );
};