import styled from "styled-components";

const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  ul {
    width: 100%;
    margin: 0 auto;
    margin-top: -90px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 10px 0;
    gap: 5px;

    img {
      width: 60px;
    }
  }

  @media (min-width: 750px) {
    width: 90%;

    ul {
      margin-top: -70px;
      gap: 15px;
    }
  }

  @media (min-width: 1000px) {
    width: 75%;
  }
`;

export default StyledContainer;
