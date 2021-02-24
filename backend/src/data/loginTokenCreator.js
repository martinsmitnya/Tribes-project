


export const loginTokenCreator = {
  async tokenCreator(requestBody) {
    return await 'Username: ' + requestBody.username  + ' password: ' + requestBody.password;
  }
}