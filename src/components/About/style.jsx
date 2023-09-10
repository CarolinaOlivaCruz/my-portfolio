import styled from "styled-components";

const StyledContainer = styled.div`
  width: 90%;
  margin: 150px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  img {
    width: 250px;
    margin-left: -14%;
    object-fit: cover;
    box-shadow: 50px 30px #243245;
    border-radius: 4px;
    border: 3px solid #ffff;
  }

  article {
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 15px;

    h1 {
      font-size: 20px;
    }

    a {
      color: #000;
      font-style: italic; 

      :hover {
        color: #243245;
        font-weight: 600;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    span {
      font-size: 18px;
      font-weight: bold;
    }
  }

  @media (min-width: 750px) {
    width: 90%;
    margin: 120px auto;
    flex-direction: row;

    img {
      margin-top: -40px;
      margin-left: 0%;
    }
    article {
      margin-left: 10px;
    }
  }

  @media (min-width: 1000px) {
    max-width: 1100px;

    img {
      margin-top: -30px;
      margin-left: 5%;
    }

    article {
      margin-left: 50px;
      padding: 15px 10px;
    }
  }
`;

export default StyledContainer;
