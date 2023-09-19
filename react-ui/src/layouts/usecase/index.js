import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Footer from "layouts/authentication/components/Footer";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function UseCase() {
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
          <SuiBox p={3} mb={7} display="flex" justifyContent="center" alignItems="center">
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
              Use Cases
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body2" component="p" pl={2} pb={2}>
              1. Creating targeted marketing campaigns by building custom lists based on consumer
              demographics.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={2}>
              2. Generating leads by building custom lists of potential customers based on specific
              criteria.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={2}>
              3. Personalizing communication by building custom lists that cater to specific
              consumer interests or preferences.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={2}>
              4. Conducting market research by building custom lists of consumers for survey or
              feedback purposes.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={2}>
              5. Segmenting customers for tailored promotions and offers by building custom lists
              based on purchase history or behavior.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={2}>
              6. Building custom lists for competitor analysis to understand consumer preferences in
              the market.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={2}>
              7. Enhancing customer profiling and segmentation by building custom lists with
              detailed consumer data.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={2}>
              8. Building custom lists for customer retention and loyalty programs to engage and
              retain existing customers.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={2}>
              9. Generating prospect lists for sales teams by building custom lists of potential
              clients or customers.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={2}>
              10. Building custom lists for geographic targeting, allowing businesses to focus on
              specific regions or areas for marketing and sales efforts.
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <Footer />
    </PageLayout>
  );
}

export default UseCase;
