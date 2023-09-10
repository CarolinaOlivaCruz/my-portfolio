import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 130px;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: #ffff;
  box-shadow: 0 1px 4px #243245;
  display: flex;
  align-items: center;

  div {
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 5px;

    button {
      color: #243245;
      font-size: 18px;
    }
  }

  @media (min-width: 750px) {
    max-height: 80px;

    div {
      width: 70%;
      flex-direction: row;
    }
  }

  @media (min-width: 1000px) {
    div {
      width: 60%;
      max-width: 1100px;
    }
  }
`;

export const ContentContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    width: 100%;
    margin: 0 auto;
  }
`;
