import PropTypes from "prop-types";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
const Snippet = ({ title }) => {
  const payload = [
    {
      "First Name": "Barry",
      "Last Name": "Schwerdt",
      "Full Name": "Barry Schwerdt",
      Age: "60",
      "Phone Detail": [
        {
          "Phone Number": "(972) 672-1594",
          "Line Type": "Wireless",
          Carrier: "AT&T",
        },
        {
          "Phone Number": "(972) 771-0295",
          "Line Type": "Landline",
          Carrier: "Southwestern Bell Telephone Company",
        },
        {
          "Phone Number": "(214) 697-2435",
          "Line Type": "Wireless",
          Carrier: "AT&T",
        },
        {
          "Phone Number": "(214) 763-9672",
          "Line Type": "Wireless",
          Carrier: "AT&T",
        },
        {
          "Phone Number": "(214) 675-7262",
          "Line Type": "Wireless",
          Carrier: "AT&T",
        },
        {
          "Phone Number": "(214) 244-2894",
          "Line Type": "Wireless",
          Carrier: "AT&T",
        },
        {
          "Phone Number": "(972) 771-9342",
          "Line Type": "Landline",
          Carrier: "Southwestern Bell Telephone Company",
        },
      ],
      Street: "142 Stafford Dr",
      City: "Rockwall",
      State: "TX",
      PostalCode: "75032",
      "Email Addresses": [
        "bellajy@gmail.com",
        "bschwerdt@bellsouth.net",
        "bschwerdt@attb1.com",
        "gcbschwerdt@mindspring.com",
        "kbschwerdtp2@mindspring.com",
        "xbsch94werdt@mindspring.com",
      ],
      "Property Detail": {
        Bedrooms: "4",
        Bathrooms: "5",
        "Square Feet": "3,407",
        "Year Built": "2020",
        "Estimated Value": "N/A",
        "Estimated Equity": "N/A",
        "Last Sale Amount": "$851,800",
        "Last Sale Date": "09/18/2020",
        "Occupancy Type": "Owner Occupied",
        "Ownership Type": "Individual",
        "Land Use": "Single Family Residential",
        "Property Class": "Residential",
        Subdivision: "Stoneleigh Phase 5b",
        "Lot Square Feet": "24,394",
        APN: "102592",
      },
    },
  ];
  return (
    <SuiBox mb={3}>
      <SuiBox display="flex" justifyContent="space-between" alignItems="center" m={1} pl={1} pr={1}>
        <SuiTypography variant="h6">{title}</SuiTypography>
      </SuiBox>
      <SuiBox backgroundColor={"#3b4151"}>
        {title == "Response Header" && (
          <SuiTypography
            variant="body2"
            component="pre"
            p={2}
            style={{ color: "white", fontSize: "0.8rem" }}
          >
            access-control-allow-credentials: true <br />
            access-control-allow-origin: * <br />
            content-length: 2064
            <br />
            content-type: application/json date: Tue,19 Sep 2023 08:20:56 GMT <br />
            server: uvicorn
          </SuiTypography>
        )}
        {title == "Response Body" && (
          <SuiTypography
            variant="body2"
            component="pre"
            p={2}
            style={{ color: "white", fontSize: "0.8rem" }}
          >
            {JSON.stringify(payload, null, 2)}
          </SuiTypography>
        )}
      </SuiBox>
    </SuiBox>
  );
};

Snippet.defaultProps = {
  title: "",
  codecolor: "white",
};

Snippet.propTypes = {
  title: PropTypes.string,
  codecolor: PropTypes.string,
};

export default Snippet;
