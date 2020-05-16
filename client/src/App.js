
import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";

import SignUp from "./Components/Credentials/Sign-up";
import SignIn from "./Components/Credentials/Sign-in";
import ChangePassword from "./Components/Credentials/Change-password";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    return (
        <div className="App">
            <Link to="/"> Home</Link>
            <Link to="/sign-up"> Sign-up </Link>
            <Link to="/sign-in"> Sign-in </Link>
            <Link to="/change-password"> ChangePassword </Link>

            <Switch>
                <div>
                    <Route exact path="/sign-up" render={() => <SignUp setCurrentUser={setCurrentUser} />} />
                    <Route exact path="/sign-in" render={() => <SignIn setCurrentUser={setCurrentUser} />} />
                    <Route exact path="/change-password" render={() => <ChangePassword setCurrentUser={setCurrentUser} />} />
                </div>
            </Switch>

        </div>
    );

}

export default App;




// import React from 'react';
// import './App.css';
// import { Switch, Route } from "react-router-dom";
// import Layout from './components/shared/Layout';


// function App() {
//   return (
//     <div className="App">
//       <Switch>
//         <Layout></Layout>
//       </Switch>
//     </div>
//   );

// }

// export default App;
