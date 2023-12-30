import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';

export default function UserTable({ setBreadCrumbs }) {

    const xdata = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    const ydata = [
        {
            id: 1,
            title: 'Henri',
            year: '1988',
        },
        {
            id: 2,
            title: 'Susanto',
            year: '1984',
        },
    ]

    const [data, setData] = useState(xdata)

    useEffect(() => {
        setBreadCrumbs([<Link to="/">Dashboard</Link>, `User List`])
        setData(ydata)

        return (() => {
            setBreadCrumbs([])
        })
    }, [])

    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Year',
            selector: row => row.year,
            sortable: true
        },
    ];

    return (
        <div className="col-sm-12">
            <div className="card card-primary card-outline">
                <div className="card-body">

                    <div className="dataTables_wrapper dt-bootstrap4">

                        <div className="row">
                            <div className="col-sm-6">
                                <label>
                                    <input type="search" className="form-control form-control-sm" placeholder="Search" />
                                </label>
                            </div>
                            <div className="col-sm-6 text-right">
                                <Link to="/User/0" className="btn btn-primary btn-sm">
                                    <i className="fa fa-plus"></i>&nbsp;Add New User
                                </Link>
                            </div>
                        </div>

                        <DataTable
                            columns={columns}
                            data={data}
                            sortServer={true}
                            pagination
                            paginationServer={true}
                            responsive
                            highlightOnHover
                            pointerOnHover
                            progressPending={false}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}