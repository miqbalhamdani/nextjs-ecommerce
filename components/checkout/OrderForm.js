import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

export default function OrderForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    props.onSubmit(formTransform);
  }, [firstName, lastName, address, phone, postalCode, email, notes]);

  const formTransform = () => ({
    name: `${firstName} ${lastName}`,
    address: address,
    phone: phone,
    postalCode: postalCode,
    email: email,
    notes: notes,
  });

  return (
    <div className="col-md-6 mb-5 mb-md-0">
      <h2 className="h3 mb-3 text-black">Billing Details</h2>

      <div className="p-3 p-lg-5 border">
        {!props.isValidForm && (
          <Alert variant="danger" className="mb-4">
            Please complete this form ...{" "}
          </Alert>
        )}

        <div className="form-group row mb-3">
          <div className="col-md-6">
            <label htmlFor="c_fname" className="text-black mb-2">
              First Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_fname"
              name="c_fname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="c_lname" className="text-black mb-2">
              Last Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_lname"
              name="c_lname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <div className="col-md-12">
            <label htmlFor="c_address" className="text-black mb-2">
              Address <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_address"
              name="c_address"
              placeholder="Street address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Apartment, suite, unit etc. (optional)"
          />
        </div>

        <div className="form-group row mb-3">
          <div className="col-md-8">
            <label htmlFor="c_phone" className="text-black mb-2">
              Phone <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_phone"
              name="c_phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="c_postal_zip" className="text-black mb-2">
              Posta / Zip <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_postal_zip"
              name="c_postal_zip"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <div className="col-md-12">
            <label htmlFor="c_email_address" className="text-black mb-2">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_email_address"
              name="c_email_address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="c_order_notes" className="text-black mb-2">
            Order Notes
          </label>
          <textarea
            name="c_order_notes"
            id="c_order_notes"
            cols="30"
            rows="5"
            className="form-control"
            placeholder="Write your notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
