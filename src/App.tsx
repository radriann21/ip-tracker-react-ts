import { Box } from "@mui/material"
import { IPSearcher } from "./components/IPSearcher"
import { UserMap } from "./components/UserMap"

function App() {
  return (
    <Box
      component={'main'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        minHeight: '100vh',
        padding: 0,
        margin: 0
      }}
    >
      <IPSearcher />
      <UserMap />
    </Box>
  )
}

export default App
