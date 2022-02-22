function formatDate() { 
    const date = new Date(); 
    const formatDate = date.toLocaleString(); 
    return formatDate; 
}  

alert('A data e hora de agora serão exibidas como teste no próximo alert.')
alert(formatDate())