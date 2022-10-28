import { useState } from "react";

function Myform() {
    const [age, setage] = useState(" ");

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="card xl-2 " >
                    <div className="card-body">
                        <input type="text" value={age} onChange={(e) => {
                            setage(e.target.value);
                        }}></input>
                    </div>
                </div>
            </form>

        </div>
    );
}