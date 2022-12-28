import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { iChildren, iProject, iUserContext } from "../components/interfaces";
import { api } from "../services/api";

export const UserContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iChildren) => {
    const [listProjects, setListProjects] = useState<iProject[]>([] as iProject[]);    

    useEffect(() => {
        async function getProjects() {
          try {
            const response = await api.get<iProject[]>(
              "https://api.github.com/users/CarolinaOlivaCruz/repos"
            );
            console.log(response);
            
            setListProjects(response.data);
          } catch (error) {
            console.error(error);
          }
        }
    
        getProjects();
      }, []);
    
      return (
        <UserContext.Provider
          value={{
           listProjects,
           setListProjects,
          }}
        >
          {children}
        </UserContext.Provider>
      );
}