import { createContext, useContext, useState, useEffect } from "react";
import { getPersonalIP } from "../services/getPersonalIP";

interface LocalizationContextType {
  IPData: IPApiResponse | null;
}

type LocalizationContextProviderProps = {
  children: React.ReactNode
}

export const LocalizationContext = createContext<LocalizationContextType | null>(null)

export const LocalizationContextProvider = ({ children }: LocalizationContextProviderProps) => {
  const [IPData, setIPData] = useState<IPApiResponse | null>(null)

  useEffect(() => {
    getPersonalIP().then(data => setIPData(data));
  }, [])

  return (
    <LocalizationContext.Provider value={{ IPData }}>
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