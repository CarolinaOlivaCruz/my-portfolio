import styled from "styled-components";

export const StyledList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  overflow: auto;
  scrollbar-width: initial;

  li {
    min-width: 250px;
    height: 200px;
    padding: 10px 15px;
    border: 1px solid #3f38f9;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 5px 15px grey;

    p {
      font-weight: bold;
    }

    span {
      overflow: hidden;
      text-overflow: clip ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    a {
      padding: 10px 0;
      text-align: center;
      color: #ffff;
      background-color: #3f38f9;
      border-radius: 8px;
    }
  }

  @media (min-width: 700px) {
    flex-wrap: wrap;

    li {
      width: 300px;
    }
  }

  @media (min-width: 900px) {
    flex-wrap: wrap;

    li {
      width: 250px;
    }
  }
`;
