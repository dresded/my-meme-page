<template>
    <!-- <div>
      <div v-for="image in memes" :key="image">
        <img :src="image" alt="Meme de la galería">
      </div>
    </div> -->
  <div>
    <div v-for="meme in memeList" :key="meme.id">
      <img :src="meme.url" alt="meme" />
      <label>{{ meme.name }}</label>
      <label>{{ meme.width }}</label>
      <label>{{ meme.height }}</label>
    </div>
  </div>
</template>

<script src="./MemeDetail.js" />
