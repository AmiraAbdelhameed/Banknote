import { v4 } from "uuid";
import { Home } from "../pages";
import Layout from "../layout/Layout";
export default [
  {
    id: v4(),
    path: "/",
    element: <Layout />,
    children: [
      {
        id: v4(),
        index: true,
        element: <Home />,
      },
    ]
  }
]
