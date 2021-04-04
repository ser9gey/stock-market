import { useEffect, createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, dataBase } from '../firebase';
import addUser from '../actions/addUser';

export const UserContext = createContext({ user: null });

export const UserProvider = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      console.log(userAuth);

      setUser(userAuth)

      if (userAuth === null) {
        history.push("/");
      } else {
        dataBase.ref('profiles/' + userAuth.uid).once('value')
          .then(snapshot => dispatch(addUser(snapshot.val())))
          .then(() => history.push("/office"))
      }
    })

  },[dispatch, history])

  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  )
}