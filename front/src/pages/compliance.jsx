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
import { Footer, Navbar } from "@/widgets/layout";
import routes from "@/routes";

export function Compliance() {
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <div className="relative flex h-[32rem] content-center items-center justify-center pt-16">
        <div className="absolute top-0 h-full w-full bg-[url('/img/compliance.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Data Compliance
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Data compliance is the process of adhering to laws, regulations,
                and standards governing the collection, storage, use, and
                disclosure of data. It is essential for organizations of all
                sizes to comply with data protection laws, as failure to do so
                can result in severe fines, reputational damage, and even
                criminal prosecution.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-5 w-4/6 p-5">
        <div className="my-5">
          <Typography variant="h4">
            <strong>1. TCPA Overview:</strong>
          </Typography>
          <Typography variant="lead" className="pl-8">
            The Telephone Consumer Protection Act (TCPA) is a federal law
            enacted in 1991 to regulate telemarketing calls, auto-dialing
            systems, pre-recorded messages, and unsolicited text messages. Its
            primary goal is to protect consumers from unwanted and intrusive
            communication.
          </Typography>
        </div>
        <div className="my-5">
          <Typography variant="h4">
            <strong>2. Key Provisions of TCPA:</strong>
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            <strong>Prior Express Consent:</strong>&nbsp; Under TCPA, businesses
            must obtain the prior express written consent of consumers before
            sending telemarketing messages, including text messages or making
            automated calls.
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            <strong>Robocall Restrictions:</strong>&nbsp; TCPA imposes strict
            regulations on the use of automated dialing systems (robocalls) and
            pre-recorded messages. Unsolicited communications of this nature are
            prohibited without consent.
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            <strong>Do-Not-Call List:</strong>&nbsp;TCPA requires telemarketers
            to maintain and honor a &quot;Do-Not-Call&quot; list of consumers
            who have opted out of receiving telemarketing calls.
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            <strong>Time-of-Day Restrictions:</strong>&nbsp;Telemarketing calls
            made outside the hours of 8 a.m. to 9 p.m. (local time of the called
            party) are generally prohibited.
          </Typography>
        </div>
        <div className="my-5">
          <Typography variant="h4">
            <strong>3. Obtaining Prior Express Consent:</strong>
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            Consent must be obtained in writing and include specific language
            detailing the consumer&apos;s agreement to receive automated calls
            or texts.
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            Consent forms should be clear, conspicuous, and not bundled with
            other agreements.
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            Businesses must keep records of consent for at least five years.
          </Typography>
        </div>
        <div className="my-5">
          <Typography variant="h4">
            <strong>4. Robocall Compliance:</strong>
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            Auto-dialing systems must have the capacity to maintain a
            company-specific &quot;Do-Not-Call&quot; list to prevent calls to
            opted-out consumers.
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            Calls must promptly provide the identity of the caller, the purpose
            of the call, and a contact number.
          </Typography>
        </div>
        <div className="my-5">
          <Typography variant="h4">
            <strong>5. Do-Not-Call List:</strong>
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            Telemarketers must access and adhere to the National Do-Not-Call
            Registry maintained by the Federal Trade Commission (FTC).
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            Maintain and honor an internal &quot;Do-Not-Call&quot; list to
            prevent calls to consumers who have requested not to be contacted.
          </Typography>
        </div>
        <div className="my-5">
          <Typography variant="h4">
            <strong>6. Recordkeeping and Compliance:</strong>
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            Businesses should maintain detailed records of consent, including
            the date, time, and manner in which consent was obtained.
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            Regularly audit telemarketing practices to ensure compliance with
            TCPA.
          </Typography>
        </div>
        <div className="my-5">
          <Typography variant="h4">
            <strong>7. Penalties for TCPA Violations:</strong>
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            TCPA violations can result in substantial penalties. Fines can range
            from $500 to $1,500 per violation. Class-action lawsuits are common,
            and settlements can be substantial.
          </Typography>
        </div>
        <div className="my-5">
          <Typography variant="h4">
            <strong>8. Staying Current with TCPA:</strong>
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            Consumer data compliance laws, including TCPA, can change over time
            due to court rulings, regulatory updates, or legislative changes. It
            is essential for businesses to stay current with these developments
            to maintain compliance.
          </Typography>
        </div>
        <div className="my-5">
          <Typography variant="h4">
            <strong>9. Seeking Legal Advice:</strong>
          </Typography>
          <Typography variant="lead" className="py-1 pl-8">
            Given the complexity of TCPA and consumer data compliance, it is
            advisable for businesses to consult with legal counsel experienced
            in telecommunications and privacy laws to ensure full compliance
            with the law.
          </Typography>
        </div>
        <div className="my-5">
          <Typography variant="lead" className="py-1 pl-8">
            In summary, TCPA is a critical component of consumer data compliance
            in the USA, particularly for businesses engaged in telemarketing and
            text messaging. Compliance requires obtaining proper consent,
            adhering to calling restrictions, maintaining
            &quot;Do-Not-Call&quot; lists, and diligent recordkeeping.
            Violations can result in significant penalties, making it crucial
            for businesses to prioritize compliance efforts.
          </Typography>
        </div>
      </div>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Compliance;
