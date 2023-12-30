import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function UserForm({ setBreadCrumbs }) {

    useEffect(() => {
        setBreadCrumbs([<Link to="/">Dashboard</Link>, <Link to="/User">User</Link>, `User Detail`])
        return (() => {
            setBreadCrumbs([])
        })
    }, [])


    return (
        <>
            user form
        </>
    )
}