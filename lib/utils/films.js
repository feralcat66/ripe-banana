const films = await Film.create({
    name: 'Shrek and the Buscemis',
    studio: {
        name: 'Cringy Films',
        address: [{
            city: 'New York',
            state: 'New York',
            country: 'USA'
          }]
    },
    released: 1996,
    cast: [{
        role: 'protagonist',
        actor: 
            'Shrek Buscemi'
 }]

})


