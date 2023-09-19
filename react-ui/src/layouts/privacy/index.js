import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Footer from "layouts/authentication/components/Footer";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function Privacy() {
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
              Privacy
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body2" component="p" pl={2}>
              We prioritize the protection of consumer data and are committed to complying with
              relevant data protection and privacy laws. We clearly outline how we collect, store,
              and utilize consumer data on our website. This includes specifying the purposes for
              which the data is collected and used, as well as any third parties with whom it may be
              shared. We also explain how we obtain consent from individuals for data collection and
              usage and provide options for individuals to opt out or unsubscribe from marketing
              communications. We take data security seriously and have implemented robust measures
              to protect consumer data from unauthorized access, breaches, or misuse. We provide
              details on the security practices we have in place to safeguard the data we collect.
              We are committed to complying with all applicable laws and regulations governing data
              privacy, consumer protection, and marketing practices. We emphasize our adherence to
              legal requirements and best practices to ensure transparency and compliance in all
              aspects of our operations. We believe in transparency and provide individuals with
              clear information on how they can access, update, or request the deletion of their
              personal data. We provide contact information for individuals to reach out to us with
              any privacy-related concerns or inquiries. If our services are not intended for
              individuals below a certain age, we clearly state the minimum age requirement. We
              implement measures to verify user ages and ensure compliance with legal requirements.
              If we share consumer data with third parties, we disclose the types of organizations
              or entities involved and the purposes of such sharing. We emphasize our commitment to
              data protection when collaborating with external parties. If we engage in marketing
              activities, we ensure compliance with relevant marketing laws. We provide clear
              opt-out mechanisms for direct marketing communications and adhere to specific
              requirements for telemarketing or electronic communications, as mandated by applicable
              laws. To limit our responsibility for any damages or losses arising from the use of
              our services or reliance on the information provided, we include a disclaimer of
              liability clause. This clause helps define the extent of our liability and user
              responsibilities when interacting with our services.
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <Footer />
    </PageLayout>
  );
}

export default Privacy;
