"use client"
import Link from "next/link";
import useListData from "@/app/hooks/useListData";
import {useEffect, useState} from "react";
import DataTable from 'react-data-table-component'
import {Spinner} from "reactstrap";

export const tableColumns = [
    {
        name: "First name",
        selector: (row) => `${row.firstName}`,
        sortable: false
    },
    {
        name: "Last name",
        selector: (row) => `${row.lastName}`,
        sortable: false
    },
    {
        name: "email",
        selector: (row) => `${row.email}`,
        sortable: false
    }
]

const ListUser = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const {
        getData,
        loading,
        data
    } = useListData(`http://localhost:8080/user/get-user-page-list?pageNumber=${pageNumber - 1}&pageSize=${pageSize}`);

    useEffect(() => {
        getData();
    }, [pageNumber, pageSize]);

    const handlePageChange = async (page) => {
        setPageNumber(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setPageNumber(page);
        setPageSize(newPerPage);
    }

    return (
        <>
            <DataTable
                data={data.users}
                columns={tableColumns}
                noHeader={true}
                pagination
                paginationServer
                progressPending={loading}
                onChangePage={handlePageChange}
                onChangeRowsPerPage={handlePerRowsChange}
                paginationTotalRows={data.totalElements}
                progressComponent={<Spinner color={'danger'}>Loading</Spinner>}
                highlightOnHover
            />
        </>
    )
}

export default ListUser;