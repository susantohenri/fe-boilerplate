import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound({ setBreadCrumbs }) {

    useEffect(() => {
        setBreadCrumbs([<Link to="/">Dashboard</Link>, `Page Not Found`])
        return (() => {
            setBreadCrumbs([])
        })
    }, [])

    return (
        <div className="error-page">
            <h2 className="headline text-warning"> 404</h2>
            <div className="error-content">
                <h3>Oops! Page not found.</h3>
                <p>
                    We could not find the page you were looking for.
                    Meanwhile, you may <Link to="/">return to dashboard</Link>
                </p>
            </div>
        </div>
    )
}