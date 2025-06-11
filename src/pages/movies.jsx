export default function Movies() {
    const movies = JSON.parse(localStorage.getItem("selectedMovies"))
    return (
        <div>
            {movies.map(m => {
                return (
                    <>
                        <h3 style={{
                            color: "grey",
                            margin: "10px",
                        }}>{m}</h3>
                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr 1fr 1fr",
                            gap: "10px",
                        }}>
                            {Array(6).fill(0).map((ele) => <div style={{
                                height: "30vh",
                                backgroundColor: "grey",
                            }}></div>)}
                        </div>
                    </>
                )
            })}
        </div >
    )
}