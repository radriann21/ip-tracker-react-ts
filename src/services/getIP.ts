export const getIP = async (foreignIP: string): Promise<IPApiResponse> => {
  const API_KEY = import.meta.env.VITE_API_KEY
  const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${foreignIP}`
  try {
    const response = await fetch(URL)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data
  } catch (err) {
    console.log(err)
    throw err
  }
}