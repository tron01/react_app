function Card() {
    let x = 1;
    return (
        <div>
            <div className="card xl-2 " >
                <div className="card-body">
                    This is some text within a card body.
                    {x}
                </div>
            </div>
        </div>
    );
}
export default Card;
