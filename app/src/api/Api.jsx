




const Api = () => {
    
    return fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        const { results = [] } = data
        const info = results.map(infos => {
            const { name, id, gender, image } = infos
            return { name, id, gender, image }
        
        })
        return info
        
    })
}
 
export default Api;