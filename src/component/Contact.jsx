import { addContact } from '../store/features/contact/contactSlice';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';


function Contact() {

    useEffect(function () {
        var message = document.getElementById("alert-success");
        message.style.display = "none";
    }, []);

    let dispatch = useDispatch();

    const contact = useSelector(function (state) {

        return state.contact;

    });




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
            var message = document.getElementById("alert-success");
            message.style.display = "block";

            const inputs = document.querySelectorAll('#firstName, #lastName, #email,#comments');

            inputs.forEach(input => {
                input.value = '';
            });

        }
    };



    (function () {
        'use strict';
        window.addEventListener('load', function () {

            // Get the forms we want to add validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }

                }, false);
            });
        }, false);
    })();




    function hideConfirmation() {

        var message = document.getElementById("alert-success");
        if (message.style.display === "none") {
            message.style.display = "block";
        } else {
            message.style.display = "none";
        }

    }

    return (
        <div className="container">

            <div className="alert alert-success alert-dismissible   align-items-center fade show" id="alert-success">
                <i className="bi-check-circle-fill"></i>
                {
                    contact.length > 0 ?
                        <><strong className="mx-2">Success!</strong>{`Thanks Your Comment Has Been Submitted ${contact[(contact.length - 1)].firstName}`} </>
                        : <> <strong className="mx-2">Success!</strong>Thanks your Comment Has Been Submitted</>

                }



                <button type="button" className="close" aria-label="Close" onClick={hideConfirmation}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>


            <div className="row w-50 mx-auto title-font">
                <div col-md-12 col-sm-1>
                    <h2>Enter Your Comments</h2>
                </div>
            </div>


            <div className="row w-50 mx-auto title-font">
                <div col-md-12 col-sm-1>
                    <h4>We want to hear from you!</h4>
                </div>
            </div>

            <div className="todo-List" >

                <form className="contact-form needs-validation" novalidate onSubmit={submitContact} >

                    <div className="form-group  form-input">

                        <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First Name" required />

                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <div className="form-group form-input">

                        <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last Name" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <div className="form-group form-input">
                        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>



                    <div className="form-outline mb-3">
                        <textarea type="text" className="form-control" name="comments" id="comments" rows="3" placeholder="Comments" required></textarea>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out this field.</div>
                    </div>

                    <div className="d-flex align-items-center justify-content-center" >
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </div>

                </form>
            </div>

        </div>

    )


}
export default Contact;