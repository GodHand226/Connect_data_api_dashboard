import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { ordersOverviewData } from "@/data";
import axios from "axios";
import { KeyIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import { statisticsChartsData } from "@/data";
import { API_SERVER } from "@/config/constant";
import { useAuth } from "@/auth-context/auth.context";

export function MainDashboard() {
  let { user } = useAuth();
  const [key, setKey] = React.useState(undefined);
  const [record, setRecord] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const showModal = () => setOpen(!open);
  const handleOpen = async () => {
    setOpen(!open);
    try {
      const res = await axios.post(`${API_SERVER}/users/rotate`, user, {
        headers: { Authorization: `${user.token}` },
      });
      const data = res.data;
      setKey(data["key"]);
    } catch (e) {
      console.error(e);
    }
  };
  const getData = async () => {
    try {
      const res = await axios.post(`${API_SERVER}/users/dashboard`, user, {
        headers: { Authorization: `${user.token}` },
      });
      const data = res.data;
      setKey(data["API_KEY"]);
      setRecord(data["Record"]);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-12">
      <div className="mb-12 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <StatisticsCard
            color="blue"
            value={key}
            title="API KEY"
            icon={React.createElement(KeyIcon, {
              className: "w-6 h-6 text-white",
            })}
            rotate={showModal}
          />
        </div>
        <div>
          <StatisticsCard
            color="red"
            value={record}
            title="Records"
            icon={React.createElement(ChartBarIcon, {
              className: "w-6 h-6 text-white",
            })}
          />
        </div>
      </div>
      <div className="mb-6 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-2">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-inherit" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
        <Card>
          <CardHeader variant="gradient" color="green" className="mb-8 p-6">
            API INFORMATION
          </CardHeader>
          <CardBody className="flex flex-col gap-4 px-0 pb-2 pt-0">
            {ordersOverviewData.map(
              ({ icon, color, title, description }, key) => (
                <div key={title} className="flex items-start gap-4 py-3">
                  <div
                    className={`relative p-1 pl-10 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                      key === ordersOverviewData.length - 1
                        ? "after:h-0"
                        : "after:h-4/6"
                    }`}
                  >
                    {React.createElement(icon, {
                      className: `!w-5 !h-5 ${color}`,
                    })}
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="block font-medium"
                    >
                      {title}
                    </Typography>
                    <Typography
                      as="span"
                      variant="small"
                      className="text-xs font-medium text-blue-gray-500"
                    >
                      {description}
                    </Typography>
                  </div>
                </div>
              )
            )}
          </CardBody>
        </Card>
      </div>
      <Dialog open={open} handler={showModal}>
        <DialogHeader>Rotate API KEY</DialogHeader>
        <DialogBody divider>
          Rotating this key <strong>{key}</strong>
          &nbsp;will completely disable the current one and generate an entirely
          new one. This action cannot be undone.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={showModal}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="red" onClick={handleOpen}>
            <span>Rotate Key</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}

export default MainDashboard;
