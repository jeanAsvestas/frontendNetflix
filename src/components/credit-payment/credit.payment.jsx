import "./credit.payment.scss";
import { useRef, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { PayPalButton } from "react-paypal-button-v2";
import { useNavigate } from "react-router-dom";
import { convertLength } from "@mui/material/styles/cssUtils";

const CreditPayment = () => {
    const nav = useNavigate();
    //for vanilla bootstrap modal
    const modalRef = useRef();
    // const submitPayment = () => {
    //     alert("Payment Successful");
    //     // modalRef.current.style.display = "display"
    //     console.log(modalRef);
    // };



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const submitPayment = (e) => {
        console.log(modalRef.current.value);
        alert("Payment Successful");
        setShow(false);
    }
    const CCnumber = () => {
        const modarefFormatted = modalRef.current.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ');
        modalRef.current.value = modarefFormatted;


    }


    // const showModal = () => {
    //     const modalEle = modalRef.current
    //     const bsModal = new Modal(modalEle, {
    //         backdrop: 'static',
    //         keyboard: false
    //     })
    //     bsModal.show()
    // }

    // const hideModal = () => {
    //     const modalEle = modalRef.current
    //     const bsModal = bootstrap.Modal.getInstance(modalEle)
    //     bsModal.hide()
    // }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static"
                keyboard={false} centered >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PayPalButton
                        amount="0.01"
                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                        onSuccess={(details, data) => {
                            console.log(details, data)
                            alert("Transaction completed by ");

                            // OPTIONAL: Call your server to save the transaction
                            return fetch("/paypal-transaction-complete", {
                                method: "post",
                                body: JSON.stringify({
                                    orderId: data.orderID
                                })
                            });
                        }}
                        options={{
                            clientId: "PRODUCTION_CLIENT_ID"
                        }}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={submitPayment}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CreditPayment;



{/* <Form >
<Form.Group className="col-sm-12" controlId="exampleForm.ControlInput1">
    <Form.Label>Credit Card Name Holder</Form.Label>
    <Form.Control
        type="text"
        placeholder="Full Name"
        ref={modalRef}
        onChange={CCnumber}
        size="18"
        maxLength="19"
        minLength="17"
    />
</Form.Group>
<Form.Group className="col-sm-12" controlId="exampleForm.ControlInput2">
    <Form.Label>Credit Card Number</Form.Label>
    <Form.Control
        type="text"
        placeholder="Credit Card Number"
        ref={modalRef}
        onChange={CCnumber}
        size="18"
        maxLength="19"
        minLength="17"

    />
</Form.Group>
<Form.Group className="col-sm-3" controlId="exampleForm.ControlInput2">
    <Form.Label>Email address</Form.Label>
    <Form.Control
        type="email"
        placeholder="name@example.com"

    />
</Form.Group>
<Form.Group className="col-sm-12" controlId="exampleForm.ControlInput2">
    <Form.Label>Email address</Form.Label>
    <Form.Control
        type="email"
        placeholder="name@example.com"

    />
</Form.Group>
</Form> */}