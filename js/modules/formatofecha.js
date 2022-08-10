export const formatearFecha = (dia,mes,anio) => {
    const meses = [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ];
    for (let i = 1; i <= meses.length; i++) {
        if(i == mes){
            return `${dia} de ${meses[i]} ${anio}`;
        }
    }
  };