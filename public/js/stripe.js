/* eslint-disable */

import { showAlert } from './alerts';
import axios from 'axios';

export const bookTour = async (tourId) => {
  const stripe = require('stripe')(
    'pk_test_51LiyptSE9jG3zwhrOOXYnlAa7OTIttjXfgk3y5rwE4DUzjFCMke1qKdC5VwH7knz667jtUJ19Mcolvi7Dw0r0Aus00jpRHg10b'
  );
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);
    // 2) create checkout form + charge credit card
    // jonas code but it didn't worked.
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });
    // Q/A code
    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
