import { userConstants } from './../_constants';

const setUserId = (val) => {
  return {
    type: userConstants.SET_USERNAME,
    payload: val
  }
}

const setPassword = (val) => {
  return {
    type: userConstants.SET_PASSWORD,
    payload: val
  }
}

const getAllEmployeeList = () => {
  return {
    type: userConstants.GET_EMP_DETAILS,
    payload: [
      {
        "id": 1, "name": "test1", "age": "11", "gender": "male", "email": "test1@gmail.com", "phoneNo": "9415346313"
      },
      {
        "id": 2, "name": "test2", "age": "12", "gender": "male", "email": "test2@gmail.com", "phoneNo": "9415346312"
      },
      {
        "id": 3, "name": "test3", "age": "13", "gender": "male", "email": "test3@gmail.com", "phoneNo": "9415346313"
      },
      {
        "id": 4, "name": "test4", "age": "14", "gender": "male", "email": "test4@gmail.com", "phoneNo": "9415346314"
      },
      {
        "id": 5, "name": "test5", "age": "15", "gender": "male", "email": "test5@gmail.com", "phoneNo": "9415346315"
      },
    ]
  }
}


export const userActions = {
  setUserId,
  setPassword,
  getAllEmployeeList
}