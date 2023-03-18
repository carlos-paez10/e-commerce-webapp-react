import * as Yup from "yup";

import { Button, Form } from "react-bootstrap";

import { CartContext } from "../CartContext";
import React from "react";
import { useContext } from "react";
import { useFormik } from "formik";

const ShippingSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  mobileNumber: Yup.string().required("Mobile number is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  zipcode: Yup.string().required("Zip code is required"),
  discountCode: Yup.string(),
});

const ShippingForm = ({checkout}) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      address: "",
      city: "",
      zipcode: "",
      discountCode: ''
    },
    validationSchema: ShippingSchema,
    onSubmit: (values) => {
      console.log(values);
      // Do something with the form data, like submit it to a server
    },
  });


  const cart=useContext(CartContext);

  const handleCheckout= async()=>{
   const url = 'https://pine-miniature-wish.glitch.me/checkout';
   const couponCode = formik.values.discountCode;
   console.log('COUPON INPUT BY CLIENT:'+couponCode)


    // Call the apply-coupon endpoint to retrieve the coupon data
   let couponData = null;
   if (couponCode==='FIRSTESCAPE1') {
     const couponResponse = await fetch('https://pine-miniature-wish.glitch.me/apply-coupon', {
        method: 'POST',
        headers: {
           'Content-Type':'application/json'
        },
        body: JSON.stringify({couponCode:'MAI6H1iV'})
     });
     couponData = await couponResponse.json();
   }

   console.log('COUPON DATAAAAAAAAAAAA')
   console.log(couponData);
   console.log('COUPON DATAAAAAAADDDDD')

    // Construct the paymentIntentData object based on the coupon data
    
   //  let paymentIntentData = {};
   //  if (couponData && couponData.success) {
   //    paymentIntentData = {
   //      discounts: [{
   //        coupon: couponData.coupon.id
   //      }]
   //    };
   //  }

    // Call the checkout endpoint with the paymentIntentData object
   const checkoutResponse = await fetch(url, {
      method: 'POST',
      headers: {
         'Content-Type':'application/json'
      },
      body: JSON.stringify({
         items: cart.items,
         couponCode:couponData.coupon.id,
//         paymentIntentData: paymentIntentData 
      })
   });

    // Handle the checkout response
    const checkoutData = await checkoutResponse.json();
    console.log('CHECKOUT DATA OBJECT RESPONSE ');
    console.log(checkoutData);
    console.log('this is the checkout url '+checkoutData.url);
    if (checkoutData && checkoutData.url) {
      window.location.assign(checkoutData.url);
    } else {
      console.log("Error: checkout url is not available");
    }
 }



  return (
   <div className="shipping-form">
    <Form onSubmit={formik.handleSubmit}>
      <h2>Shipping Information</h2>

      <Form.Group controlId="formFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="error">{formik.errors.firstName}</div>
        ) : null}
      </Form.Group>

      <Form.Group controlId="formLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="error">{formik.errors.lastName}</div>
        ) : null}
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </Form.Group>

      <Form.Group controlId="formMobileNumber">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter mobile number"
          name="mobileNumber"
          value={formik.values.mobileNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.mobileNumber && formik.errors.mobileNumber ? (
          <div className="error">{formik.errors.mobileNumber}</div>
        ) : null}
      </Form.Group>

      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="error">{formik.errors.address}</div>
        ) : null}
      </Form.Group>

  <Form.Group controlId="discountCode">
  <Form.Label>Discount Code</Form.Label>
  <Form.Control
    type="text"
    placeholder="Enter your discount code"
    name="discountCode"
    value={formik.values.discountCode}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    isInvalid={formik.touched.discountCode && formik.errors.discountCode}
  />
  <Form.Control.Feedback type="invalid">
    {formik.errors.discountCode}
  </Form.Control.Feedback>
</Form.Group>

      </Form>
      <Button  className="mt-3" variant='success' onClick={handleCheckout} >Continue to CheckOut</Button>
      </div>
      );
   };

   export default ShippingForm;