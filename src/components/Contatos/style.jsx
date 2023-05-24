import styled from "styled-components";

const StyledContainer = styled.section`
  width: 80%;
  margin: 55px auto;
  height: 90vh;
  display: flex;
  align-items: center;
  gap: 100px;

  img {
    width: 50px;
    object-fit: cover;
   
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
`;

export default StyledContainer;
