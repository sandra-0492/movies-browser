import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        overflow-y: scroll;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: "Poppins", sans-serif;
        background: ${({ theme }) => theme.colors.whipser};
        color: ${({ theme }) => theme.colors.black};
        overflow-wrap: anywhere;
        padding-bottom: 100px;

        @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
            padding-bottom: 32px;
        }
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;
