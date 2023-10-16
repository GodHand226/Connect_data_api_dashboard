import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "@/widgets/layout";
import routes from "@/routes";

export function Terms() {
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <div className="relative flex h-[32rem] content-center items-center justify-center pt-16">
        <div className="absolute top-0 h-full w-full  bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Terms of Service
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                This is a legal agreement between you and DataAPIConnect, INC. A
                corporation registered in the state of New York and operator of
                the website DataAPIConnect.com. All users of DataAPIConnect.com
                should carefully review these terms. They contain important
                information about legal rights and responsibilities.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-5 w-4/6 p-5">
        <div>
          <div className="my-5">
            <Typography variant="h4">Definitions:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              DATA API CONNECT refers to Data API Connect, Inc., a New York
              corporation that operates the website and API known as
              DataApiConnect.com. It may also be referred to in these Terms as
              the "Site" or "Service" or "DataApiConnect.com".
            </Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              "User" refers to any person or organization using the website
              DataApiConnect.com, or its API, regardless of if during a free
              trial or paid usage, regardless of mode of data delivery including
              but not limited to API delivery, Site data viewer, or third-party
              data distribution platform.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">Business API Users Only:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              DataApiConnect.com is a service for business API users only and is
              not intended for use by the general public or any non-business
              entity. DATA API CONNECT reserves the right to terminate any User
              account if it is discovered the User is not a business API user.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">No Warranties Exist:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              USE OF THIS SITE IS AT USER'S SOLE RISK. ALL CONTENT AND SERVICES
              ARE PROVIDED "AS IS," WITH NO WARRANTIES OR GUARANTEES WHATSOEVER.
              DATA API CONNECT EXPRESSLY DISCLAIMS TO THE FULLEST EXTENT
              PERMITTED BY LAW ALL EXPRESS, IMPLIED, STATUTORY, AND OTHER
              WARRANTIES, GUARANTEES, OR REPRESENTATIONS, INCLUDING, WITHOUT
              LIMITATION, THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, AND NON-INFRINGEMENT OF PROPRIETARY AND
              INTELLECTUAL PROPERTY RIGHTS. WITHOUT LIMITATION, DATA API CONNECT
              MAKES NO WARRANTY OR GUARANTEE THAT THIS SITE WILL BE
              UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE. USER UNDERSTANDS AND
              AGREES THAT ACCESSING THE SERVICE IS AT THE USER’S OWN RISK AND
              DISCRETION AND THAT THE USER IS SOLELY RESPONSIBLE FOR ANY DAMAGES
              THAT MAY RESULT, INCLUDING CLAIMS BY THIRD PARTIES ARISING OUT OF
              USER'S USE OF THE SERVICE.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">Liability:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              IN NO EVENT WILL DATA API CONNECT OR ITS DIRECTORS, EMPLOYEES, OR
              AGENTS BE LIABLE TO YOU OR ANY THIRD PERSON FOR ANY INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING FOR ANY LOST PROFITS OR LOST DATA ARISING FROM
              YOUR USE OF THE SITE. NOTWITHSTANDING ANYTHING TO THE CONTRARY
              CONTAINED HEREIN, THE SITE’S LIABILITY TO YOU FOR ANY CAUSE
              WHATSOEVER, AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL
              TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO THE SITE
              FOR THE SERVICE, BUT IN NO CASE WILL THE SITE’S LIABILITY TO YOU
              EXCEED $100. YOU ACKNOWLEDGE THAT IF NO FEES ARE PAID TO DATA API
              CONNECT FOR THE SERVICE, YOU SHALL BE LIMITED TO INJUNCTIVE RELIEF
              ONLY, UNLESS OTHERWISE PERMITTED BY LAW, AND SHALL NOT BE ENTITLED
              TO DAMAGES OF ANY KIND, REGARDLESS OF THE CAUSE OF ACTION.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">Indemnity:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              USER FURTHER AGREES TO HOLD HARMLESS, DEFEND AND INDEMNIFY DATA
              API CONNECT, AND ITS EMPLOYEES, SUBSIDIARIES, AGENTS, AND
              REPRESENTATIVES, FROM AND AGAINST ANY LIABILITY ARISING FROM OR IN
              ANY WAY RELATED TO YOUR USE OF THE SITE OR PROVISION OF SERVICES,
              INCLUDING ANY LIABILITY OR EXPENSE ARISING FROM ALL CLAIMS,
              LOSSES, DAMAGES (ACTUAL AND CONSEQUENTIAL), SUITS, JUDGMENTS,
              LITIGATION COSTS, AND ATTORNEYS' FEES, OF EVERY KIND AND NATURE,
              INCLUDING THIRD PARTY CLAIMS, KNOWN AND UNKNOWN, FORESEEABLE AND
              UNFORESEEABLE, DISCLOSED AND UNDISCLOSED.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">Fulfillment Policy:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              Refund policy: A Subscriber may request a refund at any time of
              its unused funds by requesting to do so using the site contact
              form. <br />
              <br />
              Delivery policy: All data is delivered via our secure API. We do
              not ship physical products. <br />
              <br />
              Return policy: We do not ship physical products. All of our
              products are data that is delivered by our API. Sorry, we have a
              non-return policy on our data products once delivered. <br />
              <br />
              Cancellation policy: A Subscriber may cancel service at any time
              without penalty by logging in to his account, navigating to My
              Account, then scrolling down to Cancel Account.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">Legal Advice:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              No information appearing on DataApiConnect.com shall be construed
              as legal advice being given by DATA API CONNECT.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">User's Security Obligations:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              User agrees to treat its login credentials as sensitive
              information and will not permit any unauthorized third party from
              accessing the site via the User’s account.
              <br />
              <br />
              User shall regularly monitor its account, and all communications
              occurring thereunder, for any unauthorized use. User must notify
              DATA API CONNECT immediately if they become aware of any actual or
              potential compromise of its account at the Service.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">
              Responsible Use of Public Data:
            </Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              DATA API CONNECT supports the responsible use of public data. User
              shall not employ the Service for any purpose that is unlawful,
              fraudulent, or designed to harass others, including for "doxing"
              and "spamming".
              <br />
              <br />
              User agrees to cooperate with any Service investigation into any
              actual or possible fraudulent, unauthorized, or unlawful activity.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">Errors in Public Record Data:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              DataApiConnect.com, including its API service, re-publishes public
              record information. Errors may and do exist in public record data.
              Correction of the public record data can only be made with the
              originating organization and is not the responsibility of the
              Service. If any person or organization desires to remove an
              incorrect record, it may do so by using the site's Remove My Info
              and Do No Sell My Info (California Residents Only) pages.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">
              Third Party Content and Services:
            </Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              The website Content available includes third party public record
              content that originates or is otherwise authored or published by
              the third parties, completely independent of any review by the
              Website.
              <br />
              <br />
              Inclusion of third party resources on the Website does not imply
              endorsement or approval of any resource. The Service does not
              investigate, review, monitor or otherwise regulate third party
              Content that may appear on the Site, and the Service does not
              warrant the accuracy, completeness or appropriateness of third
              party resources appearing on the Site.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">Fair Credit Reporting Act:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              User acknowledges and agrees that the Site is not a “consumer
              reporting agency” and does not constitute a “consumer report,” as
              defined by The Fair Credit Reporting Act (FCRA) and shall not be
              used for any FCRA regulated purpose by User. The Service may not
              be used in whole or in part as a factor in determining any
              consumer's eligibility for credit, insurance, housing, or
              employment or for any other purpose regulated by the FCRA.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">
              Telephone Consumer Protection Act:
            </Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              DATA API CONNECT assumes no legal liability for any phone records
              mistakenly identified as the wrong linetype including under the
              Telephone Consumer Protection Act and similar Federal and State
              consumer protection laws. DATA API CONNECT cannot guarantee 100%
              accuracy for its telephone linetype identification.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">
              Purchasers of Personal Information of California Consumers:
            </Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              All personal information is sold or disclosed by DATA API CONNECT
              only for limited and specified purposes to wit, data lookups and
              public record research and verification; USER agrees to provide
              the same level of privacy protection as is required by the CCPA
              and CPRA. DATA API CONNECT is granted the right to take reasonable
              and appropriate steps to help ensure that the Assignee uses the
              personal information transferred in a manner consistent with
              obligations under the CCPA and CPRA. USER is required to notify
              DATA API CONNECT if it makes a determination that it can no longer
              meet its obligations under this title. USER grants DATA API
              CONNECT the right, upon notice, to take reasonable and appropriate
              steps to stop and remediate unauthorized use of personal
              information.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">
              Right of the Service to Suspend/Cancel User:
            </Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              DATA API CONNECT reserves the right to stop, suspend or cancel
              service to any User whatsoever with or without due cause and with
              or without advance warning.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">
              Removal of Consumer Information:
            </Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              Any consumer may remove his or her information from appearing on
              the Website at any time by using the site's Remove My Info and Do
              No Sell My Info (California Residents Only) pages.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">
              Site Usage Intended for U.S.Lookups Only:
            </Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              The Service is intended to be used for lookups of data for U.S.
              based consumers and businesses only. It is not intended to be used
              in, or applicable to, persons or businesses outside of the United
              States.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">
              Commercial Solicitation Restriction:
            </Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              Certain public data obtained and re-published by the Service is
              restricted for use for commercial solicitation by the source
              government agency data provider. The Service includes an option
              under the site's My Account section to suppress records coming
              from government agencies who have a known commercial solicitation
              restriction. DATA API CONNECT IS UNABLE TO GUARANTEE THAT THIS
              LIST OF KNOWN COMMERCIAL SOLICITATION DATA SOURCES IS COMPLETE. If
              the User foresees using the Service for commercial solicitation,
              it is the User's responsibility to enable the My Account option to
              suppress these records using the on/off switch labeled "Commercial
              Solicitation Restrictions". Further, if User foresees using any
              data from Service for commercial solicitation, it is User's sole
              duty to comply with all such restrictions on use of data.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">
              Compliance with All State and Federal Data Privacy Laws:
            </Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              User agrees to abide by the terms of the Service's Privacy Policy
              which can be found here: <Link to="/privacy">Privacy Policy</Link>
              . User agrees that it will comply with all federal and State data
              privacy laws and regulations with data it obtains from the
              Service.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">Trademark:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              DataApiConnect.com and Data API Connect are trademarks of the
              Website owners and may not be used without our expressed written
              permission.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">Governing Law:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              Both parties agree that by visiting or using DataApiConnect.com,
              the laws of the State of New York, without regard to principles of
              conflict of laws, will govern these Terms. Any legal disputes
              shall be heard in the state or federal courts located in New York
              County, New York.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">Severability:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              If any provision or portion of these Terms is deemed to be
              unenforceable, that provision of these Terms will be enforced to
              the maximum extent permissible so as to affect the intent of the
              parties, and the remainder of these Terms will continue in full
              force and effect.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">Headings:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              Headings used in these Terms are provided for convenience only and
              shall not be used to construe meaning or intent.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">Waiver:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              The Service's failure to act with respect to a breach of these
              terms by a User does not waive the Service’s right to act with
              respect to subsequent or similar breaches.
            </Typography>
          </div>
        </div>
        <div>
          <div className="my-5">
            <Typography variant="h4">Entirety:</Typography>
          </div>
          <div className="my-5 pl-8">
            <Typography variant="lead">
              These Terms are the entire and sole agreement between DATA API
              CONNECT and User. DATA API CONNECT reserves the right to update or
              modify these Terms from time to time and sole notification and
              publication of the changes will be on this page.
            </Typography>
          </div>
        </div>
      </div>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Terms;
