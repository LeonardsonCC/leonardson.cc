import styled from 'styled-components'

export const SliderItemTheme = styled.div`
    margin: 0 40px;
    min-width: 300px;
    height: 420px;
    background-color: white;
    border-radius: 20px;
    .SliderImage {
        width: 100%;
        height: 55%;
        background-size: cover;
        background-position: center;
        border-radius: 20px 20px 0 0;
    }
    .SliderText {
        color: black;
        padding: 20px;

        h2 {
            margin: 10px 0;
        }
    }
    `