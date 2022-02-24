import 'core-js'
import 'regenerator-runtime/runtime'

function formatDate() { 
    const date = new Date(); 
    const formatDate = date.toLocaleString(); 
    return formatDate; 
}

alert('Data e hora serão exibidas como teste!')
alert(formatDate())