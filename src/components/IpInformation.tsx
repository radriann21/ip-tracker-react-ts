import { Box } from "@mui/material"
import { DataCard } from "./DataCard"
import { useLocalization } from "../context/LocalizationContext"

export const IpInformation = () => {

  const { IPData } = useLocalization()
  const { ip, location, isp } = IPData || {}

  return (
    <Box
      component={'section'}
      sx={{
        position: 'absolute',
        zIndex: 2,
        bottom: {
          xs: '-80%',
          sm: '-30%'
        },
        width: '80%',
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: {
          xs: '1rem',
          sm: '2rem'
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: {
          xs: 'column',
          sm: 'row'
        },
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <DataCard dataTitle="IP Address" dataDisplay={ip} />
      <DataCard dataTitle="Location" dataDisplay={location?.country + ', ' + location?.city} />
      <DataCard dataTitle="Timezone" dataDisplay={location?.timezone} />
      <DataCard dataTitle="IPS" dataDisplay={isp} />
    </Box>
  )
}