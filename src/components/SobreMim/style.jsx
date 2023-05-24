import styled from "styled-components";

const StyledContainer = styled.section`
  width: 80%;
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
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
`;

export default StyledContainer;
