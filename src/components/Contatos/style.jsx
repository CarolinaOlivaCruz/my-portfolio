import styled from "styled-components";

const StyledContainer = styled.section`
  width: 80%;
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
    gap: 30px;

    li {
      display: flex;
      align-items: center;
      gap: 5px;
    }

    a {
      color: #000;
    }
  }
`;

export default StyledContainer;
