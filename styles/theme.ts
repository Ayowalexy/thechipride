import { extendTheme } from "@chakra-ui/react";

let colors = {
    brand: {
        text: '#575A74',
        blue: '#5446FD',
        bg: '#0D141E',
        bg1: '#E5E5E5',
        bg2: '#FAFAFA',
        bg3: '#EEECFF',
        white: '#FFF',
        inactiveText: '#948EA5',
        error: '#E00F65',
        black: '#000',
        placeholder: '#575A74'
    },


}


let fonts = {
    body: 'Manrope'
}

const theme = extendTheme({ colors })

export default theme