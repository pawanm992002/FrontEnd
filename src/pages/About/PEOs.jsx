import { Box, Container,Table, TableCell, TableContainer, TableRow, Typography } from '@mui/material'
import React from 'react'

import '../../styles/style.css'

const PosRowData = [
    {
        Etitle: 'Engineering knowledge',
        Edescription: 'Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.',
        Htitle: 'अभियांत्रिकी ज्ञान',
        Hdescription: 'विज्ञान, गणित व अभियांत्रिकी ज्ञान का उपयोग कर जटिल समस्याओं का समाधान'
    },
    {
        Etitle: 'Problem analysis',
        Edescription: 'Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.',
        Htitle: 'समस्या विश्लेषण',
        Hdescription: 'समस्या के मूल से सूत्रण, शोध‍समीक्षा, विश्लेषण सहित गणित, प्रकृति व अभियांत्रिकी विज्ञान के सिद्धांतों द्वारा जटिल समस्याओं के व्यवहारिक हल'
    },
    {
        Etitle: 'Design/development of solutions',
        Edescription: 'Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.',
        Htitle: 'समस्या समाधान',
        Hdescription: 'जन स्वास्थ्य-सुरक्षा, संस्कृति, समाज, व पर्यावरण का उचित ध्यान रखते हुए, जटिल अभियांत्रिकी प्रकरणों के अवयवों तथा सम्पूर्ण निकाय की संरचना'
    },
    {
        Etitle: 'Conduct investigations of complex problems',
        Edescription: 'Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, & synthesis of the information to provide valid conclusions.',
        Htitle: 'जटिल शोध समस्याओं का अनुसंधान',
        Hdescription: 'प्रायोगिक विश्लेषण/व्याख्या और सूचना संकलन कर समुचित निष्कर्ष हेतु अनुसंधान-आधारित ज्ञान और शोध विधियों का प्रयोग'
    },
    {
        Etitle: 'Modern tool usage',
        Edescription: 'Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.',
        Htitle: 'नवीन उपकरणों का उपयोग',
        Hdescription: 'उचित तकनीक, संसाधन, आधुनिक यांत्रिकी, सूचना प्रोद्योगिकी उपकरणों का चयन, उपयोग व निर्माण. जिससे सीमाबोध सहित जटिल अभियांत्रिकी गतिविधियों का व्यावहारिक निरूपण.'
    },
    {
        Etitle: 'The engineer and society',
        Edescription: 'Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.',
        Htitle: 'समाज के प्रति जागरूकता',
        Hdescription: 'समाज, स्वास्थ्य, सुरक्षा, विधिक तथा सांस्कृतिक विषयों तथा संबद्ध उत्तरदायित्व सहित अभियांत्रिकी अनुप्रयोग में प्रासंगिक ज्ञान का तार्किक उपयोग'
    },
    {
        Etitle: 'Environment and sustainability',
        Edescription: 'Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.',
        Htitle: 'पर्यावरण व सह-अस्तित्व',
        Hdescription: 'व्यावसायिक अभियांत्रिकी हल के सामाजिक व पर्यावरण पक्षों पर प्रभाव अनुभव कर सतत विकास की आवश्यकता व ज्ञान का सम्यक दर्शन'
    },
    {
        Etitle: 'Ethics',
        Edescription: 'Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.',
        Htitle: 'नैतिक मूल्य',
        Hdescription: 'अभियांत्रिकी अनुप्रयोगों में व्यावसायिक आचार संहिता के प्रति निष्ठा व नैतिक मूल्यों की स्थापना'
    },
    {
        Etitle: 'Individual and team work',
        Edescription: 'Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.',
        Htitle: 'सामूहिक व अकेले दायित्व पालन',
        Hdescription: 'बहु आयामी चुनौतियों में, ऐकांतिक या सामूहिक कार्य में, नेतृत्व या सहयोग में सफलता में प्रभावी भूमिका'
    },
    {
        Etitle: 'Communication',
        Edescription: 'Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend & write effective reports, design documentation, make effective presentations, and give and receive clear instructions.',
        Htitle: 'संवाद में दक्षता',
        Hdescription: 'अभियांत्रिकी समुदाय व समाज के साथ जटिल अभियांत्रिकी क्रियाकलाप पर प्रभावी संवाद जैसे, गहन विमर्श, संरचना प्रलेखन, प्रभावपूर्ण प्रस्तुतियां तथा स्पष्ट निर्देशन'
    },
    {
        Etitle: 'Project management and finance',
        Edescription: 'Demonstrate knowledge and understanding of the engineering and management principles and apply these to one’s own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.',
        Htitle: 'परियोजना प्रबंधन',
        Hdescription: 'परियोजनाओं व बहुआयामी वातावरण में प्रबंधन हेतु दल के सदस्य व नेता के रूप में अभियांत्रिकी और प्रबंधन सिद्धांतों के ज्ञान/ग्राह्यता का आत्मप्रयोग व प्रदर्शन.'
    },
    {
        Etitle: 'Life-long learning',
        Edescription: 'Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.',
        Htitle: 'आजीवन ज्ञान पिपासा',
        Hdescription: 'व्यापक संदर्भ में तकनीकी अद्यतन हेतु आत्मनिर्भर सतत शिक्षा की पिपासा, आवश्यकताओं का अभिज्ञान, व साधनपूर्ति'
    },

]


