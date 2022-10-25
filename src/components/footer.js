function Foot() {
    return (
        <div>
            <section className=" bg-danger fixed-bottom">

                <footer className="text-center text-dark ">

                    <div className="container p-4 pb-0">

                        <section className="">
                            <p className="d-flex justify-content-center align-items-center">
                                <span className="me-3">Register for free</span>
                                <button type="button" className="btn btn-outline-light btn-rounded">
                                    Sign up!
                                </button>
                            </p>
                        </section>

                    </div>


                    <div className="text-center p-3">
                        © 2020 Copyright:
                        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                    </div>

                </footer>

            </section>
        </div>
    );
}
export default Foot;