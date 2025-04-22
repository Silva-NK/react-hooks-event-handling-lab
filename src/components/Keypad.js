import React from "react";

function Keypad (){
    
    function handlePassChange() {
        console.log("Entering password...")
    }

    return (
        <div>
            <input
            type="password"
            onChange={handlePassChange}
            />
        </div>
    );
}

export default Keypad;