import React, { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import AddCustomer from './AddCustomer';
import DeleteCustomer from './DeleteCustomer';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    fetch('http://traineeapp.azurewebsites.net/api/customers')
      .then(response => response.json())
      .then((data) => {
        const customerData = data.content.map((customerInfo) => {
          const customerHref = customerInfo.links.find(
            (link) => link.rel === "self"
          ).href;

          return {
            ...customerInfo,
            customerHref,
          };
        });

        setCustomers(customerData);
      })
      .catch(error => console.error('Error fetching customers', error));
  }, []);
  
  const handleDelete = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleDeleteConfirm = () => {

    fetch(`https://traineeapp.azurewebsites.net/api/customers/${selectedCustomer.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok)
          throw new Error("Error when deleting customer: " + response.statusText);
        return response.json();
      })
      .then((data) => {
        console.log("Customer deleted successfully", data);

        // asiakaslistan päivitys poiston jälkeen
        setCustomers(customers.filter(customer => customer.id !== selectedCustomer.id));

        // Nollaa valitun asiakkaan
        setSelectedCustomer(null);
      })
      .catch((err) => console.error(err));
  };

  const columns = [
    {
      field: 'firstname',
      headerName: 'First Name',
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponentParams: {
        suppressFilterButton: true,
      },
      menuTabs: [],
      headerClass: 'customHeader',
      cellClass: 'customCell',
    },
    {
      field: 'lastname',
      headerName: 'Last Name',
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponentParams: {
        suppressFilterButton: true,
      },
      menuTabs: [],
      headerClass: 'customHeader',
      cellClass: 'customCell',
    },
    {
      field: 'streetaddress',
      headerName: 'Street address',
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponentParams: {
        suppressFilterButton: true,
      },
      menuTabs: [],
      headerClass: 'customHeader',
      cellClass: 'customCell',
    },
    {
      field: 'postcode',
      headerName: 'Postcode',
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponentParams: {
        suppressFilterButton: true,
      },
      menuTabs: [],
      headerClass: 'customHeader',
      cellClass: 'customCell',
    },
    {
      field: 'city',
      headerName: 'City',
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponentParams: {
        suppressFilterButton: true,
      },
      menuTabs: [],
      headerClass: 'customHeader',
      cellClass: 'customCell',
    },
    {
      field: 'email',
      headerName: 'Email',
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponentParams: {
        suppressFilterButton: true,
      },
      menuTabs: [],
      headerClass: 'customHeader',
      cellClass: 'customCell',
    },
    {
      field: 'phone',
      headerName: 'Phone',
      sortable: true,
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      floatingFilterComponentParams: {
        suppressFilterButton: true,
      },
      menuTabs: [],
      headerClass: 'customHeader',
      cellClass: 'customCell',
    },
  ];

  return (
    <>
    <AddCustomer/>
    <DeleteCustomer
        customerData={selectedCustomer}
        onDelete={handleDeleteConfirm}
      />
    <div className="ag-theme-alpine" style={{ height: 650, width: '400%' }}>
      <AgGridReact columnDefs={columns} rowData={customers} pagination={true}
      paginationAutoPageSize={true} />
    </div>
    </>
  );
  };

  
  
export default CustomerList;



