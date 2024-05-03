import React, { useEffect, useState } from "react";
import CircularCard from "../cards/CircularCard";
import { Button, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import { AdminApiInstance } from "../apis/ApiIntances";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const Event = () => {
  const [Events, setEvents] = useState([]);
  const deleteEventRow = async (_id) => {
    console.log("......... gal", _id);
    try {
      const { data } = await AdminApiInstance.delete(`/event/${_id}`);
      toast.success(data?.message);
    } catch (error) {
      console.log(".......... del", error);
      toast.error(error?.response?.data?.error);
    }
  };
  useEffect(() => {
    // for events
    (async () => {
      try {
        const { data } = await axios.get(`${url}/event`);
        const temp = data.result.map((val, i) => {
          return {
            SR_NO: i,
            Title: val.title,
            Description: val.description,
            Date: new Date(val.date).toDateString(),
            Created_At: new Date(val.createdAt).toDateString(),
            Source: (
              <Link to={val.image}>
                <Button>View</Button>
              </Link>
            ),
            Delete: (
              <Button onClick={() => deleteEventRow(val?._id)}>
                Delete
              </Button>
            ),
          };
        });
        console.log(".......... events", data);
        setEvents(temp);
      } catch (error) {
        console.log(".......... events", error);
      }
    })();
  }, []);
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
