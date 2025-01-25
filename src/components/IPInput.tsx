import { useState } from "react"
import { useLocalization } from "../context/LocalizationContext"
import { Box, TextField, Button } from "@mui/material"
import { ipv4Regex, ipv6Regex } from "../utils/utils"

export const IPInput = () => {
  const { getForeignIP } = useLocalization()
  const [ipSearch, setIpSearch] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.currentTarget
    setIpSearch(value)
  }

  const handleSearchSubmit = () => {
    if (ipv4Regex.test(ipSearch) || ipv6Regex.test(ipSearch)) {
      setError('')
      getForeignIP(ipSearch)
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
        width: {
          xs: '100%',
          sm: '40%',
        },
        margin: '0 auto',
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
      </Button>
      <span style={{ color: 'red', position: 'absolute', bottom: '-20px', left: '10px', fontSize: '12px' }}>
        {error}
      </span>
    </Box>
  )
}