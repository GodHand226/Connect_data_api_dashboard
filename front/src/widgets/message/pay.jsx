import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
  IconButton,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

export function Pay({ open, handler }) {
  const socials = [
    {
      color: "green",
      name: "whatsapp",
      path: "https://wa.me/message/HH7KVRVRLPJYB1",
    },
    {
      color: "light-blue",
      name: "skype",
      path: "https://join.skype.com/invite/vWqwR9VYdSNA",
    },
    {
      color: "blue",
      name: "telegram",
      path: "https://t.me/mangesh279",
    },
  ];
  return (
    <Dialog open={open} handler={handler}>
      <DialogHeader>Pay As You Go or Add Funds</DialogHeader>
      <DialogBody divider className="h-[30rem] overflow-auto text-black">
        Thank you for choosing our 'Pay as you go' plan. We understand the value
        of flexibility and have designed this plan with 'No subscription, No
        commitment' in mind. Please note that at this time, we are in the
        process of implementing card payments for this plan, but they are not
        yet available. However, we offer convenient payment options through wire
        transfer and ACH.
        <br />
        <br />
        <strong>Payment Details:</strong>
        <ul className="ml-4">
          <li>Account Holder: Data API Connect LLC</li>
          <li>Routing Number: 084009519</li>
          <li>Account Number: 9600012896158670 </li>
          <li>Account Type: Checking </li>
          <li>Bank Name: MUFG BANK</li>
          <li>Email : sales@dataapiconnect.com</li>
          <li>Phone: +1 (484) 978-9456</li>
          <li>
            Address: 30 W. 26th Street, Sixth Floor, New York, NY 10010, United
            States.
          </li>
        </ul>
        <br />
        Once you've made your payment using one of these methods, please share
        the receipt with us through WhatsApp, Skype, or Telegram. Our contact
        details for these platforms are as follows:
        <br />
        <br />
        <div className="mx-auto mb-8 flex justify-center gap-16 md:mb-0">
          {socials.map(({ color, name, path }) => (
            <a key={name} href={path} target="_blank" rel="noopener noreferrer">
              <IconButton color="white" variant="text" size="lg" className="">
                <Typography color={color}>
                  <i className={`fa-brands text-5xl fa-${name}`} />
                </Typography>
              </IconButton>
            </a>
          ))}
        </div>
        <br />
        After receiving your payment confirmation, we will ensure your account
        is credited with the funds, and you can start using our services right
        away.
      </DialogBody>
      <DialogFooter>
        <Button variant="gradient" color="red" onClick={handler}>
          <span>I read it</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
Pay.defaultProps = {
  open: false,
};

Pay.propTypes = {
  open: PropTypes.bool,
  handler: PropTypes.func,
};

Pay.displayName = "/src/widgets/message/pay.jsx";

export default Pay;
