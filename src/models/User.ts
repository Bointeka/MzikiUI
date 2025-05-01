class user {
  constructor(email: String, password: String, username: String, dateOfBirth: Date) {
    this.email = email
    this.password = password
    this.username = username
    this.dateOfBirth = dateOfBirth
  }

  get _email() {
    return this.email
  }
  get _password() {
    return this.password
  }
  get _username() {
    return this.username
  }
  get _dateOfBirth() {
    return this.dateOfBirth
  }

  set _email(email: String) {
    this.email = email
  }
  set _password(password: String) {
    this.password = password
  }
  set _username(username: String) {
    this.username = username
  }
  set _dateOfBirth(dateOfBirth: Date) {
    this.dateOfBirth = dateOfBirth
  }
}

export default user
