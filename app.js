const app = Vue.createApp({
    data() {
        return {
            firstName: 'Ozzy',
            lastName: 'Osbourne',
            email: 'ozzy@blacksabbath.com',
            username: 'princedarkness666',
            phone: '(0121) 469 0015',
            gender: 'male',
            city: 'Birmingham',
            country: 'United Kingdom',
            flag: '🇬🇧',
            picture: 'ozzy.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results}  = await res.json()

            let flagEmoji = countryFlagEmoji.get(results[0].nat);

            console.log(results);
            console.log(flagEmoji.emoji)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.phone = results[0].phone
            this.username = results[0].login.username
            this.gender = results[0].gender
            this.city = results[0].location.city
            this.country = results[0].location.country
            this.picture = results[0].picture.large
            this.flag = flagEmoji.emoji

        }
    }
})

app.mount('#app')