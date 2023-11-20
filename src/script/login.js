var log_inInput, emailInput, passwordInput, loginInput, emailInput, passInput, local;

function register() {

	log_inInput = document.getElementById('sign-up__login').value;
	passwordInput = document.getElementById('sign-up__password').value;

	if (log_inInput == "") {

		console.error("Логин не введен.");
		document.getElementById('error__succeed').innerHTML = `В поле логина ничего нет, заполните его!`;

	} else {

		if (passwordInput == "") {

			console.error("Пароль не введен.");
			document.getElementById('error__succeed').innerHTML = `В поле пароля ничего нет, заполните его!`;

		} else {

			localStorage.setItem('login', log_inInput);
			localStorage.setItem('pass', passwordInput);
			typeof(local)

			document.getElementById('sign__succeed').innerHTML = `Вы успешно зарегистрировались под именем ${log_inInput}!`;
			setTimeout(register_succeed, 1000);
		}

	}

}

function login() {

	loginInput = document.getElementById('sign-in__login').value;
	passInput = document.getElementById('sign-in__password').value;

	if (loginInput == "") {

		console.error("Логин не введен.");
		document.getElementById('error__succeed').innerHTML = `В поле логина ничего нет, заполните его!`;

	} else {

		if (passInput == "") {

			console.error("Пароль не введен.");
			document.getElementById('error__succeed').innerHTML = `В поле пароля ничего нет, заполните его!`;

		} else if (passInput !== localStorage.getItem('pass') || loginInput !== localStorage.getItem('login')) {
			console.error("Логин или пароль неверны.");

			document.getElementById("error__succeed").innerHTML = `Логин или пароль неверны`;
		} else if (passInput == localStorage.getItem('pass')) {

			document.getElementById("sign__succeed").innerHTML = `${loginInput} вы успешно вошли!`;
			setTimeout(login_succeed, 1000);
		}

	}

	// if (loginInput == "") {

	// 	console.error("Логин не введен.");
	// 	document.getElementById('error__succeed').innerHTML = `В поле логина ничего нет, заполните его!`;

	// 	if (passInput == "") {

	// 		console.error("Пароль не введен.");
	// 		document.getElementById('error__succeed').innerHTML = `В поле пароля ничего нет, заполните его!`;

	// 	}
		
	// } else if (loginInput == localStorage.getItem('login')) {

	// 	console.log('Пользователь с таким именем найден в хранилище...');

	// 	if (passInput == "") {

	// 		console.error("Логин не введен.");
	// 		document.getElementById('error__succeed').innerHTML = `В поле пароля ничего нет, заполните его!`;

	// 	} else if (passInput == localStorage.getItem('pass')) {

	// 		document.getElementById("login__succeed").innerHTML = `${loginInput} вы успешно вошли!`;
	// 		setTimeout(login_succeed, 1000);

	// 	}
		
	// }

}

function register_succeed() {

	succeeed = console.log(`Вы успешно вошли, под именем ${log_inInput}!`);
	

}

function login_succeed() {

	succeeed = console.log(`Вы успешно вошли, под именем ${loginInput}!`);

}