const PEOs = () => {

    return (
        <>
            <Box  className="w-80">

                <section id="POs">
                    <Box>
                        <Typography className='double-line-bottom' margin={'5px 0'} variant="h5" >POs</Typography>

                        <TableContainer  >
                            <Table sx={{margin:'9px 0'}}>
                                {PosRowData?.map((item, i) => (

                                    <TableRow key={i}>
                                        <TableCell sx={{border:'1px solid black'}} >{item?.Etitle}</TableCell>
                                        <TableCell sx={{border:'1px solid black'}}>{item?.Edescription}</TableCell>
                                        <TableCell sx={{border:'1px solid black'}}>{item?.Htitle}</TableCell>
                                        <TableCell sx={{border:'1px solid black'}}>{item?.Hdescription}</TableCell>
                                    </TableRow>
                                ))}
                            </Table>
                        </TableContainer>

                    </Box>
                </section>

                <section id="PEOs">

                    <Box>
                        <Typography className='double-line-bottom' margin={'15px 0'} variant="h5" >PEOs</Typography>

                        <ul style={{ listStyleType: 'number', margin: '0 17px', lineHeight: '29px' }} >
                            <li>
                                <p>To focus on conceptual knowledge and creativity in engineering to innovate, design and development for global competition.</p>
                                <p>वैश्विक प्रतिस्पर्धा के लिए अभियांत्रिकी में रचनात्मकता नवाचार, डिजाइन और विकास के लिए मूल सिद्धांतों पर बल.</p>
                            </li>
                            <li>
                                <p>To inculcate the practice of team work to achieve project objectives using modern technical methods. </p>
                                <p>सामूहिक समर्पणभाव की स्थापना द्वारा परियोजना उद्देश्य पूर्ति हेतु आधुनिक तकनीकी पद्धतियों का उपयोग.</p>
                            </li>
                            <li>
                                <p>To communicate effectively, demonstrate leadership skills and exhibit professional conduct for employment and entrepreneurship in competitive environment.</p>
                                <p>प्रभावी संवाद, प्रतिस्पर्धी वातावरण में व्यावसायिक नैतिकता, नेतृत्व कौशल व उद्यमशीलता प्रदर्शित करना.</p>
                            </li>
                            <li>
                                <p>To involve in lifelong self-learning, research enhancement and adapt to work for multidisciplinary professional and social needs. </p>
                                <p>बहुआयामी व्यावसायिक व सामाजिक आवश्यकतानुसार अनुसंधान वृत्ति व आजीवन आत्म-शिक्षण.</p>
                            </li>
                        </ul>
                    </Box>

                </section>
            </Box>
        </>
    )
}

export default PEOs
