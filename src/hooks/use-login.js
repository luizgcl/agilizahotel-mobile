import { localDatabase } from "../local-database/local-database"
import { firebase } from "../../firebase-connection"
import { useNavigation } from "@react-navigation/native"

export function useLogin({ email }) {
    const navigation = useNavigation()
    const loggedUser = localDatabase.getString('loggedUser')

    const handleLogin = ({ email, password }) => {
        if (!email || !password) {
            alert('Preencha os campos corretamente!')
            return;
        }
        
        firebase.auth()
          .signInWithEmailAndPassword(email, password)
          .then(({ user }) => {
            if (user.uid) {
              navigation.navigate('Home')

              localDatabase.set('loggedUser', email)
            }
          })
          .catch((error) => {
            console.log(error)
            if (error)
              alert('Credenciais inválidas!');
          })
    }

    const handleLogout = () => {
      if (loggedUser) {
        localDatabase.delete('loggedUser')
      }
    }

    return [isLogged = loggedUser != null, email = loggedUser, handleLogin, handleLogout]
}