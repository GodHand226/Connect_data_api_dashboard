import React, { useState } from "react";
import { Card } from "@material-tailwind/react";
import { Pricing } from "@/widgets/layout";
import { Pay, Standard, Professional, Enterprise } from "@/widgets/message";
export function Billing() {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const showModal = () => setOpen(!open);
  const showModal1 = () => setOpen1(!open1);
  const showModal2 = () => setOpen2(!open2);
  const showModal3 = () => setOpen3(!open3);
  return (
    <div>
      <Card>
        <Pricing
          pay={showModal}
          standard={showModal1}
          professional={showModal2}
          enterprise={showModal3}
        />
      </Card>
      <Pay open={open} handler={showModal}></Pay>
      <Standard open={open1} handler={showModal1}></Standard>
      <Professional open={open2} handler={showModal2}></Professional>
      <Enterprise open={open3} handler={showModal3}></Enterprise>
    </div>
  );
}

export default Billing;
