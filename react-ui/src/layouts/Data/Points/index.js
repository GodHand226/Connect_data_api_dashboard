import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Footer from "layouts/authentication/components/Footer";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import StartFree from "examples/StartFree";
import TableData from "./table";
import param from "./data";
function DataPoints() {
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
        <SuiBox mt={10} width="70%" sx={{ py: 10 }}>
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
              Your Gateway to 500M+ Public Data Records
            </SuiTypography>
          </SuiBox>
          <SuiBox p={5} display="flex" justifyContent="center" alignItems="center">
            <SuiTypography vairant="body1" component="p" fontWeight="500" fontSize="24px">
              We&apos;re proud to offer an extensive data repository, comprising over 500 million
              records meticulously sourced from 5,000+ reputable public data sources. Our mission is
              to empower you with invaluable insights and information, helping you make informed
              decisions. Please note that our data access is exclusively available for U.S.
              residents.
              <br />
              <br />
              We believe in transparency, which is why all our data points are provided &quot;as
              available&quot; directly from the public record sources. This means that you get real,
              unfiltered information straight from the most authoritative sources. It&apos;s our
              commitment to accuracy and reliability.
            </SuiTypography>
          </SuiBox>
          <SuiBox mt={3} display="flex" justifyContent="center">
            <SuiBox width={"40%"}>
              <TableData data={param}></TableData>
            </SuiBox>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <StartFree></StartFree>
      <Footer />
    </PageLayout>
  );
}

export default DataPoints;
