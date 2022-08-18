function Contact() {

    return (
        <div className="container">

            <div className="row w-50 mx-auto">
                <div col-md-12 col-sm-1>
                    <h2>Enter Your Contact Information</h2>
                </div>
            </div>

            <div >

                <form className="contact-form"  >

                    <div className="form-group  form-input">

                        <input name="firstName" className="form-control" placeholder="First Name"></input>
                    </div>

                    <div className="form-group form-input">

                        <input name="lastName" className="form-control" placeholder="Last Name"></input>
                    </div>

                    <div className="form-group form-input">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="d-flex align-items-center justify-content-center" >
                            <button type="submit" class="btn btn-primary" >Submit</button>
                        </div>

                </form>
            </div>
        </div>

    )


}
export default Contact;