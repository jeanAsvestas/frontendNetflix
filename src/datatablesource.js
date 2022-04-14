export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 330,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src=".././images/avatar.jpg" alt="avatar" />
          {`${params.row.firstName} ${params.row.lastName}`}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  }
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/2901923/pexels-photo-2901923.jpeg?cs=srgb&dl=pexels-wesley-carvalho-2901923.jpg&fm=jpg",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/2901923/pexels-photo-2901923.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    email: "2sisterfucker@gmail.com",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/2901923/pexels-photo-2901923.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    email: "3lannister@gmail.com",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/2901923/pexels-photo-2901923.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    email: "4wolf@gmail.com",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/2901923/pexels-photo-2901923.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    email: "5dragon@gmail.com",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/2901923/pexels-photo-2901923.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    email: "6witch@gmail.com",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/2901923/pexels-photo-2901923.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    email: "7snow@gmail.com",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/2901923/pexels-photo-2901923.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    email: "8tiafoe@gmail.com",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/2901923/pexels-photo-2901923.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    email: "snowflake@gmail.com",
    age: 65,
  },
  {
    id: 10,
    username: "Roxanne",
    img: "https://images.pexels.com/photos/2901923/pexels-photo-2901923.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    email: "beatles@gmail.com",
    age: 65,
  },
];