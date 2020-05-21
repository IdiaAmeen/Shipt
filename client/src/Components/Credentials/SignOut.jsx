import React, { useEffect } from "react";
import { signOut } from "../../services/user";
import { useHistory } from "react-router-dom";

export default function SignOut(props) {
  const { clearUser, user } = props;
  const history = useHistory();

  useEffect(() => {
    signOut(user)
      .then(() => localStorage.setItem("token", ""))
      .then(() => props.setCurrentUser(null))
      .finally(() => history.push("/"));
  });

  return "";
}
