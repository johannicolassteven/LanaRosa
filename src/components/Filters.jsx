import React from "react";
import { styled } from "styled-components";
import { useFilterContext } from "../context/filter-context";

const Filtros = () => {
  const {
    grid_view,
    setGridView,
    setListView,
  } = useFilterContext()

  return (
    <Wrapper>
      <div className="header">
     
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          fill="black"
          className="bi bi-funnel"
          viewBox="0 0 16 16"
        >
          <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
        </svg>
        <h1>Filtrar por :</h1>
      </div>
      <hr />
      <div className="filtros">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          fill="black"
          viewBox="0 0 16 16"
          onClick={setListView}
          className={`bi bi-view-list ${!grid_view ? 'active' : null}`}
        >
          <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z" />
        </svg>{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          fill="black"
          viewBox="0 0 16 16"
          onClick={setGridView}
          className={`bi bi-border-all ${grid_view ? ' active' : null}`}
        >
          <path d="M0 0h16v16H0V0zm1 1v6.5h6.5V1H1zm7.5 0v6.5H15V1H8.5zM15 8.5H8.5V15H15V8.5zM7.5 15V8.5H1V15h6.5z" />
        </svg>
      </div>
           {console.log(grid_view)}


    <div>{grid_view}</div>

    </Wrapper>

   
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  margin: 0 10px;



  .header {
   
    display: flex;
    h1 { margin-top: 5px;
      font-size: 1rem;
    }
  }

  hr {
    height: 1px;
   min-width: 45%;
    max-width: 90rem;
    border: solid black 1px;
    margin: 1rem;
  }
  .filtros{
    svg{
      margin:0  5px;
    }
  }

  .active {
    
      background: var(--azul);
    }

  @media (min-width: 992px){
    display: flex;
    justify-content: end;
    margin-right: 5rem;
    hr{
         min-width: 30%;
    }
  }
`;

export default Filtros;
