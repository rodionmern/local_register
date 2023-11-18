var log_inInput, emailInput, passwordInput, loginInput, emailInput, passInput, local;

function register() {

	log_inInput = document.getElementById('loginn').value;
	passwordInput = document.getElementById('password').value;

	if (loginInput == "") {

		console.error("Логин не введен.");
		document.getElementById('reg__succeed').innerHTML = `В поле логина ничего нет, заполните его!`;

	} else {

		localStorage.setItem('login', log_inInput);
		localStorage.setItem('pass', passwordInput);
		typeof(local)

		document.getElementById('reg__succeed').innerHTML = `Вы успешно зарегистрировались под именем ${log_inInput}!`;
		setTimeout(register_succeed, 1000);

	}

}

function login() {

	loginInput = document.getElementById('login').value;
	passInput = document.getElementById('pass').value;

	if (loginInput == localStorage.getItem('login')) {

		console.log('Пользователь с таким именем найден в хранилище...');

		if (passInput == "") {

			console.error("Логин не введен.");
			document.getElementById('login__succeed').innerHTML = `В поле пароля ничего нет, заполните его!`;

		} else if (passInput == localStorage.getItem('pass')) {

			document.getElementById("login__succeed").innerHTML = `${loginInput} вы успешно вошли!`;
			setTimeout(login_succeed, 1000);

		}
		
	}

}

function register_succeed() {

	succeeed = console.log(`Вы успешно вошли, под именем ${log_inInput}!`);

}

function login_succeed() {

	succeeed = console.log(`Вы успешно вошли, под именем ${loginInput}!`);

}