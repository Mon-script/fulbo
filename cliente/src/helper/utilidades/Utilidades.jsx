export const createDateTime = (fecha, hora) => {
    const datePart = fecha.split('T')[0]; // Solo obtenemos la parte de la fecha
    const timePart = hora; // La hora permanece igual
    const dateTimeString = `${datePart}T${timePart}`; // Formato: 'YYYY-MM-DDTHH:mm:ss'
    const date = new Date(dateTimeString);
    console.log(`Fecha: ${datePart}, Hora: ${timePart}, Date Object: ${date}`); // Verifica el objeto Date
    return date;
  };
  
  export const insertionSort = (data) => {
    const sortedArray = [];
    data.forEach(item => {
      const dateTime = createDateTime(item.fecha, item.hora);
      console.log(`Item: ${item.producto_nombre}, DateTime: ${dateTime}`); // Verifica el objeto Date
  
      // Insertar en el lugar correcto
      let j = sortedArray.length - 1;
      while (j >= 0 && createDateTime(sortedArray[j].fecha, sortedArray[j].hora) < dateTime) {
        j--;
      }
      sortedArray.splice(j + 1, 0, item);
    });
    return sortedArray;
  };
  
  export const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  export const formatTime = (time) => {
    return time.substring(0, 5); // Cortamos para obtener solo HH:mm
  };