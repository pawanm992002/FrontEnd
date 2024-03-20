import { Box, Typography } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          bgcolor: "var(--darkBG)",
        }}
      >
        <Box
          sx={{
            // maxWidth: "var(--maxWidth)",
            width:'100%',
            display: "flex",
            flexDirection: "column",
          }}
        >
      <section id="FooterRowLinks" className="container">
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <FooterColumnLinks
            title={"usefull links"}
            l1link={"audit"}
            l1text={"Audit Report & Balance Sheets"}
            l2link={"mandatorydis"}
            l2text={"Mandatory Disclosure"}
            l3link={"ar"}
            l3text={"Annual Reports"}
            l4link={"audit"}
            l4text={"Higher Education Policy"}
            l5link={"audit"}
            l5text={"MoUs with Compaines"}
            l6link={"audit"}
            l6text={"National Innovation and Startup Policy"}
            l7link={"audit"}
            l7text={"Gallery"}
          />

          <FooterColumnLinks
            title={"quick links"}
            l1link={"audit"}
            l1text={"MOOC Courses"}
            l2link={"audit"}
            l2text={"E-resources"}
            l3link={"audit"}
            l3text={"E-learning"}
            l4link={"audit"}
            l4text={"Non Teaching Staff"}
            l5link={"audit"}
            l5text={"TEQIP"}
            l6link={"audit"}
            l6text={"Workshop/Hackathon"}
            l7link={"audit"}
            l7text={"RTI"}
          />

          <FooterColumnLinks
            title={"external links"}
            l1link={"audit"}
            l1text={"BTU, Bikaner"}
            l2link={"audit"}
            l2text={"RTU,Kota"}
            l3link={"audit"}
            l3text={"AICTE"}
            l4link={"audit"}
            l4text={"SWAYAM"}
            l5link={"audit"}
            l5text={"DigiLocker"}
            l6link={"audit"}
            l6text={"Online RTI Portal, Rajasthan"}
            l7link={"audit"}
            l7text={"B.Tech. Admissions"}
          />

          <FooterColumnLinks
            title={"contact"}
            l1link={"audit"}
            l1text={"Badliya Chouraha, N.H.8, Ajmer"}
            l2link={"audit"}
            l2text={"principal@ecajmer.ac.in"}
            l3link={"audit"}
            l3text={"principal.eca@rajasthan.gov.in"}
            l4link={"audit"}
            l4text={"+911452971024"}
            l5link={"audit"}
            l5text={"GST No: 08AABAP0959P1ZZ"}
          />
        </Box>
      </section>

      {/* ----------- End of the footer line  */}
      <Box className="container-fluid" sx={{ my: 2 }}>
        <Box
          className="container"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "var(--main-primary)",
            p: 1,
          }}
        >
          <FooterLineLink link={"nodalofficer"} title={"nodal officer"} />
          <FooterLineLink link={"projects"} title={"projects grants"} />
          <FooterLineLink link={"feedback"} title={"feedback"} />
          <FooterLineLink
            link={
              "https://www.ecajmer.ac.in/Content/Orders/Regis/Files/holiday2023.pdf"
            }
            title={"holidays"}
          />
          <FooterLineLink link={"press"} title={"press"} />
          <FooterLineLink link={"noaudit"} title={"no audit"} />
          <FooterLineLink link={"policies"} title={"policies"} />
          <FooterLineLink link={"webteam"} title={"web team"} />
        </Box>

        {/* -------- More info, like name, and sitemap  */}
        <Box
          className="container"
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Typography>Visitor Number : 3444123</Typography>
          <Typography>
            Copyright ©: All Rights Reserved | Engineering College, Ajmer
          </Typography>
          <Typography
            variant="body2"
            sx={{ ":hover": { color: "salmon" } }}
            textTransform={"capitalize"}
          >
            {" "}
            <Link
              to={`/sitemap`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              sitemap{" "}
            </Link>
          </Typography>
        </Box>
      </Box>
      </Box></Box>
  );
};

export default Footer;

//------------ Footer Column Links
export const FooterColumnLinks = ({
  title,
  l1link,
  l1text,
  l2link,
  l2text,
  l3link,
  l3text,
  l4link,
  l4text,
  l5link,
  l5text,
  l6link,
  l6text,
  l7link,
  l7text,
}) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          m: 2,
        }}
      >
        <Typography
          variant="h6"
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ ":hover": { color: "salmon" } }}
          textTransform={"capitalize"}
        >
          {" "}
          <Link
            to={`/${l1link}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            {l1text}{" "}
          </Link>
        </Typography>

        <Typography
          variant="body2"
          sx={{ ":hover": { color: "salmon" } }}
          textTransform={"capitalize"}
        >
          {" "}
          <Link
            to={`/${l2link}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            {l2text}{" "}
          </Link>
        </Typography>

        <Typography
          variant="body2"
          sx={{ ":hover": { color: "salmon" } }}
          textTransform={"capitalize"}
        >
          {" "}
          <Link
            to={`/${l3link}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            {l3text}{" "}
          </Link>
        </Typography>

        <Typography
          variant="body2"
          sx={{ ":hover": { color: "salmon" } }}
          textTransform={"capitalize"}
        >
          {" "}
          <Link
            to={`/${l4link}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            {l4text}{" "}
          </Link>
        </Typography>

        <Typography
          variant="body2"
          sx={{ ":hover": { color: "salmon" } }}
          textTransform={"capitalize"}
        >
          {" "}
          <Link
            to={`/${l5link}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {" "}
            {l5text}{" "}
          </Link>
        </Typography>
        {l6link && (
          <Typography
            variant="body2"
            sx={{ ":hover": { color: "salmon" } }}
            textTransform={"capitalize"}
          >
            {" "}
            <Link
              to={`/${l6link}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              {l6text}{" "}
            </Link>
          </Typography>
        )}
        {l7link && (
          <Typography
            variant="body2"
            sx={{ ":hover": { color: "salmon" } }}
            textTransform={"capitalize"}
          >
            {" "}
            <Link
              to={`/${l7link}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              {" "}
              {l7text}{" "}
            </Link>
          </Typography>
        )}
      </Box>
    </>
  );
};

//------------- Footer Line Link
export const FooterLineLink = ({ link, title }) => {
  return (
    <>
      <Typography sx={{ textTransform: "capitalize" }}>
        <Link to={`/${link}`} style={{ color: "white" }}>
          {title}
        </Link>
      </Typography>
    </>
  );
};
