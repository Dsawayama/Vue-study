Vue.mixin({
    data: function() {
        return {
            loggedInUser: null
        }
    },
    created: function() {
        var auth = this.$options.auth
        this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'))
        if (auth && !this.loggedInUser) {
            window.alert('このページはログインが必要になります')
        }
    }
})
var LoginRequiredPage = {
    auth: true,
    template: `
        <div>
            <p v-if="!loggedInUser">
                このページはログインが必要になります
            </p>
            <p v-else>
                {{ loggedInUser.name }}さんでログインしております
            </p>
        </div>
    `
}
new Vue({
    el: '#app',
    components: {
        LoginRequiredPage
    }
})