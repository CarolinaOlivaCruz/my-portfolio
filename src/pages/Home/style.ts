import styled from "styled-components";

export const StyledHeader = styled.header`
  img {
    width: 100%;
  }
`;

export const StyledProfile = styled.section`
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border: 2px solid #6e0d92;
  border-radius: 20px;
  transform: translateY(-50%);
  background-color: #fafafa;
  padding: 30px;

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
    height: 250px;
    width: 280px;
    border-radius: 20px;
    object-fit: cover;
  }

  button {
    margin-top: 20px;
    padding: 10px;
    text-align: center;
    color: #ffff;
    background-color: #097aff;
    border-radius: 8px;

    a {
      color: #ffff;
    }
  }
`;
