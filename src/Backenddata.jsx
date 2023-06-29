import axios from "axios";

export const postFunc = (name, email, password, age, role) => {
  try {
    axios
      .post(
        "http://localhost:8081/addNewUser",
        //.post("http://localhost:3000/users/post",
        {
          name,
          email,
          password,
          age,
          role,
        }
      )
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    console.log("error", error);
  }
};

export const getFunc = async () => {
  try {
    const response = axios.get("http://localhost:8081/newusers");
    //const response=axios.get("http://localhost:3000/users/get")
    return response;
  } catch (error) {
    console.log("error", error);
  }
};

export const updateFunc = async (_id, name, email, password, age, role) => {
  try {
    axios
      //const response=axios.get("http://localhost:3000/users/change{$_id}")
      .put(`http://localhost:8081/updateUser/${_id}`, {
        name,
        email,
        password,
        age,
        role,
      })
      .then((response) => {
        return response;
      });
  } catch (error) {
    console.log("error", error);
  }
};

export const deleteFunc = async (_id, name, email, password, age, role) => {
  try {
    axios
      .delete(`http://localhost:8081/deleteUser/${_id}`, {
        //const response=axios.get("http://localhost:3000/users/remove{$_id}")
        name,
        email,
        password,
        age,
        role,
      })
      .then((response) => {
        return response;
      });
  } catch (error) {
    console.log("error", error);
  }
};

export const addFunc = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:8081/SignIn", {
      email,
      password,
    });
    if (response.status === 200) {
      return Promise.resolve(response);
    }
  } catch (error) {
    if (error.response.status === 422) {
      return Promise.reject({ status: 422, message: error.response.data.msg });
    }
    return Promise.reject({
      status: error.status,
      message: error.response.data.msg,
    });
  }
};

export const emailFunc = async (data) => {
  try {
    const response = await axios.post("http://localhost:8081/emailSend", data);
    if (response.status == 200) {
      Promise.resolve(response);
      return response;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
