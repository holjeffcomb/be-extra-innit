import styled from "styled-components";

const MainContainer = styled.div`
  background-color: #bf4f74;
`;

function Content() {
  return (
    <MainContainer className="container">
      <h1 className="text-center">HERE IS THE CONTENT</h1>
      <button className="btn btn-primary">CLICK ME</button>
      <button className="btn btn-success">CLICK ME</button>
    </MainContainer>
  );
}

export default Content;
