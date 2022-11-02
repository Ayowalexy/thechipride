import React, { useState, createContext, useContext, ReactNode } from "react";

type contextProps = {
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>
}


export const NavigationContext = createContext<contextProps>({
    active: '',
    setActive: () =>  null
})

type navigationProps = {
    children: ReactNode
}

export const NavigationContextProvider = ({children}: navigationProps) => {
    const [active, setActive] = useState("Overview");

    const value = { active, setActive }

    return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>
}

export const useNavigation = () => useContext(NavigationContext)
