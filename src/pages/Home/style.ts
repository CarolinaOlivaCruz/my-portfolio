import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledMain = styled.main`
  max-height: 250px;
  background-color: #ffff;

  section {
    width: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    border-radius: 20px;
    transform: translateY(-40%);
    background-color: #fafafa;
    padding: 30px;
    box-shadow: 0 5px 15px 5px grey;

    div {
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: #14154c;

      h1 {
        margin-bottom: 20px;
      }
    }

    img {
      width: 280px;
      height: 300px;
      border-radius: 20px;
      object-fit: cover;
    }

    button {
      width: 100%;
      margin-top: 20px;
      margin: 20px auto;
      padding: 10px;
      text-align: center;
      color: #ffff;
      background-color: #097aff;
      border-radius: 8px;

      a {
        color: #ffff;
      }
    }
  }
`;

export const StyledContentLink = styled.footer`
  width: 60%;
  height: 20px;
  margin: 0 auto;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  gap: 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`;
