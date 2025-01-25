import { createContext, useContext, useState, useEffect } from "react";
import { getPersonalIP } from "../services/getPersonalIP";
import { getIP } from "../services/getIP";

interface LocalizationContextType {
  IPData: IPApiResponse | null;
  getForeignIP: (ipSearch: string) => void;
  viewState: {
    longitude: number | undefined;
    latitude: number | undefined;
    zoom: number;
  };
}

type LocalizationContextProviderProps = {
  children: React.ReactNode
}

export const LocalizationContext = createContext<LocalizationContextType | null>(null)

export const LocalizationContextProvider = ({ children }: LocalizationContextProviderProps) => {
  const [IPData, setIPData] = useState<IPApiResponse | null>(null)
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 5
  })

  useEffect(() => {
    getPersonalIP().then(data => setIPData(data));
  }, [])

  useEffect(() => {
    if (IPData) {
      setViewState({
        longitude: IPData?.location.lng,
        latitude: IPData?.location.lat,
        zoom: 5
      })
    }
  }, [IPData])

  async function getForeignIP(ipSearch: string) {
    await getIP(ipSearch)
      .then(data => setIPData(data))
  }

  return (
    <LocalizationContext.Provider value={{ IPData, getForeignIP, viewState }}>
      {children}
    </LocalizationContext.Provider>
  )
}

export const useLocalization = () => {
  const context = useContext(LocalizationContext)
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationContextProvider')
  }
  return context
}