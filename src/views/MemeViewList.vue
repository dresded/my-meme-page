<template>
    <div>
      <p class="text-h6">
        Memes
      </p>
      <!-- <div v-for="meme in memes" :key="meme.id">
        <img :src="meme.url" alt="meme" />
        <label>{{ meme.name }}</label>
        <label>{{ meme.width }}</label>
        <label>{{ meme.height }}</label>
      </div> -->
      <meme-detail
        :memeList="memes"
      />
      <!-- <div>
        <button v-if="currentPage > 1" @click="prevPage">Previous</button>
        <button v-if="currentPage < totalPages" @click="nextPage">Next</button>
      </div> -->
    </div>
  </template>
  
  <script>
  import axios from 'axios';

  import memeDetail from '../components/MemeDetail/MemeDetail.vue'
  
  export default {
    components: {
      memeDetail
    },
    data() {
      return {
        memes: [],
        currentPage: 1,
        perPage: 10,
        totalPages: 0
      }
    },
    mounted() {
      this.fetchMemes();
    },
    methods: {
      fetchMemes() {
        axios.get(`https://api.imgflip.com/get_memes`)
          .then(response => {
            console.log('🟡', response.data.data.memes)
            this.memes = response.data.data.memes;
            // this.totalPages = response.data.total_pages;
          })
          .catch(error => {
            console.log(error);
          });
      },
      prevPage() {
        this.currentPage--;
        this.fetchMemes();
      },
      nextPage() {
        this.currentPage++;
        this.fetchMemes();
      }
    }
  }
  </script>
  
  <style>
  .meme-detail {
    display: flex;
    flex-wrap: wrap;
  }
  .meme-detail img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin: 10px;
  }
</style>