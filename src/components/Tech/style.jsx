import styled from "styled-components";

const StyledContainer = styled.section`
  height: 70vh;
 
  ul {
    width: 70%;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 40px;
    border: 1px solid grey;
    border-radius: 4px;

    img {
      width: 80px;
      padding: 20px 0;
      object-fit: cover;
    }
  }
`;

export default StyledContainer;
