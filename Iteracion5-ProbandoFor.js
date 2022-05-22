//Usa un bucle for para recorrer todos los destinos del array y elimina los elementos 
//que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:


const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}
]



const placesToVisit = [];
for (const place of placesToTravel) {
  if (place.id !== 40 && place.id !== 11) {
    placesToVisit.push(place);
  }
}

console.log(placesToVisit);



