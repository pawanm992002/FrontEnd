import React, { useState, useEffect } from "react";
import CircularCard, { tableSection } from "../cards/CircularCard";
import { Button, SimpleGrid } from "@chakra-ui/react";
import MyContext from "../../../AuthContext";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AdminApiInstance } from "../apis/ApiIntances";
import toast from "react-hot-toast";
import axios from "axios";
import { fetchAccountCircular, fetchBogMom, fetchExamCircular, fetchProctorCircular, fetchRegistrarCircular } from "../../../api/adminstration";

const url = `${process.env.REACT_APP_BACKEND_URL}/public`;

const Administration = () => {
  const ctx = MyContext();
  const navigate = useNavigate();

  const [searchParams,setSearchParams] = useSearchParams();
  const section = searchParams.get('section');

  const [BogMom, setBogMom] = useState([]);
  const [ExamCircular, setExamCircular] = useState([]);
  const [AccountCircular, setAccountCircular] = useState([]);
  const [ProctorCircular, setProctorCircular] = useState([]);
  const [RegistrarCircular, setRegistrarCircular] = useState([]);
  const [refresh, setRefresh] = useState();

  useEffect(() => {
    ;(async () => {
      const bogmom = await fetchBogMom(setRefresh);
      setBogMom(bogmom);

      const examCir = await fetchExamCircular(setRefresh);
      setExamCircular(examCir);

      const accountCir = await fetchAccountCircular(setRefresh);
      setAccountCircular(accountCir);

      const proctorCir = await fetchProctorCircular(setRefresh);
      setProctorCircular(proctorCir);

      const registrarCir = await fetchRegistrarCircular(setRefresh);
      setRegistrarCircular(registrarCir);
    })();
    console.log('runnin ')
  }, [refresh,tableSection?.includes(section)]);

  useEffect(() => {
    if (!ctx.isLoggedIn) {
      navigate("/");
    }
  }, []);

  const cardData = [
    {
      title: "Bog Mom",
      length: BogMom?.length,
      data: BogMom,
    },
    {
      title: "Examination Circular",
      length: ExamCircular?.length,
      data: ExamCircular,
    },
    {
      title: "Account Section Circular",
      length: AccountCircular?.length,
      data: AccountCircular,
    },
    {
      title: "Proctor Circular",
      length: ProctorCircular?.length,
      data: ProctorCircular,
    },
    {
      title: "Registrar Circular",
      length: RegistrarCircular?.length,
      data: RegistrarCircular,
    },
  ];

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3 }}
        spacing={{ base: 5, lg: 8 }}
      >
        {cardData.map((data, i) => {
          return <CircularCard link={"administration"} key={i} data={data} />;
        })}
      </SimpleGrid>
    </>
  );
};

export default Administration;
