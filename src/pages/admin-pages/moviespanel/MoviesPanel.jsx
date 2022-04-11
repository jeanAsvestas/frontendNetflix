import "./MoviesPanel.scss"
import Sidebar from "../../../components/admin-components/sidebar/Sidebar"
import NavbarAdmin from "../../../components/admin-components/navbar-admin/Navbar-admin"
import Datatable from "../../../components/admin-components/datatable-movies/Datatable-movies"

function ListAdmin() {
  return (
    <div className="listAdmin">
      <Sidebar />
      <div className="listAdminContainer">
        <NavbarAdmin />
        <Datatable />

      </div>
      {/* <Link to="/admin/moviespanel/addmovie">Add Movie</Link> */}
    </div>
  )
}

export default ListAdmin