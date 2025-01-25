import { useState } from "react"
import { Box, TextField, Button } from "@mui/material"
import { ipv4Regex, ipv6Regex } from "../utils/utils"

export const IPInput = () => {
  const [ipSearch, setIpSearch] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget
    setIpSearch(value)
  }

  const handleSearchSubmit = () => {
    if (ipv4Regex.test(ipSearch) || ipv6Regex.test(ipSearch)) {
      setError('')
    } else {
      setError('Invalid IP')
    }
  }

  return (
    <Box
      component={'label'}
      sx={{
        position: 'relative',
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
        onChange={handleSearch}
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
        onClick={handleSearchSubmit}
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
      <span style={{ color: 'red', position: 'absolute', bottom: '-20px', left: '10px', fontSize: '12px' }}>
        {error}
      </span>
    </Box>
  )
}