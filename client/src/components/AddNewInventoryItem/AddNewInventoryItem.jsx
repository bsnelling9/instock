import { Component } from "react";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import addIcon from "../../assets/Icons/"
import "./AddNewInventoryItem.scss";

class AddNewInventoryItem extends Component{
    
    render(){
        return(
            <div className="addInventory">
                <div className="addInventory__header">
                    <img className="addInventory__header--icon" src={arrowBack} alt="arrow back"></img>
                    <h1 className="addInventory__header--heading">Add New Inventory Item</h1>
                </div>
                <form className="addInventory__form">
                    <div className="inventoryform__box1">
                        <div className="itemDetails">
                            <h2 className="itemDetails__heading">Item Details</h2>
                            <label className="itemDetails__labels">Item Name</label>
                            <input
                                className="itemDetails__input"
                                type="text"
                                name="ItemName"
                                placeholder="Item Name"
                            />
                            <label className="itemDetails__labels">description</label>
                            <input
                                className="itemDetails__input"
                                type="textarea"
                                name="description"
                                placeholder="Please enter a brief item description"
                            />
                              <label className="itemDetails__labels">Category</label>
                                {/* <Select className="itemDetails__select" name="category" id="" placeholder="Please select">
                                    <option className="itemDetails__select--option" value="1">Electronics</option>
                                    <option className="itemDetails__select--option" value="2">Gear</option>
                                    <option className="itemDetails__select--option" value="3">Apparel</option>
                                    <option className="itemDetails__select--option" value="4">Accessories</option>
                                    <option className="itemDetails__select--option" value="5">Health</option>
                                </Select> */}
                        </div>
                        <div className="itemDetails">
                            <h2 className="itemDetails__heading">Item Availability</h2>
                            <p className="itemDetails__labels">Status</p>
                            <div className="itemDetails__status">
                                <input className="itemDetails__status--radio" type="radio" id="" name="stock_status" value="HTML"/>
                                <label className="itemDetails__labels">In Stock</label>
                                <input className="itemDetails__status--radio" type="radio" id="" name="stock_status" value="CSS"/>
                                <label className="itemDetails__labels">Out Of Stock</label>
                            </div>

                            <label className="itemDetails__labels">Quantity</label>
                                <input
                                    className="itemDetails__input"
                                    type="number"
                                    name="quantity"
                                    placeholder="0"
                                />
                            <label className="itemDetails__labels">Warehouse</label>
                            {/* <Select className="itemDetails__select" name="Please select" id="">
                                <option className="itemDetails__select--option" value="1">Manhattan</option>
                                <option className="itemDetails__select--option" value="2">Washington</option>
                                <option className="itemDetails__select--option" value="3">Jersey</option>
                                <option className="itemDetails__select--option" value="4">San Fran</option>
                                <option className="itemDetails__select--option" value="5">Santa Monica</option>
                                <option className="itemDetails__select--option" value="5">Seattle</option>
                                <option className="itemDetails__select--option" value="5">Miami</option>
                            </Select> */}
                        </div>
                    </div>
                    <div className="inventoryForm__box2">
                        <button className="inventoryForm__box2--cancel">
                            Cancel
                        </button>
                        <button className="inventoryForm__box2--cancel">
                           + Add Item
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}