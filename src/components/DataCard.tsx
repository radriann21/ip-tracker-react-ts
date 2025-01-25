import { Box } from '@mui/material'

type DataCardProps = {
  dataTitle: string
  dataDisplay: string | undefined
}

export const DataCard = ({ dataTitle, dataDisplay }: DataCardProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin: '.8rem',
        textAlign: {
          xs: 'center',
          sm: 'left'
        }
      }}
    >
      <h2 style={{ color: 'hsl(0, 0%, 59%)', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '2px' }}>
        {dataTitle}
      </h2>
      <p style={{ color: 'hsl(0, 0.00%, 9.80%)', fontSize: '24px', fontWeight: '800' }}>
        {dataDisplay}
      </p>
    </Box>
  )
}