import { Box, TextField, Button } from "@mui/material"

export const IPInput = () => {
  return (
    <Box
      component={'label'}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        margin: '0 auto'
      }}
    >
      <TextField
        placeholder="Search for any IP address or domain"
        autoComplete="off"
        sx={{
          borderTopLeftRadius: 16,
          borderBottomLeftRadius: 16,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          border: 'none',
          outline: 'none',
          bgcolor: 'white',
          width: '100%'
        }}
      />
      <Button
        sx={{
          color: 'white',
          backgroundColor: 'black',
          height: '100%',
          padding: '16px 0',
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: 16,
          borderBottomRightRadius: 16,
          transition: 'background .2s ease-in',
          ":hover": {
            backgroundColor: '#121212;',
          }
        }}
      >
        Go!
      </Button>
    </Box>
  )
}