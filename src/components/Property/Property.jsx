// import React from 'react';
// import House from './House/House'
// import Apartment from './Apartment/Apartment';
// import Land from './Land/Land';
// import Building from './Building/Building';
// import { Container } from '@mui/system';
// import { Typography } from '@mui/material';
// import './Property.css';


// function Property() {
//     return (
//         <div id='page' style={{margin: "40px auto"}}>

//             <Container maxWidth='xl'>
//                 <Container
//                     maxWidth='xl'
//                     sx={{
//                         background: '#D3DEEE',
//                         borderRadius: '5px',
//                         border: '1px solid #fffff',
//                         margin: '8px 0px 20px 0px',
//                         padding: '10px 0px 20px 0px',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center'
//                     }}
//                 >

//                     <Typography
//                         variant='h4'
//                         align='center'
//                         maxWidth="md"
//                         sx={{
//                             backgroundColor: "#E2EDF3",
//                             margin: '0px 20px',
//                             color: '#002B3D',
//                             borderRadius: "30px",
//                             borderBottom: '10px solid #290000',
//                             padding: '6px 30px',
//                         }}
//                         fullWidth >
//                         Houses
//                     </Typography>
//                     <House />

//                 </Container>
//                 <Container
//                     maxWidth="xl"
//                     sx={{
//                         background: '#D3DEEE',
//                         borderRadius: '5px',
//                         border: '1px solid #D3DEEE',
//                         margin: '40px auto',
//                         padding: '10px 0px 20px 0px',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center'
//                     }}
//                 >
//                     <Typography
//                         variant='h4'
//                         align='center'
//                         maxWidth="md"
//                         sx={{
//                             backgroundColor: "#E2EDF3",
//                             alignSelf: 'center',
//                             justifySelf: 'center',
//                             margin: '0px 20px 20px 20px',
//                             color: '#002B3D',
//                             borderRadius: "30px",
//                             borderBottom: '10px solid #290000',
//                             padding: '6px 30px'
//                         }}>
//                         Apartments
//                     </Typography>
//                     <Apartment />
//                 </Container>

//                 <Container
//                     maxWidth='xl'
//                     sx={{
//                         background: '#D3DEEE',
//                         borderRadius: '5px',
//                         border: '1px solid #fffff',
//                         margin: '40px 0px',
//                         padding: '10px 0px 20px 0px',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center'
//                     }}>

//                     <Typography
//                         variant='h4'
//                         align='center'
//                         maxWidth="md"
//                         sx={{
//                             backgroundColor: "#E2EDF3",
//                             color: '#002B3D',
//                             borderRadius: "30px",
//                             margin: '0px 20px 20px 20px',
//                             borderBottom: '10px solid #290000',
//                             padding: '6px 30px',
//                         }}
//                         fullWidth >
//                         Lands
//                     </Typography>
//                     <Land />

//                 </Container>
//                 <Container
//                     maxWidth='xl'
//                     sx={{
//                         background: '#D3DEEE',
//                         borderRadius: '5px',
//                         border: '1px solid #fffff',
//                         margin: '40px 0px',
//                         padding: '10px 0px 20px 0px',
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'center'
//                     }}>

//                     <Typography
//                         variant='h4'
//                         align='center'
//                         maxWidth="md"
//                         sx={{
//                             backgroundColor: "#E2EDF3",
//                             color: '#002B3D',
//                             borderRadius: "30px",
//                             margin: '0px 20px 20px 20px',
//                             borderBottom: '10px solid #290000',
//                             padding: '6px 30px',
//                         }}
//                         fullWidth >
//                         Buildings
//                     </Typography>
//                     <Building />

//                 </Container>
//             </Container>

//             {/* <Footer /> */}

//         </div>
//     )
// }

// export default Property;



import React, { useState, useEffect } from 'react';
import { Container } from '@mui/system';
import { Typography, CircularProgress, Button } from '@mui/material';
import House from './House/House';
import Apartment from './Apartment/Apartment';
import Land from './Land/Land';
import Building from './Building/Building';
import './Property.css';

function Property() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the timeout value as needed
  }, []);

  return (
    <div id='page' style={{ margin: '40px auto' }}>
      <Container maxWidth='xl'>
        <Container
          maxWidth='xl'
          sx={{
            background: '#D3DEEE',
            borderRadius: '5px',
            border: '1px solid #fffff',
            margin: '8px 0px 20px 0px',
            padding: '10px 0px 20px 0px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant='h4'
            align='center'
            maxWidth='md'
            sx={{
              backgroundColor: '#E2EDF3',
              margin: '0px 20px',
              color: '#002B3D',
              borderRadius: '30px',
              borderBottom: '10px solid #290000',
              padding: '6px 30px',
            }}
            fullWidth
          >
            Houses
          </Typography>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <House />
          )}
        </Container>
        {/* Repeat the pattern for other sections */}
      </Container>
    </div>
  );
}

export default Property;
