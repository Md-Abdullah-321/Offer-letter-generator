import Logo from "../assets/logo.jpg";
import Signature from "../assets/signature.jpg";

const candidate = JSON.parse(localStorage.getItem("candidate"));
function OfferLetter() {
  const pdfStyles = {
    fontSize: "5px", // Adjust font size as needed
    lineHeight: "1.1", // Adjust line spacing
    margin: 0, // Remove margins
  };

  return (
    <div style={pdfStyles} className="p-2">
      <div className="flex justify-between items-center text-slate-700">
        <div className="w-1/12">
          <img src={Logo} alt="logo" className="w-20 h-16" />{" "}
        </div>
        {/* middle content  */}{" "}
        <div className="w-5/12 text-center">
          {" "}
          <h3 className="font-semibold">Suvidha Mahila Mandal, Walni </h3>
          <p className="">Registration No. MH/568/1995</p>
          <p className="">F No.12669</p>{" "}
          <p className="">Registerd Under the Society Act of 1860</p>{" "}
        </div>
        {/* right content  */}{" "}
        <div className="w-5/12">
          {" "}
          <p>
            H.No. 1951, W.N.4, Khaperkheda, Saoner, Nagpur, Maharashtra, India{" "}
          </p>
          <p>Contact:(+91)08010996763</p>
          <a href="">info@suvidhafoundationedutech.Org</a> <br />
          <a href="">www.suvidhafoundationedutech.org</a>
          <p>www.codekaroyaro.com</p>{" "}
        </div>
      </div>
      <hr className="my-1" />

      <div className="flex justify-between font-semibold">
        <p>
          Date: {new Date().getDate()}-{new Date().getMonth()}-
          {new Date().getFullYear()}
        </p>
        <p>Ref.No.{candidate.ref}</p>
      </div>

      <h3 className="text-center font-semibold">INTERNSHIP: OFFER LETTER</h3>
      <h4 className="font-semibold">
        To, <br /> {candidate.name}
      </h4>

      <p className="my-1">
        With reference to your interview, we are pleased to inform you that you
        have been selected as{" "}
        <span className="font-semibold">“{candidate.field}”</span> in our NGO -
        “Suvidha Mahila Mandal,” with the following terms and conditions.
      </p>

      <ul className="mx-5">
        <li className="list-disc">
          You will provide the Fundraising Services to SUVIDHA FOUNDATION and
          deliver the effect of the work.
        </li>
        <li className="list-disc">
          The internship period will be from{" "}
          <span className="font-semibold">{candidate.startDate}</span> to{" "}
          <span className="font-semibold">{candidate.endDate}</span>.
        </li>
        <li className="list-disc">
          Your work base station is work from the office and six days a week.
        </li>
        <li className="list-disc">
          It is a paid Internship. The certificate of completion will be given
          only if you invest 6 hours daily on all working days. You must
          participate in the daily team meetings through Google Meet. Also, the
          letter holds no value without a completion certificate from us with a
          unique identification number, which can be verified online.
        </li>
        <li className="list-disc">
          During the internship period and thereafter, you will not give out to
          anyone in writing or by word of mouth or otherwise particulars or
          details of work process, technical know-how, research carried out,
          security arrangements and/or matters of confidential or secret nature
          which you may come across during your service in this organization.
        </li>
        <li className="list-disc">
          In case of any misconduct which causes financial loss to the NGO or
          hurts its reputation and goodwill of the organization, the management
          has the right to terminate any intern. In case of termination, the
          management will not be issuing certificates to the intern.
        </li>
        <li>
          It is necessary for an intern to return all the organization
          belongings (login credentials, media created, and system) at the time
          of leaving the organization. A clearance and experience certificate
          will be given after completing the formalities. If any employee leaves
          the job/Internship without completing the formality, the organization
          will take necessary action. All the software/courses/data developed by
          the interns or any employee for the Suvidha Mahila Mandal are
          intellectual property of the organization & are protected by Indian
          Copyright Act. All the data generated during the internship period, is
          the property right of organization and can be used for any purpose. In
          case of any piracy, strict legal action will be taken by the
          organization against erring persons. No information or source codes or
          course curriculum or business secrets or financial position or other
          details of organization shall be discussed among friends or relatives
          or our competitors. Such leakage of information is likely to cause
          financial loss to the organization. Hence, in such a case, the
          organization will be terminating the employee immediately and if
          required, further legal action will be taken against that intern.
        </li>
      </ul>

      <p className="mt-1">
        <img src={Signature} alt="signature" className="w-24" />
      </p>

      <p className="text-start max-w-20">
        <span className="mx-auto">Mrs. Shobha Motghare</span> <br />
        <span>Secretary, Suvidha Mahila Mandal</span>
      </p>
    </div>
  );
}

import { PDFExport } from "@progress/kendo-react-pdf";
import React from "react";

const Generator = () => {
  let pdfExportComponent;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-3 max-w-2xl bg-slate-100">
        <PDFExport
          paperSize="A4"
          fileName={candidate.name + ".pdf"}
          ref={(component) => (pdfExportComponent = component)}
        >
          <OfferLetter />
        </PDFExport>
        <button
          onClick={() => {
            if (pdfExportComponent) {
              pdfExportComponent.save();
            }
          }}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Generator;
