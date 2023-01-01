import styled from "styled-components";

export const StyledHeader = styled.header`
  img {
    width: 100%;
    height: 180px;
    object-fit: fill;
  }

  @media (min-width: 700px) {
    height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 1400px) {
    height: 400px;
  }
`;

export const StyledMain = styled.main`
  width: 90%;
  max-height: 500px;
  margin: 0 auto;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transform: translateY(-16%);

    img {
      width: 180px;
      height: 180px;
      border-radius: 180px;
      object-fit: cover;
      border: 5px solid #ffff;
    }

    div {
      width: 90%;
      margin-top: 20px;
      display: flex;
      color: #14154c;
      flex-direction: column;
      border-radius: 20px;
      box-shadow: 0 5px 15px 5px grey;
      padding: 15px;

      h1 {
        text-align: center;
        margin-bottom: 10px;
      }

      p {
        margin-top: 10px;
        text-align: left;
      }
    }

    a {
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

  @media (min-width: 700px) {
    section {
      transform: translateY(-25%);
      gap: 20px;

      img {
        width: 350px;
        height: 350px;
        border-radius: 250px;
      }
    }
  }

  @media (min-width: 1020px) {
    width: 100%;
    max-height: 220px;

    section {
      width: 80%;
      margin: 0 auto;
      flex-direction: row;
      border-radius: 20px;
      transform: translateY(-35%);
      background-color: #fafafa;
      padding: 10px 30px;
      box-shadow: 0 5px 15px 5px grey;

      div {
        width: 500px;
        flex-direction: column;
        box-shadow: none;
      }

      img {
        margin-right: 40px;
        width: 280px;
        height: 300px;
        border-radius: 20px;
        object-fit: cover;
        border: none;
      }
    }

    @media (min-width: 1200px) {
      section {
        width: 60%;
      }

      max-height: 280px;
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

  @media (min-width: 700px) {
    margin-top: 60px;
  }

  @media (min-width: 1200px) {
    margin-top: 0;
  }
`;
