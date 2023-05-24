import styled from "styled-components";

const StyledContainer = styled.section`
  height: 80vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;

    li {
      max-width: 300px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      box-shadow: 0 0 5px 0.5px grey;

      img {
        width: 100%;
      }

      div {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        h3 {
          text-align: center;
        }
      }

      .content-links {
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    }
  }

  a {
    border: 1px solid grey;
    border-radius: 4px;
    padding: 10px;
    color: #000;
  }
`;

export default StyledContainer;
