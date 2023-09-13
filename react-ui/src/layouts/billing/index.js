// import SuiBox from "components/SuiBox";
import SuiButton from "components/SuiButton";
// Soft UI Dashboard React components
// import Link from "@mui/material/Link";
import axios from "axios";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import "react-coinbase-commerce/dist/coinbase-commerce-button.css";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
import { API_SERVER } from "../../config/constant";
import { useAuth } from "../../auth-context/auth.context";
function Billing() {
  let array = [10, 50, 100, 500];
  let { user } = useAuth();

  // let check = {
  //   10: "https://commerce.coinbase.com/checkout/4a8a7c28-25f0-479b-a57d-93176366fb0a",
  //   50: "https://commerce.coinbase.com/checkout/0c4410c7-aab7-4fb3-b60a-63db719778e7",
  //   100: "https://commerce.coinbase.com/checkout/ccb68179-2263-4132-a9a5-c78e00cbc46b",
  //   500: "https://commerce.coinbase.com/checkout/c521ad37-a90c-4d76-819e-4ace54f01b62",
  // };
  const [alignment, setAlignment] = useState("10");
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const getCharge = async () => {
    let res = "";
    try {
      res = await axios.post(
        `${API_SERVER}/users/payment`,
        { alignment },
        {
          headers: { Authorization: `${user.token}` },
        }
      );
      console.log(res);
    } catch (e) {
      console.error(e);
    }
    return res;
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  const checkClicked = async () => {
    const result = await getCharge();
    const data = result.data;
    console.log(data);
    const charge = data["charge"];
    openInNewTab(charge.hosted_url);
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox display="flex" justifyContent="center">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          {array.map((price) => (
            <ToggleButton value={price} key={price} sx={{ marginX: "30px" }}>
              <SuiBox>
                <SuiBox px={6} py={10} sx={{ borderBottom: "1px solid" }}>
                  <SuiTypography variant="h3">Records</SuiTypography>
                  <SuiTypography variant="h3">{price * 20}</SuiTypography>
                </SuiBox>
                <SuiBox>
                  <SuiTypography variant="h3" py={5}>
                    {price}$
                  </SuiTypography>
                </SuiBox>
              </SuiBox>
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </SuiBox>
      <SuiBox display="flex" justifyContent="center" mt={10}>
        <SuiButton
          buttonColor="info"
          startIcon={<AddShoppingCartIcon />}
          variant="outlined"
          size="large"
          onClick={checkClicked}
        >
          CheckOut
        </SuiButton>
      </SuiBox>
    </DashboardLayout>
  );
}

export default Billing;
