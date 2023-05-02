const { createApp } = Vue;


createApp({

  data() {

    return {
      mails: [],
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
    }

  },

  methods: {
    getApi() {

      axios.get(this.apiUrl)
        .then((result) => {
          // il corpo della risposta che a noi interessa è nella proprietà data 
          console.log(result.data);
          // in questa API mi serve la proprità response
          // e la savo in un mio data
          this.mails = result.data.response

        })
        .catch(errore => {
          console.log(errore);
          this.error = true
          this.errore = errore
        })
    }
  },

  mounted() {
    this.getApi('sentence ');

  }

}).mount('#app')
