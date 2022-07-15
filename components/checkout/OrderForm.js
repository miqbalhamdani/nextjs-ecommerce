import React from "react";

export default function OrderForm() {
  return (
    <div className="col-md-6 mb-5 mb-md-0">
      <h2 className="h3 mb-3 text-black">
        Billing Details
      </h2>

      <div className="p-3 p-lg-5 border">
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
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <div className="col-md-12">
            <label htmlFor="c_companyname" className="text-black mb-2">
              Company Name{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="c_companyname"
              name="c_companyname"
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
          <div className="col-md-6">
            <label htmlFor="c_state_country" className="text-black mb-2">
              State / Country <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_state_country"
              name="c_state_country"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="c_postal_zip" className="text-black mb-2">
              Posta / Zip <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_postal_zip"
              name="c_postal_zip"
            />
          </div>
        </div>

        <div className="form-group row mb-3">
          <div className="col-md-6">
            <label htmlFor="c_email_address" className="text-black mb-2">
              Email Address <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_email_address"
              name="c_email_address"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="c_phone" className="text-black mb-2">
              Phone <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="c_phone"
              name="c_phone"
              placeholder="Phone Number"
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
          ></textarea>
        </div>
      </div>
    </div>
  );
}
