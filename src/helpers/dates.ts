export const formatDate = (date) => {
    const day = date.getDate().toString().length === 1 ? 0 + date.getDate().toString() : date.getDate().toString()
    const month = (date.getMonth()+1).toString().length === 1 ? 0 + (date.getMonth()+1).toString() : (date.getMonth()+1).toString()
    return `${day}.${month}`
}