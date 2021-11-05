import { createTheme, style} from "@vanilla-extract/css";

const [themeClass, vars] = createTheme({
    color: {
        brand: 'blue'
    },
    font: {
        body: 'arial'
    }
})

export { themeClass }

export const exampleStyle = style({
    backgroundColor: vars.color.brand,
    fontFamily: vars.font.body,
    color: 'white',
    padding: 10
})