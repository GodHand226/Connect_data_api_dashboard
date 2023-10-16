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

export function Enterprise({ open, handler }) {
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
      <DialogHeader>Enterprise</DialogHeader>
      <DialogBody divider className="h-[30rem] overflow-auto text-black">
        Welcome to our 'Enterprise Plan,' a top-tier solution designed to meet
        the data requirements of your business at a cost-effective rate. With
        this plan, we offer a competitive price of $0.04 per data record,
        providing you with the flexibility and resources needed for large-scale
        data projects.
        <br />
        <br />
        <strong>Plan Details:</strong>
        <ul className="ml-4 list-disc">
          <li>Pricing: $0.04 per Data Record</li>
          <li>Minimum: 1 Million Data Records</li>
        </ul>
        <br />
        For large-scale data projects, the 'Enterprise Plan' offers an
        exceptional value, ensuring that you can access the data you need
        without the constraints of long-term commitments.
        <br />
        <br />
        Total Cost for Enterprise Plan: $40,000
        <br />
        <br />
        We understand that transparency and affordability are paramount to your
        business. The 'Enterprise Plan' provides a straightforward pricing
        structure, so you know exactly what you're getting and what you're
        paying for.
        <br />
        <br />
        For payment, we offer multiple convenient methods:
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
        Upon processing your payment of $40,000, please share the receipt with
        us through WhatsApp, Skype, or Telegram. You can reach us on these
        platforms using the following contact details:
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
        Upon receipt of your payment confirmation, we will promptly credit your
        account with the funds, providing you with access to the 'Enterprise
        Plan' immediately.
        <br />
        <br />
        Our team is dedicated to delivering clear and competitive pricing
        structures without the need for subscriptions or long-term commitments.
        We're here to support your enterprise data needs. Our working hours are
        in Eastern Standard Time (EST), from 10 am to 10 pm.
        <br />
        <br />
        Thank you for choosing Data API Connect LLC, and we look forward to
        serving your enterprise-level data requirements.
      </DialogBody>
      <DialogFooter>
        <Button variant="gradient" color="red" onClick={handler}>
          <span>I read it</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
Enterprise.defaultProps = {
  open: false,
};

Enterprise.propTypes = {
  open: PropTypes.bool,
  handler: PropTypes.func,
};

Enterprise.displayName = "/src/widgets/message/enterprise.jsx";

export default Enterprise;
