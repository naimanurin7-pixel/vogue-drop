import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }) {

  const user = true

  return user
    ? children
    : <Navigate to="/login" />
}

export default ProtectedRoute