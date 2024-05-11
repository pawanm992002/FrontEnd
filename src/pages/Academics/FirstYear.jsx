import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import { SectionSimulator } from "../Administration/Principal";
import { fetctFirstYearCircular } from "../../api/academics";
import MyTable from "../../components/utilily/MyTable";

const FirstYear = () => {
  const [Circulars, setCirculars] = useState([]);

  useEffect(() => {
    (async () => {
      const circulars = await fetctFirstYearCircular();
      setCirculars(
        circulars?.map((val) => {
          return {
            SR_NO: val.SR_NO,
            Title: val.Title,
            Section: val.Section,
            Title: val.Title,
            Notice: val.Notice,
          };
        })
      );
    })();
  }, []);
  return (
    <>
      <Box className="w-80">
        <section id="firstYear">
          <SectionSimulator title={"News & Orders"} />

          {/* ---------------- Section for the news and order of the first year particulars  */}
          <Box sx={{ maxWidth: "var(--maxWidth)", marginBottom: "10px" }}>
            <MyTable data={Circulars} />
            {/* <ul>
                            <li> <Link>Notice:- To book issuing from Book -Bank Sem IV & VI two extra book   </Link> 19/03/24 </li>
                        </ul> */}
          </Box>
        </section>
      </Box>
    </>
  );
};

export default FirstYear;
