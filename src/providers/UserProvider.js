import { useEffect, createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, dataBase } from '../core/api/firebase';
import {addUser} from '../providers';

export const UserContext = createContext({ user: null });
export const UserProvider = (props) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {

      setUser(userAuth)

      if (userAuth === null) {
        history.push("/users");
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