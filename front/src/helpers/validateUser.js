export default function validateUser(input){
    
        const startDate = new Date('1900-01-01');
        const endDate = new Date();
        const errors = {};
  
        if (input.username.trim() === '') {
            errors.username = 'El nombre de usuario es requerido';
        } else if (input.username.length < 4) {
            errors.username = 'El nombre de usuario debe tener al menos 3 caracteres';
        }
  
        if (input.password.trim() === '') {
            errors.password = 'La contraseña es requerida';
        } else if (input.password.length < 6) {
            errors.password = 'La contraseña debe tener al menos 6 caracteres';
        }
  
        if (input.name.trim() === '') {
            errors.name = 'El nombre es requerido';
        } else if (!/^[a-zA-ZñÑ\s]*$/.test(input.name)) {
            errors.name = 'El nombre solo debe contener letras y espacios';
        }
  
        if (input.email.trim() === '') {
            errors.email = 'El correo es requerido';
        } else if (!isValidEmail(input.email)) {
            errors.email = 'Ingrese un correo electrónico válido';
        }
  
        if (!input.birthdate) {
            errors.birthdate = 'La fecha de nacimiento es requerida';
        } else if (!isValidDateInRange(input.birthdate, startDate, endDate)) {
            errors.birthdate = 'Ingrese una fecha de nacimiento válida (formato DD-MM-AAAA) dentro del rango especificado';
        }
  
        if (input.nDni <= 0 ) {
            errors.nDni = 'Ingrese un número de DNI válido';
        }
  
        
        return errors;
      };
      
      const isValidDateInRange = (dateString, startDate, endDate) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(dateString)) return false; 
        const inputDate = new Date(dateString);
        return inputDate >= startDate && inputDate <= endDate;
      };
  
      const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }