import { Box } from "@mui/material"
import { IpInformation } from "./IpInformation"
import { IPInput } from "./IPInput"
import bgPattern from '../assets/pattern-bg-desktop.png'

export const IPSearcher = () => {
  return (
    <Box
      component={'section'}
      sx={{
        position: 'relative',
        padding: '2rem',
        width: '100%',
        height: '290px',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${bgPattern})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <Box width={'100%'} textAlign={'center'}>
        <h1 style={{ fontWeight: 'bold', fontSize: '28px', color: 'white', fontFamily: 'Roboto', marginBottom: '.5rem' }}>
          IP Address Tracker
        </h1>
        <IPInput />
      </Box>
      <IpInformation />
    </Box>
  )
}