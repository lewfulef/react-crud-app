import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

export const Home = () => {
  const moviesCollectionRef = collection(db, "movies");
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("")
  const [year, setYear] = useState("")
  const [director, setDirector] = useState("")

  const getMovies = async () => {
    const data = await getDocs(moviesCollectionRef);
    setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const createMovie = async () => {
    await addDoc(moviesCollectionRef, { title, year, director })
    getMovies()
  };

  const deleteMovie = async (id) => {
    const movieDoc = doc(db, 'movies', id)
    await deleteDoc(movieDoc)
    getMovies()
  }

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>

    <input
      type="string"
      placeholder="Name"
      value={title}
      onChange={(event) => setTitle(event.target.value)}
    />

    <input
      type="string"
      placeholder="Year"
      value={year}
      onChange={(event) => setYear(event.target.value)}
    />

    <input
      type="string"
      placeholder="Director"
      value={director}
      onChange={(event) => setDirector(event.target.value)}
    />

    <Button onClick={createMovie} variant="success">Agregar</Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
          </tr>
        </thead>
        <tbody>
          {
          
            movies.map((movie) => (
            <tr key={movie.id} >
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.director}</td>
              <td>
                <Button variant="warning">Edit</Button>
                <Button onClick={() => {deleteMovie(movie.id)}} variant="danger">Delete</Button>
              </td>
            </tr>

          ))}
        </tbody>
      </Table>
    </>
  );
};
