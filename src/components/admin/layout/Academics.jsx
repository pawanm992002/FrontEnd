import React, { useEffect, useState } from "react";
import CircularCard, { tableSection } from "../cards/CircularCard";
import { SimpleGrid } from "@chakra-ui/react";
import { fetchCalender, fetctFirstYearCircular } from "../../../api/academics";
import { useSearchParams } from "react-router-dom";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const Academics = () => {
  const [AcademicCalender, setAcademicCalender] = useState([]);
  const [FirstYearCircular, setFirstYearCircular] = useState([]);
  const [refresh, setRefresh] = useState();

  const [searchParams,setSearchParams] = useSearchParams();
  const section = searchParams.get('section')

  useEffect(() => {
    (async () => {
      const calender = await fetchCalender(setRefresh);
      setAcademicCalender(calender);

      const firstCircular = await fetctFirstYearCircular(setRefresh);
      setFirstYearCircular(firstCircular);
    })();
  }, [refresh,tableSection.includes(section)]);

  const cardData = [
    {
      title: "Academic Calender",
      length: AcademicCalender?.length,
      data: AcademicCalender,
    },
    {
      title: "First Year Circular",
      length: FirstYearCircular?.length,
      data: FirstYearCircular,
    },
  ];

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        {cardData.map((data, i) => {
          return <CircularCard key={i} link={"academics"} data={data} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default Academics;
