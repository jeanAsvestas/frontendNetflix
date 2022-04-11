import "./single.scss"
import Sidebar from "../../../components/admin-components/sidebar/Sidebar"
import NavbarAdmin from "../../../components/admin-components/navbar-admin/Navbar-admin"


function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <NavbarAdmin />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/2901923/pexels-photo-2901923.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Margaret Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">margaretdoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">6978466328</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">Tsirligkou 3, Agios Dimitrios, Athens</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">Greece</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="userDetails">
              <h1 className="membersince">
                <p>Member Since:</p>
                <span className="memberDate">25 February 2018</span>
                <p>Time Registered:</p>
                <span className="memberTime">16:23:22</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="bottom">

        </div>
      </div>
    </div>
  )
}

export default Single