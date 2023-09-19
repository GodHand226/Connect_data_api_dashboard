import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Footer from "layouts/authentication/components/Footer";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function Terms() {
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
              Terms of Service
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body2" component="p" pl={2}>
              THIS IS A LEGAL AGREEMENT BETWEEN YOU AND DATA API CONNECT, INC, A CORPORATION
              REGISTERED IN THE STATE OF NEW YORK AND OPERATOR OF THE WEBSITE DATAAPICONNECT.COM.
              ALL USERS OF DATAAPICONNECT.COM SHOULD CAREFULLY REVIEW THESE TERMS. THEY CONTAIN
              IMPORTANT INFORMATION ABOUT LEGAL RIGHTS AND RESPONSIBILITIES.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body2" component="p" pl={2}>
              Use of DataApiConnect.com is on the condition of the User&apos;s acceptance and
              adherence to these Terms:
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>DEFINITIONS:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={1}>
              DATA API CONNECT refers to Data API Connect, Inc, a New York corporation that operates
              the website and API known as DataApiConnect.com. It may also be referred to in these
              Terms as the “Site” or “Service” or “DataApiConnect.com”.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={1}>
              &quot;User&quot; refers to any person or organization using the website
              DataApiConnect.com, or its API, regardless of if during a free trial or paid usage,
              regardless of mode of data delivery including but not limited to API delivery, Site
              data viewer, or third-party data distribution platform.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>BUSINESS API USERS ONLY:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              DataApiConnect.com is a service for business API users only and is not intended for
              use by the general public or any non-business entity. DATA API CONNECT reserves the
              right to terminate any User account if it is discovered the User is not a business API
              user.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>NO WARRANTIES EXIST:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              USE OF THIS SITE IS AT USER&apos;S SOLE RISK. ALL CONTENT AND SERVICES ARE PROVIDED
              &quot;AS IS,&quot; WITH NO WARRANTIES OR GUARANTEES WHATSOEVER. DATA API CONNECT
              EXPRESSLY DISCLAIMS TO THE FULLEST EXTENT PERMITTED BY LAW ALL EXPRESS, IMPLIED,
              STATUTORY, AND OTHER WARRANTIES, GUARANTEES, OR REPRESENTATIONS, INCLUDING, WITHOUT
              LIMITATION, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT OF PROPRIETARY AND INTELLECTUAL PROPERTY RIGHTS. WITHOUT LIMITATION,
              DATA API CONNECT MAKES NO WARRANTY OR GUARANTEE THAT THIS SITE WILL BE UNINTERRUPTED,
              TIMELY, SECURE, OR ERROR-FREE. USER UNDERSTANDS AND AGREES THAT ACCESSING THE SERVICE
              IS AT THE USER&apos;S OWN RISK AND DISCRETION AND THAT THE USER IS SOLELY RESPONSIBLE
              FOR ANY DAMAGES THAT MAY RESULT, INCLUDING CLAIMS BY THIRD PARTIES ARISING OUT OF
              USER&apos;S USE OF THE SERVICE.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>LIABILITY:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              IN NO EVENT WILL DATA API CONNECT OR ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO
              YOU OR ANY THIRD PERSON FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL,
              SPECIAL, OR PUNITIVE DAMAGES, INCLUDING FOR ANY LOST PROFITS OR LOST DATA ARISING FROM
              YOUR USE OF THE SITE. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, THE
              SITE&apos;S LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER, AND REGARDLESS OF THE FORM OF
              THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO THE
              SITE FOR THE SERVICE, BUT IN NO CASE WILL THE SITE&apos;S LIABILITY TO YOU EXCEED
              $100. YOU ACKNOWLEDGE THAT IF NO FEES ARE PAID TO DATA API CONNECT FOR THE SERVICE,
              YOU SHALL BE LIMITED TO INJUNCTIVE RELIEF ONLY, UNLESS OTHERWISE PERMITTED BY LAW, AND
              SHALL NOT BE ENTITLED TO DAMAGES OF ANY KIND, REGARDLESS OF THE CAUSE OF ACTION.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>INDEMNITY:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              USER FURTHER AGREES TO HOLD HARMLESS, DEFEND AND INDEMNIFY DATA API CONNECT, AND ITS
              EMPLOYEES, SUBSIDIARIES, AGENTS, AND REPRESENTATIVES, FROM AND AGAINST ANY LIABILITY
              ARISING FROM OR IN ANY WAY RELATED TO YOUR USE OF THE SITE OR PROVISION OF SERVICES,
              INCLUDING ANY LIABILITY OR EXPENSE ARISING FROM ALL CLAIMS, LOSSES, DAMAGES (ACTUAL
              AND CONSEQUENTIAL), SUITS, JUDGMENTS, LITIGATION COSTS, AND ATTORNEYS&apos; FEES, OF
              EVERY KIND AND NATURE, INCLUDING THIRD PARTY CLAIMS, KNOWN AND UNKNOWN, FORESEEABLE
              AND UNFORESEEABLE, DISCLOSED AND UNDISCLOSED.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>FULFILLMENT POLICY:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={1}>
              Refund policy: A Subscriber may request a refund at any time of its unused funds by
              requesting to do so using the site contact form.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={1}>
              Delivery policy: All data is delivered via our secure API. We do not ship physical
              products.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={1}>
              Return policy: We do not ship physical products. All of our products are data that is
              delivered by our API. Sorry, we have a non-return policy on our data products once
              delivered.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={1}>
              Cancellation policy: A Subscriber may cancel service at any time without penalty by
              logging in to his account, navigating to My Account, then scrolling down to Cancel
              Account.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>LEGAL ADVICE:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              No information appearing on DataApiConnect.com shall be construed as legal advice
              being given by DATA API CONNECT.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>USER&apos;S SECURITY OBLIGATIONS:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={1}>
              User agrees to treat its login credentials as sensitive information and will not
              permit any unauthorized third party from accessing the site via the User&apos;s
              account.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={1}>
              User shall regularly monitor its account, and all communications occurring thereunder,
              for any unauthorized use. User must notify DATA API CONNECT immediately if they become
              aware of any actual or potential compromise of its account at the Service.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>RESPONSIBLE USE OF PUBLIC DATA:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={1}>
              DATA API CONNECT supports the responsible use of public data. User shall not employ
              the Service for any purpose that is unlawful, fraudulent, or designed to harass
              others, including for &quot;doxing&quot; and &quot;spamming&quot;.
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2} pb={1}>
              User agrees to cooperate with any Service investigation into any actual or possible
              fraudulent, unauthorized, or unlawful activity.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>ERRORS IN PUBLIC RECORD DATA:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              DataApiConnect.com, including its API service, re-publishes public record information.
              Errors may and do exist in public record data. Correction of the public record data
              can only be made with the originating organization and is not the responsibility of
              the Service. If any person or organization desires to remove an incorrect record, it
              may do so by using the site&apos;s Remove My Info and Do No Sell My Info (California
              Residents Only) pages.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>IDENTITY THEFT AND MISTAKEN IDENTITY:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              Information contained at the Site about any given consumer or entity may be the result
              of identity theft and may not reflect a consumer or entity&apos;s actual record or
              activity. In addition, people with the same or similar names can and do exist. IT IS
              THE RESPONSIBILITY OF USER TO KNOW AND VERIFY ANY RECORD USED FROM THE SERVICE IS FOR
              THE RIGHT PARTY AND IS NOT THE RESULT OF IDENTITY THEFT OR MIS-IDENTIFICATION.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>THIRD PARTY CONTENT AND SERVICES:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              The website Content available includes third party public record content that
              originates or is otherwise authored or published by the third parties, completely
              independent of any review by the Website. Inclusion of third party resources on the
              Website does not imply endorsement or approval of any resource. The Service does not
              investigate, review, monitor or otherwise regulate third party Content that may appear
              on the Site, and the Service does not warrant the accuracy, completeness or
              appropriateness of third party resources appearing on the Site.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>FAIR CREDIT REPORTING ACT:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              User acknowledges and agrees that the Site is not a “consumer reporting agency” and
              does not constitute a “consumer report,” as defined by The Fair Credit Reporting Act
              (FCRA) and shall not be used for any FCRA regulated purpose by User. The Service may
              not be used in whole or in part as a factor in determining any consumer&apos;s
              eligibility for credit, insurance, housing, or employment or for any other purpose
              regulated by the FCRA.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>TELEPHONE CONSUMER PROTECTION ACT:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              DATA API CONNECT assumes no legal liability for any phone records mistakenly
              identified as the wrong linetype including under the Telephone Consumer Protection Act
              and similar Federal and State consumer protection laws. DATA API CONNECT cannot
              guarantee 100% accuracy for its telephone linetype identification.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>PURCHASERS OF PERSONAL INFORMATION OF CALIFORNIA CONSUMERS:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              All personal information is sold or disclosed by DATA API CONNECT only for limited and
              specified purposes to wit, data lookups and public record research and verification;
              USER agrees to provide the same level of privacy protection as is required by the CCPA
              and CPRA. DATA API CONNECT is granted the right to take reasonable and appropriate
              steps to help ensure that the Assignee uses the personal information transferred in a
              manner consistent with obligations under the CCPA and CPRA. USER is required to notify
              DATA API CONNECT if it makes a determination that it can no longer meet its
              obligations under this title. USER grants DATA API CONNECT the right, upon notice, to
              take reasonable and appropriate steps to stop and remediate unauthorized use of
              personal information.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>RIGHT OF THE SERVICE TO SUSPEND/CANCEL USER:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              DATA API CONNECT reserves the right to stop, suspend or cancel service to any User
              whatsoever with or without due cause and with or without advance warning.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>REMOVAL OF CONSUMER INFORMATION:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              Any consumer may remove his or her information from appearing on the Website at any
              time by using the site&apos;s Remove My Info and Do No Sell My Info (California
              Residents Only) pages.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>SITE USAGE INTENDED FOR U.S. LOOKUPS ONLY:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              The Service is intended to be used for lookups of data for U.S. based consumers and
              businesses only. It is not intended to be used in, or applicable to, persons or
              businesses outside of the United States.
            </SuiTypography>
          </SuiBox>

          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>COMMERCIAL SOLICITATION RESTRICTION:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              Certain public data obtained and re-published by the Service is restricted for use for
              commercial solicitation by the source government agency data provider. The Service
              includes an option under the site&apos;s My Account section to suppress records coming
              from government agencies who have a known commercial solicitation restriction. DATA
              API CONNECT IS UNABLE TO GUARANTEE THAT THIS LIST OF KNOWN COMMERCIAL SOLICITATION
              DATA SOURCES IS COMPLETE. If the User foresees using the Service for commercial
              solicitation, it is the User&apos;s responsibility to enable the My Account option to
              suppress these records using the on/off switch labeled &quot;Commercial Solicitation
              Restrictions&quot;. Further, if User foresees using any data from Service for
              commercial solicitation, it is User&apos;s sole duty to comply with all such
              restrictions on use of data.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>COMPLIANCE WITH ALL STATE AND FEDERAL DATA PRIVACY LAWS:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              User agrees to abide by the terms of the Service&apos;s Privacy Policy which can be
              found here: [Privacy Policy Link]. User agrees that it will comply with all federal
              and State data privacy laws and regulations with data it obtains from the Service.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>TRADEMARK:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              DataApiConnect.com and Data API Connect are trademarks of the Website owners and may
              not be used without our expressed written permission.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>GOVERNING LAW:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              Both parties agree that by visiting or using DataApiConnect.com, the laws of the State
              of New York, without regard to principles of conflict of laws, will govern these
              Terms. Any legal disputes shall be heard in the state or federal courts located in New
              York County, New York.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>SEVERABILITY:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              If any provision or portion of these Terms is deemed to be unenforceable, that
              provision of these Terms will be enforced to the maximum extent permissible so as to
              affect the intent of the parties, and the remainder of these Terms will continue in
              full force and effect.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>HEADINGS:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              Headings used in these Terms are provided for convenience only and shall not be used
              to construe meaning or intent.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>WAIVER:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              The Service&apos;s failure to act with respect to a breach of these terms by a User
              does not waive the Service&apos;s right to act with respect to subsequent or similar
              breaches.
            </SuiTypography>
          </SuiBox>
          <SuiBox p={2}>
            <SuiTypography vairant="body1" component="p">
              <strong>ENTIRETY:</strong>
            </SuiTypography>
            <SuiTypography vairant="body2" component="p" pl={2}>
              These Terms are the entire and sole agreement between DATA API CONNECT and User. DATA
              API CONNECT reserves the right to update or modify these Terms from time to time and
              sole notification and publication of the changes will be on this page.
            </SuiTypography>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <Footer />
    </PageLayout>
  );
}

export default Terms;
