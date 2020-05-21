import React, { useState } from "react";
import "./DeliveryTime.css";

export default function DeliveryTime() {
    //!State variables
    //!ShowTimeWindow toggles the visibility of the dropdown area
    const [showTimeWindow, updateShowTimeWindow] = useState(
        "show-time-window-hidden"
    );
    //!What's displayed on top
    const [deliveryTime, updateDeliveryTime] = useState(
        "Choose your delivery time ..."
    );
    //!Keeps track of what day was selected
    const [deliveryDate, updateDeliveryDate] = useState("today");

    //!Function to toggle dropdown area on and off
    //!OnClick event of the top button
    const showHideDeliveryTime = () => {
        if (showTimeWindow == "show-time-window-hidden") {
            updateShowTimeWindow("show-time-window");
        } else {
            updateShowTimeWindow("show-time-window-hidden");
        }
    };

    //!onChange event for all the radio buttons
    //!Update the deliveryTime display and the radio button styles
    const deliveryTimeChanged = (event) => {
        updateDeliveryTime(`Delivery ${deliveryDate} ${event.target.value}`);
        //!Unselect all selected radio buttons
        let selectedItems = document.querySelectorAll(".time-window-selected");
        selectedItems.forEach(
            (item) => (item.className = "time-window-unselected")
        );
        //!get the radio button parent label and change the class name of the child div to show either white or green
        let label = event.target.parentElement;
        let divImage = label.childNodes[1];
        divImage.className = "time-window-selected";

        //!after selecting a time, close the window
        showHideDeliveryTime();
    };
    //!onClick event for the today and tomorrow buttons. Toggles the style and sets state variable
    const deliveryDateChanged = (event) => {
        if (event.target.value == "today") {
            document.getElementById("deliveryDateButtonTomorrow").className =
                "delivery-date-button-unselected";
        } else {
            document.getElementById("deliveryDateButtonToday").className =
                "delivery-date-button-unselected";
        }
        event.target.className = "delivery-date-button-selected";
        updateDeliveryDate(event.target.value);

        //!Unselect all radio buttons
        let radioButtons = document.querySelectorAll("input[type='radio']");
        radioButtons.forEach((radio) => unselectRadioButton(radio));
        updateDeliveryTime("Choose your delivery time ...");
    };

    const unselectRadioButton = (radio) => {
        radio.checked = false;
        let label = radio.parentElement;
        let divImage = label.childNodes[1];
        divImage.className = "time-window-unselected";
    };

    return (
        <div className="delivery-time-container">
            <div>
                <p
                    className="delivery-time-choose-time"
                    onClick={showHideDeliveryTime}
                >
                    <div className="delivery-time-choose-time-content">
                        <p>{deliveryTime}</p>
                        <span className="down-arrow-span">▼</span>
                    </div>
                </p>
            </div>
            <div className={showTimeWindow}>
                <div>
                    <button
                        className="delivery-date-button-selected"
                        id="deliveryDateButtonToday"
                        value="today"
                        onClick={deliveryDateChanged}
                    >
                        Today
          </button>
                    <button
                        className="delivery-date-button-unselected"
                        id="deliveryDateButtonTomorrow"
                        value="tomorrow"
                        onClick={deliveryDateChanged}
                    >
                        Tomorrow
          </button>
                </div>
                <div>
                    <div className="delivery-time-window">
                        <label>
                            <input
                                className="input-radio-hidden"
                                type="radio"
                                name="delivery-time"
                                value="12pm-1pm"
                                onChange={deliveryTimeChanged}
                            ></input>
                            <div className="time-window-unselected">
                                <img className="check-image" src="/Images/Vector.png" alt="Check image"></img>
                            </div>
                        </label>
                        <p>12pm to 1pm</p>
                    </div>
                    <div className="delivery-time-window gray-background">
                        <label>
                            <input
                                className="input-radio-hidden"
                                type="radio"
                                name="delivery-time"
                                value="1pm-2pm"
                                onChange={deliveryTimeChanged}
                            ></input>
                            <div className="time-window-unselected">
                                <img className="check-image" src="/Images/Vector.png" alt="Check image"></img>
                            </div>
                        </label>
                        <p>1pm to 2pm</p>
                    </div>
                    <div className="delivery-time-window">
                        <label>
                            <input
                                className="input-radio-hidden"
                                type="radio"
                                name="delivery-time"
                                value="2pm-3pm"
                                onChange={deliveryTimeChanged}
                            ></input>
                            <div className="time-window-unselected">
                                <img className="check-image" src="/Images/Vector.png" alt="Check image"></img>
                            </div>
                        </label>
                        <p>2pm to 3pm</p>
                    </div>
                    <div className="delivery-time-window gray-background">
                        <label>
                            <input
                                className="input-radio-hidden"
                                type="radio"
                                name="delivery-time"
                                value="3pm-4pm"
                                onChange={deliveryTimeChanged}
                            ></input>
                            <div className="time-window-unselected">
                                <img className="check-image" src="/Images/Vector.png" alt="Check image"></img>
                            </div>
                        </label>
                        <p>3pm to 4pm</p>
                    </div>
                    <div className="delivery-time-window">
                        <label>
                            <input
                                className="input-radio-hidden"
                                type="radio"
                                name="delivery-time"
                                value="4pm-5pm"
                                onChange={deliveryTimeChanged}
                            ></input>
                            <div className="time-window-unselected">
                                <img className="check-image" src="/Images/Vector.png" alt="Check image"></img>
                            </div>
                        </label>
                        <p>4pm to 5pm</p>
                    </div>
                    <div className="delivery-time-window gray-background">
                        <label>
                            <input
                                className="input-radio-hidden"
                                type="radio"
                                name="delivery-time"
                                value="5pm-6pm"
                                onChange={deliveryTimeChanged}
                            ></input>
                            <div className="time-window-unselected">
                                <img className="check-image" src="/Images/Vector.png" alt="Check image"></img>
                            </div>
                        </label>
                        <p>5pm to 6pm</p>
                    </div>
                    <div className="delivery-time-window">
                        <label>
                            <input
                                className="input-radio-hidden"
                                type="radio"
                                name="delivery-time"
                                value="6pm-7pm"
                                onChange={deliveryTimeChanged}
                            ></input>
                            <div className="time-window-unselected">
                                <img className="check-image" src="/Images/Vector.png" alt="Check image"></img>
                            </div>
                        </label>
                        <p>6pm to 7pm</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
