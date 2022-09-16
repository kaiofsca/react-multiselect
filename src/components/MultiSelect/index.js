import React, { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import './style.css'

const animatedComponents = makeAnimated()

// O select vai carregar o array de objetos na tela e com o "isMulti" eles podem ser selecionados e continuam selecionados.

const options = [
    { value: "produto 01", label: "Produto 01" },
    { value: "produto 02", label: "Produto 02" },
    { value: "produto 03", label: "Produto 03" },
    { value: "produto 04", label: "Produto 04" },
    { value: "produto 05", label: "Produto 05" },
    { value: "produto 06", label: "Produto 06" },
    { value: "produto 07", label: "Produto 07" },
    { value: "produto 08", label: "Produto 08" },
]

export const MultiSelect = () => {

    const [selectedOptions, setSelectedOptions] = useState([])

    const handleSelect = () => {
        console.log(selectedOptions)
    }

    return (
        <>
            <Select
            components={animatedComponents}
            className='select' 
            isMulti 
            onChange={(item) => setSelectedOptions(item)}
            options={options}
            isClearable={true} // true caso eu queira excluir os itens de uma vez
            isSearchable={true} // true caso queira q a barra de pesquisar funcione (ai ja faz o filtro)
            isDisabled={false} // quando o campo fica inoperante
            isLoading={false} // faz um loading ()
            isRtl={false} // inverte o campo
            closeMenuOnSelect={false} // ao selecionar um item a aba de itens continua aberta
            />

            <button onClick={handleSelect}>Imprimir itens no console</button>

        </>
  )
}
