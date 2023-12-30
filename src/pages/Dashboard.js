import { Link } from "react-router-dom"

export default function Dashboard() {
    const menus = [
        { icon: `fas fa-user`, title: `User`, route: `/User` }
    ]

    return (
        <>
            {menus.map(menu => {
                return (
                    <div className="col-sm-2">
                        <Link to={menu.route}>
                            <div className="info-box">
                                <span className="info-box-icon bg-info"><i className={menu.icon}></i></span>
                                <div className="info-box-content">
                                    <span className="info-box-text">{menu.title}</span>
                                    <span className="info-box-number"></span>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}