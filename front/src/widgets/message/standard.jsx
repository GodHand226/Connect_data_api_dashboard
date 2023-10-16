import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import PropTypes from "prop-types";

export function Standard({ open, handler }) {
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
      <DialogHeader>Standard</DialogHeader>
      <DialogBody divider className="h-[30rem] overflow-auto text-black">
        Welcome to our 'Standard Plan,' a robust choice for your data needs.
        With this plan, we offer you competitive pricing at $0.08 per data
        record. Here's the deal - no subscription, no commitment, just a
        straightforward pricing structure.
        <br />
        <br />
        <strong>Plan Details:</strong>
        <ul className="ml-4 list-disc">
          <li>Pricing: $0.08 per Data Record</li>
          <li>Minimum: 100,000 Data Records</li>
        </ul>
        <br />
        Total Cost for Standard Plan: $8,000
        <br />
        <br />
        We understand that transparency is important to you. With our 'Standard
        Plan,' you know exactly what you're getting and what you're paying.
        Whether you need data for a specific project or an ongoing venture, this
        plan provides the flexibility you require.
        <br />
        <br />
        As for payment, we offer multiple convenient methods:
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
        Once your payment of $8,000 is processed, please share the receipt with
        us through WhatsApp, Skype, or Telegram. Our contact details for these
        platforms are as follows:
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
        Upon receiving your payment confirmation, we will ensure your account is
        credited with the funds, allowing you to access the 'Standard Plan'
        immediately.
        <br />
        <br />
        Our team believes in providing a clear and competitive pricing structure
        without the need for subscriptions or long-term commitments. Our working
        hours are in Eastern Standard Time (EST), from 10 am to 10 pm.
      </DialogBody>
      <DialogFooter>
        <Button variant="gradient" color="red" onClick={handler}>
          <span>I read it</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
Standard.defaultProps = {
  open: false,
};

Standard.propTypes = {
  open: PropTypes.bool,
  handler: PropTypes.func,
};

Standard.displayName = "/src/widgets/message/standard.jsx";

export default Standard;
