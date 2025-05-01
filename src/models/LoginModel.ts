class loginModel {
  constructor(email: String, password: String) {
    this.email = email
    this.password = password
  }
  get _email() {
    return this.email
  }
  get _password() {
    return this.password
  }

  set _email(email: String) {
    this.email = email
  }

  set _password(password: String) {
    this.password = password
  }
}

export default loginModel
