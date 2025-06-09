
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MOVIES = [{
  id: 1,
  movie: "Action"
},
{
  id: 2,
  movie: "Drama"
}, {
  id: 3,
  movie: "Comedy"
},
{
  id: 4,
  movie: "Horror"
}, {
  id: 5,
  movie: "Thriller"
}, {
  id: 6,
  movie: "Sci-Fi"
},
{
  id: 7,
  movie: "Adventure"
}, {
  id: 8,
  movie: "Family"
},
{
  id: 9,
  movie: "Animation"
}

]

export default function Home() {
  const [movie, setMovie] = useState([])
  const handleClick = (id) => {

    // 1. remove the selection if already selected
    // 2. add the selection if not selected

    if (movie?.includes(id)) {
      setMovie(movie.filter(movie => movie !== id))
    }
    else {
      setMovie([...movie, id])
    }

  }
  const getNameById = (id) => {
    return MOVIES.find(m => m.id === id).movie
  }
  const navigate = useNavigate()
  const handleNaviagte = (path) => {
    navigate(path)
  }
  return (
    <div style={{
      display: "flex"
    }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}>
        {movie.map(m => {
          return <div style={{
            margin: "10px",
            padding: "10px",
          }}>{
              getNameById(m)
            }
            <span style={{
              marginLeft: "10px",
              cursor: "pointer",
            }} onClick={() => handleClick(m)}>X</span>
          </div>

        })}


      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}>
        {MOVIES.map(m => <div
          style={{
            border: `${movie.includes(m.id) ? "4px solid green" : "1px solid black"}`,
            padding: "10px",
            margin: "10px",
            textAlign: "center",
            fontSize: "20px",
            cursor: "pointer"
          }}
          onClick={() => handleClick(m.id)}
        >


          {m.movie}</div>)}
      </div>


      <button disabled={movie.length < 3} onClick={() => handleNaviagte("/widgets")}  >Next</button>
    </div >
  )

}
