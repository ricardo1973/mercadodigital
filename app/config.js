/*=============================================
Exportamos la ruta para tomar imágenes
=============================================*/
export let Path = {

	url: 'http://localhost:4200/assets/'

}

/*=============================================
Exportamos el endPoint de la APIREST de Firebase
=============================================*/
export let Api = {

	url: 'https://marketplace-f5059-default-rtdb.firebaseio.com/' //YOUR FIREBASE ENDPOINT

}


/*=============================================
Exportamos el endPoint para el registro de usuarios en Firebase Authentication
=============================================*/

export let Register = {

	url: 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9beOGme7wJHZYLYoUG0RDBKyo9Zla4G0'
	
}

/*=============================================
Exportamos el endPoint para el ingreso de usuarios en Firebase Authentication
=============================================*/

export let Login = {

	url: 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9beOGme7wJHZYLYoUG0RDBKyo9Zla4G0'
}

/*=============================================
Exportamos el endPoint para enviar verificación de correo electrónico
=============================================*/

export let SendEmailVerification = {

	url: 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA9beOGme7wJHZYLYoUG0RDBKyo9Zla4G0'

}

/*=============================================
Exportamos el endPoint para confirmar email de verificación
=============================================*/

export let ConfirmEmailVerification = {

	url: 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA9beOGme7wJHZYLYoUG0RDBKyo9Zla4G0'

}


/*=============================================
Exportamos el endPoint para tomar la data del usuario en Firebase auth
=============================================*/

export let GetUserData = {

	url: 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyA9beOGme7wJHZYLYoUG0RDBKyo9Zla4G0'

}

/*=============================================
Exportamos el endPoint para Resetear la contraseña
=============================================*/

export let SendPasswordResetEmail = {

 url: 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA9beOGme7wJHZYLYoUG0RDBKyo9Zla4G0'

}

/*=============================================
Exportamos el endPoint para confirmar el cambio de la contraseña
=============================================*/

export let VerifyPasswordResetCode = {

	url: 'https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=AIzaSyA9beOGme7wJHZYLYoUG0RDBKyo9Zla4G0'

}

/*=============================================
Exportamos el endPoint para enviar la contraseña
=============================================*/

export let ConfirmPasswordReset = {

	url:'https://identitytoolkit.googleapis.com/v1/accounts:resetPassword?key=AIzaSyA9beOGme7wJHZYLYoUG0RDBKyo9Zla4G0'

}

/*=============================================
Exportamos el endPoint para cambiar la contraseña
=============================================*/

export let ChangePassword = {

	url:'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyA9beOGme7wJHZYLYoUG0RDBKyo9Zla4G0'
}


/*=============================================
Exportamos el endPoint del servidor para administrar archivos
=============================================*/

export let Server = {

	url:'http://localhost/marketplace-account/src/assets/img/index.php?key=AIzaSyA9beOGme7wJHZYLYoUG0RDBKyo9Zla4G0'
}
