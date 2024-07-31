# Estructura Proyecto M3

## User Stories

### **Usuario invitado:** Como usuario quiero
- Ingresae al Home y resto de la app(excepto reservar turno)
- Poder registrarme y crear una cuenta

### **Usuario registrado:** Como usuario registrado quiero
- Hager login (email + contraseña)
- Recuperar contraseña
- Hacer logout
- Editar mis datos (añadir foto de perfil)
- Reservar turno (Elegir fecha y hora)
- Recibir confimación por mail
- Poder ver mis turnos
- Poder cancelar mis turnos

### **Admin:** Como admin quiero
- Administrar días y Horarios disponibles
- Administrar Usuarios
- Poder ver turnos reservados
- Adminstrar médicos y especialidades

## UX/UI
- Página de bienvenida _ infomacion de consultorio médico
- Formulario de registro de Usuario
- Navbar: intuitivo, siempre visible, con logo de la empresa e info del usuario activo
- Footer: con información de contacto
- Home: Turnos, Información pertinente
- Formulario de registro de turnos:
- - "Detalle del turno: días, horario: Autocompletado y Variables predefinidas"
- - "Validación en tiempo real, y deshabilitar boton hasta completar todo"

## Entidades

### **Turnos**

| ID | Fecha     | Hora  | Detalle                 |
|----|-----------|-------|-------------------------|
| key| date      | time  | string                  |
| 100| 02/03/24  | 18:30 | Turno asignado          |

### **Usuarios**

| ID | Nombre    | Apellido | Email                 | Imagen  | Telefono  |
|----|-----------|----------|-----------------------|---------|-----------|
| key| string    | string   | string                | img     | number    |
| aa | Franco    | Abrego   | francoabrego@mail.com | img.png | 737127838 |

### **Credenciales**

| ID  | UserId   | Pass  |
|-----|----------|-------|
| key | key      |string |
| 21a | aa       | 1234  |

### **Turnos Asignados**

| ID | UserId    | TurnoId |
|----|-----------|---------|
| key| key       | key     |
| 200| aa        | 100     |