import { useEffect, createContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, dataBase } from '../firebase';
import addUser from '../actions/addUser';
import Loader from "../components/Loader/Loader";

export const UserContext = createContext({ user: null });

export const UserProvider = (props) => {


  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      console.log(userAuth);

      setUser(userAuth)

      if (userAuth === null) {
        history.push("/");
      } else {
        dataBase.ref('profiles/' + userAuth.uid).once('value')
          .then(snapshot => dispatch(addUser(snapshot.val())))
          .then(() => setLoaded(true))
          .then(() => history.push("/office"))
      }

    })

  },[dispatch, history])

  return (
    <UserContext.Provider value={user}>
      {/* {loaded
        ? props.children
        : "loading"
        // : <Loader /> 
      } */}
      {props.children}
    </UserContext.Provider>
  )
}