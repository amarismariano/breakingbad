import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Quote from "./components/Quotes";

const Container = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  //Estado de las frases
  const [quotes, setQuotes] = useState({});

  //Llamada al endpoint para sacar la data
  const url = "https://breakingbadapi.com/api/quote/random";
  const searchApi = async () => {
    const result = await fetch(url);
    const quote = await result.json();
    setQuotes(quote[0]);
  };

  //Cargar una frase apenas inicie automaticamente
  useEffect(() => {
    searchApi();
  }, []);

  return (
    <Container>
      <Quote quotes={quotes} />
      <Button onClick={searchApi}>Obtener frase</Button>
    </Container>
  );
}
