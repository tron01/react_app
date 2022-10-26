import React, { useState } from 'react';
function Card() {
    const [x, setX] = useState(0);

    const btnFn = () => {
        setX(x + 1);
    }
    return (
        <div>
            <div className="card xl-2 " >
                <div className="card-body">
                    <button onClick={btnFn} className="btn btn-danger"> press</button><br></br>
                    The number =  {x}
                </div>
            </div>
        </div>
    );
}
export default Card;
