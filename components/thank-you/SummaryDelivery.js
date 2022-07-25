import React from "react";
import Table from "react-bootstrap/Table";

export default function SummaryDelivery({contact}) {
  const style = {
    borderBottom: "0.5rem solid #dee2e6 !important",
  };

  return (
    <div className="p-3 p-lg-4 pb-lg-2 border" style={style}>
      <Table borderless>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Name</td>
            <td>{contact.name}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{contact.address}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{contact.phone}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
