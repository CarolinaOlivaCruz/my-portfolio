import styled from "styled-components";

const StyledContainer = styled.section`
  width: 100%;
  margin: 150px auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  img {
    width: 250px;
    object-fit: cover;
    box-shadow: 50px 30px #243245;
    border-radius: 4px;
    border: 3px solid #ffff;
  }

  article {
    width: 100%;
    padding-left: 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 15px;

    h1 {
      font-size: 20px;
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

  /* width: 80%;
  margin: 55px auto;
  height: 90vh;
  display: flex;
  align-items: center;
  gap: 100px;

  img {
    max-width: 300px;
    object-fit: cover;
    box-shadow: 50px 30px #243245;
    border-radius: 4px;
    border: 3px solid #ffff;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
} */
`;

export default StyledContainer;
