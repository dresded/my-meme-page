<template>
    <div>
      <main-header/>
      <div class="field is-grouped">
        <p class="control is-expanded">
          <input class="input" type="text" placeholder="Ingrese texto" v-model="textToSearch" @input="serachMemeToShow">
        </p>
        <p class="control" @click="clearText">
          <a class="button is-info">
            Borrar
          </a>
        </p>
      </div>
      <meme-detail
        :memeList="memes"
      />
    </div>
  </template>
  
  <script src="./MemeViewList.js" />