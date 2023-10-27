<template>
  <section class="w-2/5 bg-green-500 absolute left-0 top-0 h-full p-20">
    <h2 class="text-white text-4xl font-bold mt-20">
      Entre agora para começar a curtir as suas músicas preferidas
    </h2>
  </section>

  <section id="login" class="w-3/5 absolute right-0 top-0 h-full">
    <div class="p-20">
      <img class="m-auto w-50" src="./assets/logo.png" />
    </div>
    <div class="text-center w-full absolute bottom-10">
      <button
        class="bg-green-500 text-white px-10 py-5 text-xl block m-auto rounded-full"
      >
        Entrar com Spotfy
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      clientID: "2092b9ea3bbb4a07bd382a633eb8ce14",
      scopes: "user-read-private user-read-email",
      redirectURI: "http://localhost:5173/playlists",
    }
  },
  methods: {
    login() {
      location.href= `https://accounts.spotify.com/authorize?response_type=code&client_id=${this.clientID}&scope=${this.scopes}&redirect_uri${redirectURI}`
    }
  },
};
</script>
