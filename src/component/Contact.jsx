import { addContact } from '../store/features/contact/contactSlice';
import { useDispatch, useSelector } from 'react-redux';









function Contact() {

    let dispatch = useDispatch();


    function submitContact(event) {
        event.preventDefault();
        if (event) {
            let contactObject = {
                firstName: event.target.elements.firstName.value,
                lastName: event.target.elements.lastName.value,
                email: event.target.elements.email.value,
                comments: event.target.elements.comments.value,
            }
            dispatch(addContact(contactObject));


        }


    };

    return (
        <div className="container">

            <div className="row w-50 mx-auto">
                <div col-md-12 col-sm-1>
                    <h2>Enter Your Contact Information</h2>
                </div>
            </div>

            <div >
            
                <form className="contact-form needs-validation" novalidate   onSubmit={submitContact} >

                    <div className="form-group  form-input">

                        <input type="text" name="firstName" className="form-control" placeholder="First Name" required />

                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <div className="form-group form-input">

                        <input type="text" name="lastName" className="form-control" placeholder="Last Name" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <div className="form-group form-input">
                        <input type="email" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>



                    <div className="form-outline mb-3">
                        <textarea type="text" className="form-control" name="comments" rows="3" placeholder="Comments"></textarea>
                    </div>

                    <div className="d-flex align-items-center justify-content-center" >
                        <button type="submit" class="btn btn-primary" >Submit</button>
                    </div>

                </form>
            </div>

            <script src='../scripts/contactscripts'></script>
        </div>

    )


}
export default Contact;