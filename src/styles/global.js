import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`

:root {
  --primary: ${(props) => props.theme.colors.primary};
  --secondary: ${(props) => props.theme.colors.secondary};
  --tertiary: ${(props) => props.theme.colors.tertiary};
  --font-color: ${(props) => props.theme.colors.textColor};
  --bg-color: ${(props) => props.theme.colors.bgColor};
}
`;

function MyComponent() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="./style.css" />
      </Helmet>
      <GlobalStyle />
    </>
  );
}

export default MyComponent;
