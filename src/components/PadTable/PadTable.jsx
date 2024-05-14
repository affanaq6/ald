import React from "react";
import Styles from "./PadTable.module.css"; // Ensure this import points to the correct file

function PadTable() {
  return (

<div  className={Styles.tableContainer}>
  <table>
    <thead>
      <tr>
        <th>SL</th>
        <th>DOJ</th>
        <th>Citation</th>
        <th>Parties</th>
        <th>Court</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>05-06-2023</td>
        <td>2024 (1) ALD 596 (TS)</td>
        <td>Balaramudu V. APSRTC, Musheerabad, Hyderabad and another</td>
        <td>TE</td>
      </tr>
      <tr>
        <td>2</td>
        <td>11-09-2023</td>
        <td>2024 (1) ALD 480 (TS)</td>
        <td>Dr. M.A. Saif Ali V. State of Telangana and others</td>
        <td>TEI</td>
      </tr>
      <tr>
        <td>3</td>
        <td>13-12-2022</td>
        <td>2024 (1) ALD (Crl.) 330 (TS)</td>
        <td>Seni Thirupathi and another V. State of Telangana and another</td>
        <td>TEI</td>
      </tr>
      <tr>
        <td>4</td>
        <td>10-03-2023</td>
        <td>2024 (1) ALD (Crl.) 317 (TS)</td>
        <td>Ponnuru Venkata Srihari V. State of Telangana and another</td>
        <td>TEI</td>
      </tr>
      <tr>
        <td>5</td>
        <td>13-10-2023</td>
        <td>2024 (1) ALD (Crl.) 231 (AP)</td>
        <td>Kotakonda Dharmaiah V. State of Andhra Pradesh</td>
        <td>AN</td>
      </tr>
      <tr>
        <td>6</td>
        <td>14-09-2023</td>
        <td>2023 (6) ALD 170 (AP) (DB)</td>
        <td>Ch. China Galaiah V. Inspector General of Police, Guntur and another</td>
        <td>AN</td>
      </tr>
      <tr>
        <td>7</td>
        <td>28-02-2023</td>
        <td>2023 (5) ALD 204 (TS) (DB)</td>
        <td>GAIL (India) Ltd., New Delhi and others V. Dr. Duraisamy Baskaran</td>
        <td>TEI</td>
      </tr>
      <tr>
        <td>8</td>
        <td>23-08-2023</td>
        <td>2023 (5) ALD 147 (SC)</td>
        <td>Dariyao Kanwar and others V. United India Insurance Co. Ltd. and another</td>
        <td>SU</td>
      </tr>
      <tr>
        <td>9</td>
        <td>31-01-2023</td>
        <td>2023 (2) ALD (Crl.) 993 (TS)</td>
        <td>Bongarala Subhash V. State of Andhra Pradesh</td>
        <td>TEI</td>
      </tr>
      <tr>
        <td>10</td>
        <td>04-07-2023</td>
        <td>2023 (2) ALD (Crl.) 968 (TS)</td>
        <td>Kaka Venkateswar Rao V. State of Andhra Pradesh</td>
        <td>TEI</td>
      </tr>
      <tr>
        <td>11</td>
        <td>13-07-2023</td>
        <td>2023 (2) ALD (Crl.) 843 (TS)</td>
        <td>N. Praveen Kumar V. N. Madhu Sailaja and another</td>
        <td>TEL</td>
      </tr>
      <tr>
        <td>12</td>
        <td>26-04-2023</td>
        <td>2023 (2) ALD (Crl.) 827 (TS)</td>
        <td>Guruvoju Naresh and others V. State of Telangana and another</td>
        <td>TEI</td>
      </tr>
      <tr>
        <td>13</td>
        <td>14-08-2023</td>
        <td>2023 (2) ALD (Crl.) 761 (AP)</td>
        <td>Shaik Hussain Bee V. State of Andhra Pradesh</td>
        <td>ANI</td>
      </tr>
      <tr>
        <td>14</td>
        <td>03-03-2023</td>
        <td>2023 (2) ALD (Crl.) 472 (TS)</td>
        <td>Kyla Lakshma Reddy @ Lakshman @ Lucky V. State of Telangana and another</td>
        <td>TEL</td>
      </tr>
      <tr>
        <td>15</td>
        <td>29-12-2022</td>
        <td>2023 (2) ALD (Crl.) 349 (TS)</td>
        <td>Kommalapati Anjaneyulu @ Anil V. State of Telangana and another</td>
        <td>TEL</td>
      </tr>
      <tr>
        <td>16</td>
        <td>10-04-2023</td>
        <td>2023 (2) ALD (Crl.) 338 (TS)</td>
        <td>Nekkanti Ravi Kumar V. State of Telangana</td>
        <td>TEL</td>
      </tr>
      <tr>
        <td>17</td>
        <td>22-02-2023</td>
        <td>2023 (2) ALD (Crl.) 268 (AP)</td>
        <td>Gunda @ Perumalla Dhanalakshmi V. State of Andhra Pradesh</td>
        <td>ANI</td>
      </tr>
      <tr>
        <td>18</td>
        <td>02-08-2022</td>
        <td>2023 (2) ALD (Crl.) 105 (TS)</td>
        <td>Cherukupally Janaiah @ Rudraiah V. State of Andhra Pradesh</td>
        <td>TEL</td>
      </tr>
      <tr>
        <td>19</td>
        <td>05-06-2023</td>
        <td>2024 (1) ALD 596 (TS)</td>
        <td>Balaramudu V. APSRTC, Musheerabad, Hyderabad and another</td>
        <td>TE</td>
      </tr>
      <tr>
        <td>20</td>
        <td>11-09-2023</td>
        <td>2024 (1) ALD 480 (TS)</td>
        <td>Dr. M.A. Saif Ali V. State of Telangana and others</td>
        <td>TEI</td>
      </tr>
      <tr>
        <td>21</td>
        <td>13-12-2022</td>
        <td>2024 (1) ALD (Crl.) 330 (TS)</td>
        <td>Seni Thirupathi and another V. State of Telangana and another</td>
        <td>TEI</td>
      </tr>
      <tr>
        <td>22</td>
        <td>10-03-2023</td>
        <td>2024 (1) ALD (Crl.) 317 (TS)</td>
        <td>Ponnuru Venkata Srihari V. State of Telangana and another</td>
        <td>TEI</td>
      </tr>
      <tr>
        <td>23</td>
        <td>13-10-2023</td>
        <td>2024 (1) ALD (Crl.) 231 (AP)</td>
        <td>Kotakonda Dharmaiah V. State of Andhra Pradesh</td>
        <td>AN</td>
      </tr>
      <tr>
        <td>24</td>
        <td>14-09-2023</td>
        <td>2023 (6) ALD 170 (AP) (DB)</td>
        <td>Ch. China Galaiah V. Inspector General of Police, Guntur and another</td>
        <td>AN</td>
      </tr>
      <tr>
        <td>25</td>
        <td>28-02-2023</td>
        <td>2023 (5) ALD 204 (TS) (DB)</td>
        <td>GAIL (India) Ltd., New Delhi and others V. Dr. Duraisamy Baskaran</td>
        <td>TEI</td>
      </tr>
      <tr>
        <td>26</td>
        <td>23-08-2023</td>
        <td>2023 (5) ALD 147 (SC)</td>
        <td>Dariyao Kanwar and others V. United India Insurance Co. Ltd. and another</td>
        <td>SU</td>
      </tr>
      <tr>
        <td>27</td>
        <td>31-01-2023</td>
        <td>2023 (2) ALD (Crl.) 993 (TS)</td>
        <td>Bongarala Subhash V. State of Andhra Pradesh</td>
        <td>TEI</td>
      </tr>
      <tr>
        <td>10</td>
        <td>04-07-2023</td>
        <td>2023 (2) ALD (Crl.) 968 (TS)</td>
        <td>Kaka Venkateswar Rao V. State of Andhra Pradesh</td>
        <td>TEI</td>
      </tr>
      <tr>
        <td>29</td>
        <td>13-07-2023</td>
        <td>2023 (2) ALD (Crl.) 843 (TS)</td>
        <td>N. Praveen Kumar V. N. Madhu Sailaja and another</td>
        <td>TEL</td>
      </tr>
      <tr>
        <td>30</td>
        <td>26-04-2023</td>
        <td>2023 (2) ALD (Crl.) 827 (TS)</td>
        <td>Guruvoju Naresh and others V. State of Telangana and another</td>
        <td>TEI</td>
      </tr>
      <tr>
        <td>31</td>
        <td>14-08-2023</td>
        <td>2023 (2) ALD (Crl.) 761 (AP)</td>
        <td>Shaik Hussain Bee V. State of Andhra Pradesh</td>
        <td>ANI</td>
      </tr>
      <tr>
        <td>32</td>
        <td>03-03-2023</td>
        <td>2023 (2) ALD (Crl.) 472 (TS)</td>
        <td>Kyla Lakshma Reddy @ Lakshman @ Lucky V. State of Telangana and another</td>
        <td>TEL</td>
      </tr>
      <tr>
        <td>33</td>
        <td>29-12-2022</td>
        <td>2023 (2) ALD (Crl.) 349 (TS)</td>
        <td>Kommalapati Anjaneyulu @ Anil V. State of Telangana and another</td>
        <td>TEL</td>
      </tr>
      <tr>
        <td>34</td>
        <td>10-04-2023</td>
        <td>2023 (2) ALD (Crl.) 338 (TS)</td>
        <td>Nekkanti Ravi Kumar V. State of Telangana</td>
        <td>TEL</td>
      </tr>
      <tr>
        <td>35</td>
        <td>22-02-2023</td>
        <td>2023 (2) ALD (Crl.) 268 (AP)</td>
        <td>Gunda @ Perumalla Dhanalakshmi V. State of Andhra Pradesh</td>
        <td>ANI</td>
      </tr>
      <tr>
        <td>36</td>
        <td>02-08-2022</td>
        <td>2023 (2) ALD (Crl.) 105 (TS)</td>
        <td>Cherukupally Janaiah @ Rudraiah V. State of Andhra Pradesh</td>
        <td>TEL</td>
      </tr>
    </tbody>
  </table>
</div>



  );
}

export default PadTable;

