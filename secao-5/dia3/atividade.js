// ATIVIDADE 1 - VALIDAÇÕES COM O SERVICE

const isValidLicensePlateFormat = (licensePlate) => {
  // esse regex permite os dois formatos de placa. 
  // O | representa uma alternativa, ou seja, o regex aceita o primeiro padrão  "LLLNNN" (^[A-Z]{3}[0-9]{3}[A-Z0-9]$) 
  // ou o segundo padrão "LLLNLNN" (^[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}$).
  const licensePlateRegex = /^[A-Z]{3}[0-9]{3}[A-Z0-9]$|^[A-Z]{3}[0-9]{1}[A-Z]{1}[0-9]{2}$/;

  return licensePlateRegex.test(licensePlate);
};

const isValidPlate = isValidLicensePlateFormat(licensePlate);
  if (!isValidPlate) return { status: 'INVALID_VALUES', data: { message: 'Invalid licensePlate' } };

//ATIVIDADE 2

const plateRegistered = async (licensePlate) => {
  const car = await carModel.findByLicensePlate(licensePlate);
  return car || false;
};

const possuiRegistro = await plateRegistered(licensePlate);
if (possuiRegistro) {
  return { status: 'CONFLICT', data: { message: 'Car already registered' } };
}


//ATIVIDADE 3

const isCarOlderThanTenYears = (year) => {
  const currentYear = new Date().getFullYear;
  const carYear = Number(year);
  return currentYear - carYear > 10;
};


if (isCarOlderThanTenYears(year)) {
  // eslint-disable-next-line max-len
  return { status: 'INVALID_VALUES', message: 'The year of the car cannot be more than 10 years old',
  };
}