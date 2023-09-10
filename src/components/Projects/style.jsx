import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  margin: 60px auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    li {
      max-width: 330px;
      width: 100%;
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
    border: 1px solid #80808017;
    border-radius: 4px;
    padding: 10px;
    color: #000;
    background-color: #dcdad142;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.05);
      background-color: #243245;
      color: #ffff;
    }
  }

  @media (min-width: 750px) {
    ul {
      width: 90%;
      flex-direction: row;

      li {
        min-width: 200px;

        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 7;
          overflow: hidden;
          text-overflow: ellipsis;
          max-height: 7 * 1.2em;
          transition: max-height 0.5s ease-in-out;

          &:hover {
            display: flex;
          }
        }
      }
    }
  }

  @media (min-width: 1000px) {
    ul {
      width: 75%;
      flex-direction: row;

      li {
        min-height: 350px;
      }
    }
  }
`;

export default StyledContainer;
