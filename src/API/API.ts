class API {
  //textbook words
  getWordsByGroupPage(group: number, page: number) {
    return fetch(`https://api-rs-lang.herokuapp.com/words?group=${group}&page=${page}`)
      .then(res => res.json())
  }

  getWordByID(id: number) {
    return fetch(`https://api-rs-lang.herokuapp.com/words/${id}`)
      .then(res => res.json())
  }

  //auth
  createUser(name: string, password: string, email: string, avatar: string) {
    const user = {
      name,
      password,
      email,
      avatar,
    }
    return fetch('https://api-rs-lang.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(data => {
        if (data.status !== 200) {
          throw new Error(`${data.status}`);
        }

        return data.json();
      });
  }

  signInUser(email: string, password: string) {
    const info = {
      email,
      password
    }
    return fetch('https://api-rs-lang.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(info)
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`${res.status}`);
        }

        return res.json();
      });
  }

  //userWords
  getUserWords(wordId: string, token: string) {
    return fetch(`https://api-rs-lang.herokuapp.com/users/${wordId}/words`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json());
  }

  createUserWord(wordId: string, userId: string, difficulty: string, optional: Object, token: string) {
    console.log(wordId, userId, difficulty, optional, token)
    return fetch(`https://api-rs-lang.herokuapp.com/users/${userId}/words/${wordId}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        difficulty,
        optional
      })
    })
  }

  getUserWordById(wordId: string, userId: string, token: string) {
    return fetch(`https://api-rs-lang.herokuapp.com/users/${userId}/words/${wordId}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json());
  }

  //userSettings
  getUserSettings(userId: string, token: string) {
    return fetch(`https://api-rs-lang.herokuapp.com/users/${userId}/settings`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json());
  }

  updateUserSettings(userId: string, optional: Object, token: string) {
    return fetch(`https://api-rs-lang.herokuapp.com/users/${userId}/settings`, {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        optional
      })
    })
  }
  updateUserWord(wordId: string, userId: string, difficulty: string, optional: Object, token: string) {
    return fetch(`https://api-rs-lang.herokuapp.com/users/${userId}/words/${wordId}`, {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        difficulty,
        optional
      })
    })
      .then(res => res.json())
  }

  getAggregatedWords(userId: string, group: number, page: number, token: string) {
    return fetch(`https://api-rs-lang.herokuapp.com/users/${userId}/aggregatedWords?group=${group}&page=${page}&wordsPerPage=20`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`${res.status}`)
        }
        return res.json();
      })
  }

  getAggregatedWordsByParams(userId: string, params: any, group: number, page: number, token: string) {
    const filter = JSON.stringify(params);
    return fetch(`https://api-rs-lang.herokuapp.com/users/${userId}/aggregatedWords?filter=${filter}&group=${group}&page=${page}&wordsPerPage=20`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`${res.status}`)
        }
        return res.json();
      })
  }

  getUserStatistics(userId: string, token: string) {
    return fetch(`https://api-rs-lang.herokuapp.com/users/${userId}/statistics`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`${res.status}`);
        }

        return res.json();
      });
  }

  setUserStatistics(userId: string, token: string, body: any) {
    debugger
    const mapBody = JSON.stringify({
      optional:
        Object.entries(body).reduce((acc:any, [key, value]) => {
          acc[key] = Array.isArray(value) ? JSON.stringify(value).replace(/"/g, '\"') : value;
          return acc
        }, {})
    })

    console.log(JSON.parse(
      mapBody
    ))
    return fetch(`https://api-rs-lang.herokuapp.com/users/${userId}/statistics`, {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: mapBody,
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`${res.status}`);
        }

        return res.json();
      });
  }
}

export default new API();
