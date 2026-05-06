import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type {
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react"

interface User {
  userId: string;
  email: string;
  name?: string;
  username:string;
  profilePhoto?: string;
  address?: string,
  bio?: string,
  level: number,
  dateJoined: Date

}


interface AuthContextType {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  loading: boolean;
  fetchUser: () => Promise<void>;
}


const AuthContext = createContext<AuthContextType | undefined>(undefined);


interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {

    setLoading(true)

    try {
      const res = await fetch("http://localhost:3000/user/me", {
        credentials: "include",
      });

      if (!res.ok){
        throw new Error("Not authenticated");
      }

      const data = await res.json();

      if(data.user){
        console.log(data.user)
        setUser(data.user as User);
      
      }
      else{
        setUser(null)

      }
    } catch (err) {
      console.log(err)
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
