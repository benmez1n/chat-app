
import React , {useContext , useState , useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {auth} from '../firebase'
const AuthContext = React.createContext();
export function useAuth() {return useContext(AuthContext)}
export const AuthProvider = ({children}) => {

    const [isLoading , setIsLoading ] = useState(true);
    const [user,setUser] = useState();
    const history = useHistory();

    useEffect( () => {
        auth.onAuthStateChanged( (user) => {
            setUser(user);
            setIsLoading(false)
            history.push('/chats');
        })
    },[user,history]) 
    const value = {user}
    return(
        <AuthContext.Provider value={value}>
            {!isLoading && children}
        </AuthContext.Provider>
    )
}