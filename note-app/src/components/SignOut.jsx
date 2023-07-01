import { auth } from "../firebase.js";

function SignOut() {
  return (
    auth.currentUser && (
      <button
        className="sign-out"
        onClick={() => auth.signOut().then(() => window.location.reload())}
      >
        Sign Out
      </button>
    )
  );
}

export default SignOut;