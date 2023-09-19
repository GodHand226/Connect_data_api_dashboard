import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Footer from "layouts/authentication/components/Footer";
// import DescriptionBox from "examples/DescriptionBox";
import StartFree from "examples/StartFree";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function DataCompliance() {
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
          <SuiBox p={3} mb={3} display="flex" justifyContent="center" alignItems="center">
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
              Data Compliance
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>1. TCPA Overview:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              The Telephone Consumer Protection Act (TCPA) is a federal law enacted in 1991 to
              regulate telemarketing calls, auto-dialing systems, pre-recorded messages, and
              unsolicited text messages. Its primary goal is to protect consumers from unwanted and
              intrusive communication.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>2. Key Provisions of TCPA:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              <strong>Prior Express Consent:</strong>&nbsp; Under TCPA, businesses must obtain the
              prior express written consent of consumers before sending telemarketing messages,
              including text messages or making automated calls.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              <strong>Robocall Restrictions:</strong>&nbsp; TCPA imposes strict regulations on the
              use of automated dialing systems (robocalls) and pre-recorded messages. Unsolicited
              communications of this nature are prohibited without consent.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              <strong>Do-Not-Call List:</strong>&nbsp;TCPA requires telemarketers to maintain and
              honor a &quot;Do-Not-Call&quot; list of consumers who have opted out of receiving
              telemarketing calls.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              <strong>Time-of-Day Restrictions:</strong>&nbsp;Telemarketing calls made outside the
              hours of 8 a.m. to 9 p.m. (local time of the called party) are generally prohibited.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>3. Obtaining Prior Express Consent:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              Consent must be obtained in writing and include specific language detailing the
              consumer&apos;s agreement to receive automated calls or texts.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              Consent forms should be clear, conspicuous, and not bundled with other agreements.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              Businesses must keep records of consent for at least five years.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>4. Robocall Compliance:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              Auto-dialing systems must have the capacity to maintain a company-specific
              &quot;Do-Not-Call&quot; list to prevent calls to opted-out consumers.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              Calls must promptly provide the identity of the caller, the purpose of the call, and a
              contact number.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>5. Do-Not-Call List:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              Telemarketers must access and adhere to the National Do-Not-Call Registry maintained
              by the Federal Trade Commission (FTC).
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              Maintain and honor an internal &quot;Do-Not-Call&quot; list to prevent calls to
              consumers who have requested not to be contacted.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>6. Recordkeeping and Compliance:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              Businesses should maintain detailed records of consent, including the date, time, and
              manner in which consent was obtained.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              Regularly audit telemarketing practices to ensure compliance with TCPA.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>7. Penalties for TCPA Violations:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              TCPA violations can result in substantial penalties. Fines can range from $500 to
              $1,500 per violation. Class-action lawsuits are common, and settlements can be
              substantial.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>8. Staying Current with TCPA:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              Consumer data compliance laws, including TCPA, can change over time due to court
              rulings, regulatory updates, or legislative changes. It is essential for businesses to
              stay current with these developments to maintain compliance.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>9. Seeking Legal Advice:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              Given the complexity of TCPA and consumer data compliance, it is advisable for
              businesses to consult with legal counsel experienced in telecommunications and privacy
              laws to ensure full compliance with the law.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body2" component="p" pl={2} py={1}>
              In summary, TCPA is a critical component of consumer data compliance in the USA,
              particularly for businesses engaged in telemarketing and text messaging. Compliance
              requires obtaining proper consent, adhering to calling restrictions, maintaining
              &quot;Do-Not-Call&quot; lists, and diligent recordkeeping. Violations can result in
              significant penalties, making it crucial for businesses to prioritize compliance
              efforts.
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <StartFree></StartFree>
      <Footer />
    </PageLayout>
  );
}

export default DataCompliance;
