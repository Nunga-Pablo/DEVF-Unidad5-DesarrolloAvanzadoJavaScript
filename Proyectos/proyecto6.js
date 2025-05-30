// Importamos Zod
const { z } = window.Zod;

// Esquema para validar los datos del formulario
const registerSchema = z.object
({
// PISTA: Define que el nombre debe ser una cadena no vacía.

name: z.string().min(3, "El nombre es obligatorio y debe tener al menos 3 caracteres"),

// PISTA: Valida que el correo tenga el formato correcto.

email: z.string().email("Correo electrónico inválido"),

// PISTA: La contraseña debe tener al menos 6 caracteres.

password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .refine((val) => /[A-Z]/.test(val), {
        message: "La contraseña debe tener al menos una letra mayúscula",
    })
    .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
        message: "La contraseña debe incluir al menos un carácter especial",
    }),

});

document.getElementById("registerForm").addEventListener("submit", (event) => 
{
    event.preventDefault();

    // Capturamos los valores ingresados
    const formData = 
    {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    try 
    {
        // PISTA: Usa el método correcto de Zod para validar el esquema.
        //registerSchema.___?___(formData);
        registerSchema.parse(formData);
        alert("¡Registro exitoso!");
        document.getElementById("errors").textContent = '';
    } 
    catch (error) 
    {
        // PISTA: Muestra los mensajes de error en la página.
        document.getElementById("errors").textContent = error.errors.map(e => e.message).join(", ");
    }
});