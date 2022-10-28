import { useState } from "react";

function Myform() {
    const [age, setage] = useState(" ");

    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="card xl-2 " >
                    <div className="card-body">
                        <input type="text" value={age} onChange={(e) => {
                            setage(e.target.value);
                        }}></input>
                        <button type="submit" className="btn btn-info">submit</button>

                    </div>
                    <br />
                    <span>Age: { }</span>
                </div>
            </form>

        </div>
    );
}
export default Myform;