import { useEffect, useState } from "react"

export default function Breadcrumbs({ breadCrumbs }) {

    const [pageTitle, setPageTitle] = useState()
    const [cok, setCok] = useState(``)

    useEffect(() => {
        setCok(breadCrumbs.map((link, index) => {
            let classes = `breadcrumb-item`
            if (index === breadCrumbs.length - 1) {
                classes += ` active`
                setPageTitle(breadCrumbs.pop())
            }
            return (<li className={classes} key={index}>{link}</li>)
        }))
        return (() => {
            setPageTitle(``)
        })
    }, [breadCrumbs])

    return (
        <div className="content-header">
            <div className="container">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1 className="m-0 text-dark">
                            {pageTitle}
                        </h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            {cok}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}