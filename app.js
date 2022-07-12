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
            // flagCode: 'GB',
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
            // console.log(results[0].nat);
            // console.log(countryFlagEmoji.get(results[0].nat));
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
            // this.flagCode = results[0].nat
            this.flag = flagEmoji.emoji

            // console.log(countryFlagEmoji.get("flagCode"));
        }
    }
})

app.mount('#app')