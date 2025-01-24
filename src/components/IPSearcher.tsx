import { Box } from "@mui/material"
import { IPInput } from "./IPInput"
import bgPattern from '../assets/pattern-bg-desktop.png'

export const IPSearcher = () => {
  return (
    <Box
      component={'section'}
      sx={{
        width: '100%',
        height: '260px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
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
    </Box>
  )
}