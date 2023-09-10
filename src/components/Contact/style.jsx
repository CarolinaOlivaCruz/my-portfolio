import styled from "styled-components";

const StyledContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-top: 1px solid grey;

  img {
    width: 30px;
  }

  ul {
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;

    li {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    a {
      color: #000;

      :hover {
        color: #243245;
        font-weight: 600;
      }
    }
  }

  @media (min-width: 1000px) {
    width: 60%;
  }
`;

export default StyledContainer;
