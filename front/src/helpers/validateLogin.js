export default function validateLogin(input){
    
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

    return errors;
  };