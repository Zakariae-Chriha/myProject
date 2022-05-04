import React from "react";

function logout() {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      {loggedIn ? (
        <>
          {user.name}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button>
            <Link to="/home">Login</Link>
          </button>
        </>
      )}
    </div>
  );
}

export default logout;
