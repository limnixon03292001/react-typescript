import { createContext, useState } from "react"

type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextType = {
    user: UserAuthType | null
    setUser: React.Dispatch<React.SetStateAction<UserAuthType | null>>
    name: NameType
    setName: React.Dispatch<React.SetStateAction<NameType>>
}

type UserAuthType = {
    name: string
    email: string
} 

type NameType = {
    name: string
}

export const UserContext = createContext({} as UserContextType);
   
export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<UserAuthType | null>(null);
    const [name, setName] = useState<NameType>({} as NameType);

    return  <UserContext.Provider value={{user, setUser, name, setName}}>
                {children}
            </UserContext.Provider>

}