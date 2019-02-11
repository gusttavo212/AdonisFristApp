'use strict'

const User = use('App/Models/User')

class AuthController {
  async register({ request }) {
    //usando desestruturação para pegar cada dado
    const data = request.only(['email', 'password', 'username'])//Request manda isso

    const user = await User.create(data)

    return user
  }

  async authenticate({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)//Requisitar um toke JWT

    return token;
  }
}

module.exports = AuthController
