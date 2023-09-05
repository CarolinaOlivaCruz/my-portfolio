import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 120px;
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

  /* height: 80px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: #ffff;
  box-shadow: 0 1px 4px #243245;
  display: flex;
  align-items: center;

  div {
    width: 80%;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      color: #243245;
      font-size: 20px;
    }
  } */
`;

export const ContentContainer = styled.main`
  width: 90%;
  margin: 0 auto;

  div {
    width: 90%;
  }

  img{
    width: 250px;
  }

  /* width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    width: 90%;
  } */
`;
