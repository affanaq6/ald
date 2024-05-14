import React from "react";
import SubHeader from "../components/SubHeader/SubHeader.jsx";
import FrontDashboard from "../components/FrontDashboard/FrontDashboard";
import EditBar from "../components/EditBar/EditBar.jsx";
import RearDashboard from "../components/RearDashboard/RearDashboard";
import styles from "./IndexPage.module.css"; // Ensure correct import path
import SidePanel from "../components/SidePanel/SidePanel";

const IndexPage = () => {
   return (
      <div>
         <SubHeader />
         <FrontDashboard />
         <EditBar />
         <SidePanel />
         <div className={styles.scrollableText}>
            <h3 className={styles.centered}>
              2003 (4) ALD 6<br />
              IN THE HIGH COURT OF JUDICATURE OF ANDHRA PRADESH AT HYDERABAD
              <br /><br /><br />
              V.V.S. RAO, J.
              <br /><br /><br />
              2nd May,2023
              <br /><br /><br />
              WP No.1180 of WP No. 711,WP No. 1519 of WP No. 711,WP No. 6218 of WP No. 711
              <br /><br />
              Ch. Madan Mohan and others v. Municipal Corporation of Hyderabad and another
              <br />
              Greater Hyderabad Municipal Corporation Act 1955 - Sections 586(5) and 586(48) - Levy of parking fees in parking area of commercial complexes by the owners or by the builders thereof - Illegal - Corporations empowered to make bye-laws to regulate the use of public parking places - Builders of commercial complexes are given more percentage of FAR to provide enough parking area - A builder or owner cannot claim ownership for the said parking area - In the circumstances they cannot charge parking fees for the vehicles entering and stationing into the parking area
            </h3>
            <p>
              Builders/owners of commercial complexes or owners of apartments in a commercial complex have no absolute right to lease out or licence out parking areas to the petitioners. Such leasing or alienation is prohibited by the Apartments Act as well as various rules and regulations. Further in case of residential multi-storeyed buildings, it is always permissible for the associations of apartment owners to regulate, without any extra charges, the enjoyment of common areas and common places by arriving at a consensus and conditions to be complied with by the users for availing such facilities. Insofar as multi-storeyed commercial complexes are concerned, the builder/owner under law has impliedly accepted by reason of building permission and other provisions to keep parking places for the use by visitors to the complex and hence builders/owners or their licensees cannot charge any fees. [Para 32]

              Petitioner Counsel: A. Ramnarayana,Mr. P. Gopalakrishna,Mr. C. Ramachandra Raju,Mr. D. Ramakrishna

              Respondent Counsel:Mr. Ghanta Rama Rao,Mr. Ramesh Ranganadhan

              Cases Cited:
              Governors of the Peabody Donation Fund v. Sir Lindsay Parkinson & Co. Ltd., (1983) All ER 417 [Para 19]
              K.R. Shenoy v. Udipi Municipality, AIR 1974 SC 2177 [Para 31]
              T.Damodhar Rao v. S.O., Municipal Corpn., Hyderabad, AIR 1987 AP 171 [Para
            </p>
            <p>
              JUDGMENT

              common Order :-An interesting question as to authority and power of the Municipal Corporation of Hyderabad (MCH) to regulate the parking area and levy parking fee on vehicles parked thereat inside a private commercial complex falls for consideration in these writ petitions. Therefore, all the writ petitions are being disposed of by this common order

              2.The petitioners claim to be agreement holders/licensees for collection of parking fee from the visitors in commercial complexes like Amrutha Mall, Rahmat Complex, Aditya Enclave, Navakethan Building, White House and Divyashakthi Apartments. it is their case that as per the agreement/contract they have exclusive privilege of collecting parking fee from visitors who come to the commercial complex for their business as well as other needs. In most of the cases, it is valid for a period of one to two years and the licensee is entitled to collect parking fee on four wheelers and two wheelers as stipulated in the agreement. It is the case of the petitioners that they have parted with substantial amounts as security deposit and they are required to pay substantial amount as rental. The details as to when various complexes were constructed by a person or organisation or builders; as to when the owners of various shops/units formed into an association and the objectives of such association are not forthcoming in the pleadings
            </p>
          </div>
         <RearDashboard />
      </div>
   );
};

export default IndexPage;
