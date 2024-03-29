import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";


export const message = `The journey of a thousand miles begins with a single step. The first step which a student takes with this institute of excellence goes a long way in shaping his destiny . As Mahatma Gandhi said, "By Education I mean an all round drawing out of the best in child and man-body, mind and spirit". The ultimate goal of education is the discovery of the meaning of life and the fulfillment of life for all mankind as well as for oneself. The quest of education is knowledge, humanity, culture, wisdom and sharpness but it should be noted that knowledge is not given but earned and character is not granted but cultivated. Engineering College Ajmer with its dedicated team of faculty members leaves no stone unturned in shaping the future of its students. It is not an institute but a family that takes care of every member, gives personal attention to their overall personality development and academic growth. We accord prime importance to the behavioral discipline, moral integrity and cognitive development of our students.

Highly trained and resourceful faculty, rich library, placement cell, teaching methods, liberty to think and express are our strengths. We have been blessed with highest number of placements among all Government Engineering Colleges of Rajasthan in past few years. Our students have brought us laurels and are permeating the light of knowledge all around .

We are honored to be a droplet contributor in prestigious World Bank Project, Technical Education Quality Improvement Program (TEQIP) phase III where we are enthusiastically working towards attaining Sustainable Development Goal (SDG)–IV through education and empowerment. Our students, faculty and staff members strive hard for obtaining benefits of various sponsoring and funding schemes to improve academic and administrative practices for upliftment of technical education in India and future generations.

We believe that `;


export default function Principal() {
    const [fullShow, setFullShow] = useState(false);

    return (

        <Container>
          <SectionSimulator title={'Principal Message'} />

            <Box
                sx={{
                    maxWidth: 'var(--maxWidth)',
                    borderRadius: "8px",
                    padding: "15px",
                    // boxShadow: "2px 4px 3px black",
                }}
            >



                <Card sx={{ margin: '9px 0', boxShadow: '2px 3px 9px black', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}  >
                    {/* <CardMedia
                        sx={{  }}
                        image=""
                        title="princiapl@eca"
                        
                    /> */}
                    <Box>

                        <img src="/images/principal.jpg" alt="principal@eca" height={250} style={{ margin: '5px 5px' }} />
                        <Typography
                            gutterBottom
                            variant="h6"
                            fontWeight="bold"
                            component="div"
                            margin={'auto 5px'}
                            textAlign={'center'}

                        >
                            Dr. Rekha Mehra
                        </Typography>
                    </Box>

                    <CardContent>


                        <Typography
                            borderBottom="1px solid black"
                            gutterBottom
                            variant="h6"
                            component="div"
                        >
                            Message: From the Desk of the Principal
                        </Typography>
                        <Typography gutterBottom variant="body2" color="text.secondary">
                            {fullShow ? message : message.slice(0, 350)}
                            {fullShow ?
                                (
                                    <Button onClick={() => setFullShow(false)}>
                                        {" "}
                                        Shrink now...
                                    </Button>
                                )
                                : (
                                    <Button onClick={() => setFullShow(!fullShow)}>
                                        {" "}
                                        ...Read more
                                    </Button>
                                )}
                        </Typography>
                        <Typography fontWeight="bold" variant="body2">
                            "We cannot always build the future for our youth, but we can build
                            our youth for the future. Jai Hind !!"
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}


//----------- Create the section simulator component 
export const SectionSimulator = ({title,active=true})=>{
    return (
        <>
          <Box style={{ background: `${active ? 'green':'white'}`, color: `${active ? 'white':'black'}`, margin: '15px 0',cursor:'pointer' }}>
                <Typography variant='h4' textAlign={'center'} >{title}</Typography>
            </Box>
        </>
    )
}