import { Box } from "@mui/material"
import { DataCard } from "./DataCard"
import { useLocalization } from "../context/LocalizationContext"

export const IpInformation = () => {

  const { IPData } = useLocalization()
  const { city, region, timezone } = IPData?.location || {}

  return (
    <Box
      component={'section'}
      sx={{
        position: 'absolute',
        bottom: '-60px',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <DataCard dataTitle="IP Address" dataDisplay={IPData?.ip} />
      <DataCard dataTitle="Location" dataDisplay={city + ', ' + region} />
      <DataCard dataTitle="Timezone" dataDisplay={timezone} />
      <DataCard dataTitle="IPS" dataDisplay={IPData?.isp} />
    </Box>
  )
}