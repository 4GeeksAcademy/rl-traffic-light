import React, { useState } from 'react';

export function TrafficLight ({ initialColor }) {
    const [color, setColor] = useState("initialColor");

    const handleClickRed = () => {
        setColor("red");
    };   

    const handleClickYellow = () => {
        setColor("yellow");
    };       

    const handleClickGreen = () => {
        setColor("green");
    };    

return (
<div className="w-1/4 h-full bg-white-500 px-2 space-y-5  
pt-10 pb-10 border-2 border-black bg-blue-100 rounded-lg overflow-hidden  
text-center relative">
     <div onClick={handleClickRed} 
        className={
                "box-border rounded-full m-auto h-28 w-28 p-4 border-2 border-black m4 "
                 + (color === "red" ? "bg-red-500" : "bg-red-900")
            }>
    </div>   
    <div onClick={handleClickYellow} 
        className={
                "box-border rounded-full m-auto h-28 w-28 p-4 border-2 border-black m4 "
                 + (color === "yellow" ? "bg-yellow-500" : "bg-yellow-900")
            }>
    </div>  
    <div onClick={handleClickGreen} 
        className={
                "box-border rounded-full m-auto h-28 w-28 p-4 border-2 border-black m4 "
                 + (color === "green" ? "bg-green-500" : "bg-green-900")
            }>
    </div>   
</div>
)
}
