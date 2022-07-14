import React from "react";
import Table from "react-bootstrap/Table";

export default function SummaryDelivery() {
  const style = {
    borderBottom: "0.5rem solid #dee2e6 !important",
  };

  return (
    <div className="p-3 p-lg-4 pb-lg-2 border" style={style}>
      <Table borderless>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Name</td>
            <td>Mister Aladin</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              iNews Center, Jl. Kebon Sirih No.17-19, RT.15/RW.7, Kb. Sirih,
              Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta
              10340
            </td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>(021) 39836900</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
