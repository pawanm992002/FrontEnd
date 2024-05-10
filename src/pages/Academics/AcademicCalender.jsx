import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { SectionSimulator } from "../Administration/Principal";
import { Link } from "react-router-dom";
import { fetchCalender } from "../../api/academics";
import MyTable from "../../components/utilily/MyTable";

const AcademicCalender = () => {

  const [Calender, setCalender] = useState([]);

  useEffect(() => {
    (async () => {
      const calender = await fetchCalender();
      setCalender(
        calender?.map((val) => {
          return {
            SR_NO: val.SR_NO,
            Title: val.Title,
            Section: val.Section,
            Title: val.Title,
            Notice: val.Notice,
          };
        })
      );
      console.log("gggggggggggg", calender)
    })();
  }, []);

  const AcademicCalenderDetails = [
    { session: "2021-22", sem: "odd", link: "" },
    { session: "2020-21", sem: "even", link: "" },
    { session: "202-22", sem: "odd", link: "" },
    { session: "2021-22", sem: "even", link: "" },
    { session: "2021-22", sem: "odd", link: "" },
    { session: "2021-22", sem: "even", link: "" },
  ];

  return (
    <>
      <Container>
        <section id="Academic Calender">
          <SectionSimulator title={"Academic Calender"} />
          <Box>
          <MyTable data = {Calender} />
            {/* <AcademicCalenderTable
              name="SEM"
              designation="link"
              data={AcademicCalenderDetails}
              sno="Session"
            /> */}
          </Box>
        </section>
      </Container>
    </>
  );
};

export default AcademicCalender;

//----------- Academic Calender table
// const AcademicCalenderTable = ({
//   data,
//   name = "Name",
//   sno = "S. No.",
//   designation = "Designation",
// }) => {
//   return (
//     <>
//       <Table sx={{ margin: "9px 0" }}>
//         <TableHead>
//           <TableRow>
//             <TableCell
//               sx={{
//                 border: "1px solid black",
//                 background: "var(--main-primary)",
//                 color: "white",
//                 borderLeft: "1px solid black",
//                 fontSize: "15px",
//               }}
//             >
//               {" "}
//               {sno}
//             </TableCell>

//             <TableCell
//               sx={{
//                 width: "50%",
//                 textAlign: "center",
//                 border: "1px solid black",
//                 background: "var(--main-primary)",
//                 color: "white",
//                 borderLeft: "1px solid black",
//                 fontSize: "15px",
//                 textTransform: "capitalize",
//               }}
//             >
//               {name}
//             </TableCell>
//             <TableCell
//               sx={{
//                 border: "1px solid black",
//                 background: "var(--main-primary)",
//                 color: "white",
//                 borderLeft: "1px solid black",
//                 borderRight: "1px solid black",
//                 fontSize: "15px",
//                 textTransform: "capitalize",
//               }}
//             >
//               {designation}
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data?.map((item, i) => (
//             <TableRow key={i}>
//               <TableCell sx={{ border: "1px solid black" }}>
//                 {item?.session}
//               </TableCell>

//               <TableCell
//                 sx={{ textAlign: "center", border: "1px solid black" }}
//               >
//                 {item?.sem}
//               </TableCell>

//               <TableCell sx={{ border: "1px solid black" }}>
//                 {" "}
//                 <Link to={`${item?.link}`}>View</Link>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </>
//   );
// };
