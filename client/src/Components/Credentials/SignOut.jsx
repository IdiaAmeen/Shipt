import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { signOut } from "../../services/user";

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
