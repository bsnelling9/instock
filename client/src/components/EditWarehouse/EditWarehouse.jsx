import { Component } from "react";
import "./EditWarehouse.scss";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg"

class EditWarehouse extends Component{
    render() {
        return(
            <div className="editContainer">
                <div className="header">
                    <img className="header__icon" src={arrowBack} alt="arrow back"></img>
                    <h1 className="header__heading"> Edit Warehouse</h1>
                </div>
               <form className="editForm">
                    <div className="editForm__box1">
                        <div className="formDetails">
                            <h2 className="formDetails__heading">Warehouse Details</h2>
                            <label className="formDetails__label">Warehouse Name</label>
                            <input className="formDetails__input"
                            type="text"
                            name="WarehouseName"
                            placeholder="Warehouse Name"
                            />
                            <label className="formDetails__label">Street Address</label>
                            <input className="formDetails__input"
                            type="text"
                            name="StreetAddress"
                            placeholder="Street Address"
                            />
                            <label className="formDetails__label">City</label>
                            <input className="formDetails__input"
                            type="text"
                            name="city"
                            placeholder="City"
                            />
                            <label className="formDetails__label">Country</label>
                            <input className="formDetails__input"
                            type="text"
                            name="country"
                            placeholder="Country"
                            />
                        </div>
                        <div className="formDetails">
                            <h2 className="formDetails__heading">Contact Details</h2>
                            <label className="formDetails__label">Contact Name</label>
                            <input className="formDetails__input"
                            type="text"
                            name="ContactName"
                            placeholder="Contact Name"
                            />
                            <label className="formDetails__label">Position</label>
                            <input className="formDetails__input"
                            type="text"
                            name="Position"
                            placeholder="Position"
                            />
                            <label className="formDetails__label">Phone Number</label>
                            <input className="formDetails__input"
                            type="text"
                            name="PhoneNumber"
                            placeholder="Phone Number"
                            />
                            <label className="formDetails__label">Email</label>
                            <input className="formDetails__input"
                            type="text"
                            name="email"
                            placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="editForm__box2">
                        <button className="editForm__box2--cancel">
                            Cancel
                        </button>
                        <button className="editForm__box2--save">
                            Save
                        </button>
                    </div>
               </form>
            </div>
        )
    }
}

export default EditWarehouse;