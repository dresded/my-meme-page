<template>
  <div>
    <div class="columns is-multiline" v-if="memeList && memeList.length > 0">
      <div class="column is-one-third"  v-for="meme in memeList" :key="meme.id">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="meme.url" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">{{ meme.name }}</p>
                </div>
              </div>
              <div class="content">
                <ul>
                  <li>Ancho: {{ meme.width }} px</li>
                  <li>Altura: {{ meme.height }} px</li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
    <without-results v-else/>
  </div>
</template>
<script src="./MemeDetail.js" />
