//Program to demonstrate HTTP get request
import React,{useMemo,useState,useEffect} from 'react'

import axios from 'axios' //import axios library
import Table from '../components/Table';

function AllShops(){
    const columns = useMemo(
        () => [
          {
            // First group columns
            Header: "SHOPOWNER DETAILS",
            columns: [
              {
                Header: "ID",
                accessor: "id",
              },
              {
                Header: "Name",
                accessor: "name",
              },
              {
                Header: "DOB",
                accessor: "dob",
              },
              {
                Header: "Address",
                accessor: "address",
              },
              {
                Header: "shop_id",
                accessor: "shop_id",
              },
            ],
          },
        ],
        []
      );
    // data state to store the TV Maze API data. Its initial value is an empty array
  const [data, setData] = useState([]);

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("http://localhost:8081/shops");
      setData(result.data);
    })();
  }, []);

    return (
        <div className="App">
          <h1 className='App1'>LIST OF SHOP OWNERS</h1>
          <Table columns={columns} data={data} />
        </div>
      );

}
export default AllShops;