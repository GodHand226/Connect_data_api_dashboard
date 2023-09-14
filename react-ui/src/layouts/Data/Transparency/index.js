import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Footer from "layouts/authentication/components/Footer";
import StartFree from "examples/StartFree";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import Detail from "./detail";
import { Link } from "react-router-dom";
function DataTransparency() {
  return (
    <PageLayout background="white">
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/home",
          label: "free download",
          color: "dark",
        }}
      />
      <SuiBox display="flex" justifyContent="center" alignItems="center">
        <SuiBox mt={10} width="70%" sx={{ py: 10, borderBottom: "1px solid" }}>
          <SuiBox p={3} display="flex" justifyContent="center" alignItems="center">
            <SuiTypography
              vairant="h1"
              component="p"
              textAlign="center"
              fontSize="72px"
              fontWeight="bold"
              textColor="info"
              fontFamily="'Poppins', sans-serif"
              lineHeight="1.3"
            >
              Ensuring Fresh Data Every Time
            </SuiTypography>
          </SuiBox>
          <SuiBox p={5} display="flex" justifyContent="center" alignItems="center">
            <SuiTypography vairant="body1" component="p" fontWeight="500" fontSize="24px">
              We understand the importance of providing our valued users with accurate and
              up-to-date data every time they access our services. To achieve this, we have
              implemented a robust system for managing data duplication and indexing. This ensures
              that when you return to buy more data, you receive only the newest and most relevant
              information.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={5}>
            <SuiTypography vairant="body1" component="p" fontWeight="bold" fontSize="24px">
              How It Works:
            </SuiTypography>
            <Detail
              title={"1. User-Specific Index:"}
              description="When you make your first purchase, we assign you a unique identifier. This identifier is your passport to accessing data seamlessly in the future."
            ></Detail>
            <Detail
              title={"2.	Storing Data with Unique IDs:"}
              description="Every data record we receive from our sources is associated with a unique identifier. This identifier combines your user-specific index with a record-specific ID or timestamp."
            ></Detail>
            <Detail
              title={"3.	Handling Duplicate Data:"}
              description="When you return to buy more data, simply provide your user-specific index in the API request. We check our database to determine the last unique identifier or timestamp associated with your account."
            ></Detail>
            <Detail
              title={"4.	No Duplicate Data:"}
              description="With this information, we ensure that you receive only the new data records, those with identifiers or timestamps greater than the last one you received. This means you never have to worry about getting duplicate data."
            ></Detail>
          </SuiBox>
          <SuiBox p={5}>
            <SuiTypography vairant="body1" component="p" fontWeight="bold" fontSize="24px">
              Why It Matters:
            </SuiTypography>
            <Detail
              title={"•	Accuracy: "}
              description="Our system ensures that you always have the most accurate and up-to-date information at your fingertips."
            ></Detail>
            <Detail
              title={"•	Efficiency: "}
              description="You get the data you need without sifting through duplicates, saving you time and resources."
            ></Detail>
            <Detail
              title={"•	Confidence: "}
              description="With our data management system, you can trust the reliability of the information you receive."
            ></Detail>
          </SuiBox>
          <SuiBox p={5} display="flex" justifyContent="center" alignItems="center">
            <SuiTypography vairant="body1" component="p" fontWeight="500" fontSize="24px">
              We are committed to delivering a seamless and efficient data experience for our users.
              <br />
              Our data duplication and indexing strategy is just one way we strive to exceed your
              expectations.
              <br />
              <br />
              If you have any questions or need further assistance, please don&apos;t hesitate
              to&nbsp;
              <Link>Contact Us</Link>. We are here to ensure your data needs are met with
              excellence.
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <StartFree></StartFree>
      <Footer />
    </PageLayout>
  );
}

export default DataTransparency;
