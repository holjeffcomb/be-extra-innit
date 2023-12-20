import styled from "styled-components";

const HeaderStyles = styled.div`
  background-color: #c1c1c1;
`;

function Header() {
  return (
    <HeaderStyles className="container">
      <h1>BE EXTRA INNIT</h1>
    </HeaderStyles>
  );
}

export default Header;
