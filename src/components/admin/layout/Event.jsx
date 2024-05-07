import React, { useEffect, useState } from "react";
import CircularCard from "../cards/CircularCard";
import { Button, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { AdminApiInstance } from "../apis/ApiIntances";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { fetchEvents } from "../../../api/events";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const Event = () => {
  const [Events, setEvents] = useState([]);
  const [refresh, setRefresh] = useState([]);
  useEffect(() => {
    // for events
    ;(async () => {
      const events = await fetchEvents(setRefresh);
      setEvents(events);
    })();
  }, [refresh]);
  const cardData = [
    {
      title: "Event",
      length: Events?.length,
      data: Events,
    },
  ];

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        {cardData.map((data, i) => {
          return <CircularCard key={i} data={data} link={"event"} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default Event;
