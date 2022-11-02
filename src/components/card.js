import React, { useState, useEffect } from 'react';
function Card() {
    const [x, setX] = useState(0);
    console.log("Render");

    const btnFn = () => {
        setX(x + 1);
    }
    useEffect(() => {
        console.log("btn click");
    })
    return (
        <div>
            <div className="card xl-2 " >
                <div className="card-body">
                    <button onClick={btnFn} className="btn btn-danger"> press</button><br></br>
                    The number =  {x}
                </div><br>
                </br>

            </div>
        </div>
    );
}
export default Card;
