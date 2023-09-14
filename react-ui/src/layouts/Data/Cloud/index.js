import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Footer from "layouts/authentication/components/Footer";
// import DescriptionBox from "examples/DescriptionBox";
import StartFree from "examples/StartFree";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function DataCloud() {
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
              Unleash the Power of Our Public Data Cloud
            </SuiTypography>
          </SuiBox>
          <SuiBox p={5} display="flex" justifyContent="center" alignItems="center">
            <SuiTypography vairant="body1" component="p" fontWeight="500" fontSize="24px">
              We&apos;re proud to introduce our revolutionary Public Data Cloud — your gateway to a
              wealth of information sourced from trusted Federal, State, and Local Government
              Agencies, as well as a treasure trove of Non-Government Public Data, including
              Telephone Listings and WHOIS Records. With billions of records at your fingertips, our
              cloud is designed to be your go-to destination for accurate and up-to-the-minute data.
              <br />
              <br />
              Our commitment to accuracy and trust begins with partnering with established Federal,
              State, and Local Government Agencies. Rest easy knowing that the data you access is
              sourced directly from authoritative and reliable sources, ensuring that you make
              informed decisions with confidence.
              <br />
              <br />
              We don&apos;t stop at government data. Our Public Data Cloud extends its reach to
              encompass Non-Government Public Data, such as Telephone Listings. Access the most
              comprehensive, up-to-date information available, so you can connect with individuals
              and businesses seamlessly. <br />
              <br />
              Navigating the digital landscape has never been easier. Our cloud includes trusted
              Non-Government Public Data like WHOIS Records, allowing you to unravel the intricate
              web of online domains and ownership information with unparalleled precision.
              <br />
              <br />
              Our Public Data Cloud boasts an immense repository of data, offering you access to
              billions of records. What is more, we have optimized it to be one screaming fast
              cloud! Say goodbye to sluggish data retrieval and welcome real-time access to the
              information you need.
              <br />
              <br />
              Whether you are a researcher, business professional, or data enthusiast, our Public
              Data Cloud is your passport to accurate, reliable, and lightning-fast data. Discover
              the possibilities, make data-driven decisions, and experience the future of data
              access today!
              <br />
              <br />
              Ready to embark on your data journey? Join us.
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <StartFree></StartFree>
      <Footer />
    </PageLayout>
  );
}

export default DataCloud;
