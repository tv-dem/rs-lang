class API{
    //textbook words
    getWordsByGroupPage(group:number, page:number){
        return fetch(`https://api-rs-lang.herokuapp.com/words?group=${group}&page=${page}`)
            .then(res => res.json())
    }
    getWordByID(id:number){
        return fetch(`https://api-rs-lang.herokuapp.com/words/${id}`)
            .then(res => res.json())
    }

    //auth
    createUser(name:string, password: string, email:string){
        const user={
            name,
            password,
            email,
        }
        return fetch('https://api-rs-lang.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(date => date.json());
    }
    signInUser(email:string, password:string){
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
            .then(res => res.json());
    }

    //userWords
    getUserWords(wordId:string){
        return fetch(`https://api-rs-lang.herokuapp.com/users/${wordId}/words`)
            .then(res => res.json());
    }
    createUserWord(wordId:string, userId: string, difficulty: string, optional: Object){
        return fetch(`https://api-rs-lang.herokuapp.com/users/${userId}/words/${wordId}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                difficulty,
                optional
            })
        })
    }
    getUserWordById(wordId:string, userId: string){
        return fetch(`https://api-rs-lang.herokuapp.com/users/${userId}/words/${wordId}`)
            .then(res => res.json());
    }
    updateUserWord(wordId:string, userId: string, difficulty: string, optional: Object){
        return fetch(`https://api-rs-lang.herokuapp.com/users/${userId}/words/${wordId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                difficulty,
                optional
            })
        })
    }

    //userSettings
    getUserSettings(userId:string){
        return fetch(`https://api-rs-lang.herokuapp.com/users/${userId}/settings`)
            .then(res => res.json());
    }
    updateUserSettings(userId: string, optional: Object){
        return fetch(`https://api-rs-lang.herokuapp.com/users/${userId}/settings`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                wordsPerDay: 0,
                optional
            })
        })
    }
}

export default new API();
