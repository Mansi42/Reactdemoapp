import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";

import {
  users,
  clearState,
  extraReducers,
  getUsers,
  userSelector,
} from "./Redux/Reducers/UserReducer";

export default function User() {
  const dispatch = useDispatch();
  const { isFetching, errorMessage, isError, users } =
    useSelector(userSelector);

  useEffect(() => {
    dispatch(clearState());
    dispatch(getUsers());
  }, []);

  return (
    <>
      {isFetching ? (
        <div>loading</div>
      ) : (
        <div>
          <>
            <Table class="table-info" striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Age</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users && users.length && (
                  <>
                    {users.map((element, index) => {
                      return (
                        <tr>
                          <td>{index}</td>
                          <td>{element.name}</td>
                          <td>{element.email}</td>
                          <td>{element.password}</td>
                          <td>{element.age}</td>
                          <td>{element.role}</td>
                        </tr>
                      );
                    })}
                  </>
                )}
              </tbody>
            </Table>
          </>
        </div>
      )}
    </>
  );
}
