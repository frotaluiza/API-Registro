import {http} from "./config"

export default{

    listar:() => {
        return http.get('Pessoas')
    },

    salvar:(pessoa) => {
        return http.post('Pessoas',pessoa)
    },

    atualizar:(pessoa) => {
        var id = pessoa.id;
        return http.put(`Pessoas/${id}`,pessoa)
    },

    apagar:(pessoa) => {
        var id = pessoa.id;
        return http.delete(`Pessoas/${id}`, {data: pessoa})
    }

}