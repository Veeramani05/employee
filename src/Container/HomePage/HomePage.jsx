import React, { PureComponent, Fragment } from 'react';

import { connect } from "react-redux"
import { userActions } from './../_actions'

class HomePage extends PureComponent {

  componentDidMount = async () => {
    await this.getEmployeeList()
  }

  getEmployeeList = async () => {
    const { getAllEmployeeList } = this.props;
    await getAllEmployeeList();
  }
  tableForm = (data = []) => {
    return data.map(v => <div className="row">
      <div className="id">{v["id"]}</div>
      <div className="desc">
        <h2 style={{ textTransform: "uppercase" }}>{v["name"]} - <span style={{ textTransform: "lowercase", color: "#a09999" }}>{v["email"]}</span></h2>
        <p>{v["gender"]} - <span>(AGE: {v["age"]})</span></p>
      </div>
    </div>)
  }

  render() {
    const { empData: { users: { empData }, authentication: { email } } } = this.props;

    return (
      <Fragment>
        <div className="banner">
          <p>Welcome <h3>{email}</h3> </p>
        </div>

        <div className="cover-div">
          <h3 style={{marginBottom:"1rem",color:"#00BCD4",fontSize:"2rem"}}>Employee Details</h3>
          {this.tableForm(empData)}

        </div>

      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    empData: state
  }
}
const mapDispatchProps = (dispatch) => {
  return {
    getAllEmployeeList: () => dispatch(userActions.getAllEmployeeList())
  }
}
export default connect(mapStateToProps, mapDispatchProps)(HomePage)