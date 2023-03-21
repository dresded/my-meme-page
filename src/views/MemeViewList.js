import axios from 'axios';

  import memeDetail from '../components/MemeDetail/MemeDetail.vue'
  import mainHeader from '../components/MainHeader/MainHeader.vue'
  
  export default {
    components: {
      memeDetail,
      mainHeader
    },
    data() {
      return {
        memes: [],
        currentPage: 1,
        perPage: 10,
        totalPages: 0,
        fullMemesList: [],
        textToSearch: ''
      }
    },
    mounted() {
      this.fetchMemes();
    },
    methods: {
      fetchMemes() {
        axios.get(`https://api.imgflip.com/get_memes`)
          .then(response => {
            this.fullMemesList = response.data.data.memes;
            this.memes = response.data.data.memes;
            // this.getMemeListToShow();
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
      },
      serachMemeToShow(event) {
        this.textToSearch = event.target.value || ''
        if (this.textToSearch && this.textToSearch.trim().length > 0) {
            this.memes = this.fullMemesList.filter(
                obj => this.transformText(obj.name).includes(this.transformText(this.textToSearch))
            );
        }
      },
      transformText(text) {
        return text.toUpperCase().replaceAll(' ', '')
      },
      clearText() {
        this.textToSearch = ''
        this.memes = this.fullMemesList;
      }

    }
  }