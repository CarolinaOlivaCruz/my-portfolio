import styled from "styled-components";

export const StyledContentDash = styled.section`
  width: 100%;
  color: #14154c;
  background-color: #ffff;

  header {
    img {
      width: 100%;
      height: 200px;
      object-fit: fill;
      box-shadow: 0 3px 25px 5px grey;
    }
  }

  main {
    width: 90%;
    padding: 40px 0;
    margin: 0 auto;

    h2 {
      padding: 10px 0;
      text-align: center;
      margin-bottom: 40px;
      color: #ffff;
      background-color: #3f38f9;
      border-radius: 8px;
    }

    @media (min-width: 900px) {
      width: 85%;
    }
  }
`;
