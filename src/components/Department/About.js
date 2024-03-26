import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function About({ comp }) {
  if (comp === "computer")
    return (
      <Box sx={{overflowY:'auto', height:'600px'}}>
        <Typography variant="h6">About Us</Typography>
        <Typography variant="body2">
          The Department of Computer Science and Engineering at Engineering
          College Ajmer is known for imparting state of the art education and
          preparing its students for real world challenges. The initial
          "computer-related" courses were started in August 2000 with the intake
          of 30 students in Computer Engineering and 30 in Information
          Technology. Currently the department is having an intake of 120
          students in Computer Engineering, 60 in Information Technology and 60
          in Computer Science and Engineering(Cyber Security) at B. Tech level.
          We attract the brightest students from the state who score very high
          ranks in the engineering entrance examinations, for the PG course,
          department has an intake of 9 students in Computer Engineering,
          Information Technology and Software Engineering. At present, the
          department is having a 17 regular faculty, whose interests span in
          almost all areas of Computer Science. Computer Science and Engineering
          department is having 9 Computer Labs and a Central Computer Center
          with latest computer configuration. Each lab is having capacity of 30
          computers and Center is having capacity of 100 computers. All the
          computers are connected in local area network (wired and wireless)
          with Internet Connection of 1Gbps leased line link and 100 Mbps 1:1
          bandwidth. Highly configured servers have been installed. Department
          is also having the latest CISCO routers and switches for networking.
        </Typography>
        <Typography fontWeight="bold">
          Computer Science and Engineering (Cyber Security):
        </Typography>
        <Typography variant="body2">
          Department of Computer Science and Engineering is starting a new
          program B.Tech. in Computer Science and Engineering (Specialization
          with Cyber Security) in session 2022-23 with 60 seats. Department has
          the highly qualified faculty members with specialization in cyber
          security and an advanced laboratory to run this program. Department
          regularly organizes various competitions such as hacking contests,
          projects, regular assignments, interactive sessions from cyber
          security experts, and cyber security club activities to boost the
          skills of students in this area. There are numerous job opportunities
          for cyber security graduates such as Network Security Engineer, Cyber
          Security Analyst, Security Architect, Cyber Security Manager, Chief
          Information Security Officer (CISO ), Ethical Hacker, and Cyber
          Security Consultant. Some of the top recruiting companies for B.Tech.
          Cyber Security graduates in the private sector are Infosys, Wipro,
          IBM, Tata Consultancy Services, Cognizant, HCL, etc. Other than
          private sectors, candidates can also work in various government
          organizations including ISRO, DRDO, etc.
        </Typography>
        <Typography variant="h6">Programs</Typography>
        <ul>
          <li style={{ fontWeight: "bold" }}>
            Bachelor in Technology (B.Tech.)
          </li>
          <Typography variant="body2">Computer Engineering</Typography>
          <Typography variant="body2">Information Technology</Typography>
          <Typography variant="body2">
            Computer Science & Engineering (Cyber Security)
          </Typography>
          <li style={{ fontWeight: "bold" }}>Master in Technology (M.Tech.)</li>
          <Typography variant="body2">Computer Engineering</Typography>
          <Typography variant="body2">Information Technology</Typography>
          <Typography variant="body2">Software Engineering</Typography>
          <li style={{ fontWeight: "bold" }}>Doctor in Philosophy (PhD)</li>
        </ul>
        <Typography fontWeight="bold">Vision</Typography>
        <Typography variant="body2">
          To produce competent professionals in the field of computer science
          and engineering.
        </Typography>
        <Typography fontWeight="bold">Mission</Typography>
        <ul>
          <li>
            <Typography variant="body2">
              Prepare the students with strong fundamental concepts, analytical
              capability, programming, problem solving skills and strong ethics.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              Provide opportunities to promote organizational and leadership
              skills in students.
            </Typography>
          </li>
          <li>
            <Typography variant="body2">
              To disseminate digital innovation among society.
            </Typography>
          </li>
        </ul>
        <Typography fontWeight="bold">Objective</Typography>
        <Typography variant="body2">
          The objective of the department is to prepare future generation
          computer professionals for long-term career in research, technical
          development, and applications. The curriculum emphasises on program
          design, analysis and implementation, with both a strong theoretical
          foundation and relevant practical component covering various aspects
          of computing and computer communications.
        </Typography>
        <Typography fontWeight="bold">Expertise</Typography>
        <Typography variant="body2">
          The department has experienced faculty members specialized in Compiler
          Design, Artificial Intelligence, Distributed Computing, Multimedia,
          RDBMS, Computer Networks, Data Communication, OOPS, Data Structures
          and Algorithm, Software Engineering, Operating Systems, Network
          Security, High Speed Networks, Theory of Computation, Mobile
          Computing, Design and Analysis of Algorithm and Data Mining etc.
        </Typography>
      </Box>
    );
  else if (comp === "electrical") return <Box sx={{overflowY:'auto', height:'600px'}}>jdljdljj</Box>;
}
