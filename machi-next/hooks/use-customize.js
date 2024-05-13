//3
// hooks/use-customize.js
import { createContext, useState, useContext } from 'react'

const CustomizeContext = createContext(null)

export function CustomizeProvider({ children }) {
  const [customize, setCustomize] = useState({
    sizePrice: { size: '', price: '' },
    layer: '',
    flavor: '',
    deco: '',
  })

  const setSizePrice = (size, price) => {
    setCustomize((prevState) => ({ ...prevState, sizePrice: { size, price } }))
  }

  const setLayer = (layer) => {
    setCustomize((prevState) => ({ ...prevState, layer }))
  }

  const setFlavor = (flavor) => {
    setCustomize((prevState) => ({ ...prevState, flavor }))
  }

  const setDeco = (deco) => {
    setCustomize((prevState) => ({ ...prevState, deco }))
  }

  return (
    <CustomizeContext.Provider
      value={{
        customize,
        setSizePrice,
        setLayer,
        setFlavor,
        setDeco,
      }}
    >
      {children}
    </CustomizeContext.Provider>
  )
}

export const useCustomize = () => useContext(CustomizeContext)

//1
// import { createContext, useState } from 'react'

// // const CustomizeProvider = createContext()

// export function CustomizeProvider({ children }) {
//   const [customizeSize, setCustomizeSize] = useState({ size: '8吋', price: '' })

//   const [customizeLayer, setCustomizeLayer] = useState(0)
//   const [customizeFlavor, setCustomizeFlavor] = useState('')
//   const [customizeDeco, setCustomizeDeco] = useState([])

//   return (
//     <CustomizeContext.Provider
//       value={{
//         customizeSize,
//         setCustomizeSize,
//         customizeLayer,
//         setCustomizeLayer,
//         customizeFlavor,
//         setCustomizeFlavor,
//         customizeDeco,
//         setCustomizeDeco,
//       }}
//     >
//       {children}
//     </CustomizeContext.Provider>
//   )
// }
// export default CustomizeProvider

// contexts/CustomizeProductContext.js

//2
// import { createContext } from 'react'

// const CustomizeProductContext = createContext('')

// export default CustomizeProductContext
