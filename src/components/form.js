import { useState, useEffect } from "react";

function Form({ onFormSubmit }) {
    const [age, setage] = useState(" ");
    console.log("render!");

    useEffect(() => {
        console.log("onMount");
    }, [setage]);
    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(age);
    }
    let b = age;
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
                    <span>Age: {b}</span>
                </div>
            </form>

        </div>
    );
}
export default Form;