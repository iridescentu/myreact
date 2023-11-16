import { Navigate } from "react-router-dom";
import { Login } from "./Login";

// export function ProtectedRoute() {
//   return (
//     <>
//       {/* { if (로그인이 되었는지 확인하는 조건 필요) {
//                 return childeren => 자식(dashboard)
//             } else {
//                 return 로그인 페이지
//             } } */}
//     </>
//   );
// }

export function ProtectedRoute({ children }) {
  // 로그인이 되어 있는지 확인하는 조건 필요
  if (true) {
    return children;
  } else {
    return <Login />;
  }
}
