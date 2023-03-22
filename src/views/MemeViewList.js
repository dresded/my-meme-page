import axios from 'axios';

  import memeDetail from '@/components/MemeDetail/MemeDetail.vue'
  import mainHeader from '@/components/MainHeader/MainHeader.vue'
  import basePagination from '@/components/BasePagination/BasePagination.vue'
  
  export default {
    components: {
      memeDetail,
      mainHeader,
      basePagination
    },
    data() {
      return {
        memes: [],
        currentPage: 1,
        perPage: 10,
        totalPages: 0,
        fullMemesList: [],
        fullMemesListSearch: [],
        textToSearch: '',
        page: 1,
        pages: 1
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
            this.fullMemesListSearch = response.data.data.memes;
            this.getMemeListToShow();
          })
          .catch(error => {
            console.log(error);
          });
      },
      searchMemeToShow(event) {
        this.textToSearch = event.target.value || ''
        this.page = 1
        if (this.textToSearch && this.textToSearch.trim().length > 0) {
            this.fullMemesListSearch = this.fullMemesList.filter(
                obj => this.transformText(obj.name).includes(this.transformText(this.textToSearch))
            );
        } else {
          this.fullMemesListSearch = this.fullMemesList
        }
        this.getMemeListToShow()
      },
      transformText(text) {
        return text.toUpperCase().replaceAll(' ', '')
      },
      clearText() {
        this.textToSearch = ''
        this.page = 1
        this.fullMemesListSearch = this.fullMemesList
        this.getMemeListToShow()
      },
      getMemeListToShow() {
        if (this.fullMemesListSearch && this.fullMemesListSearch.length === 0) {
          this.memes = []
          this.pages = 0
          return
        }
        const initialList = JSON.parse(JSON.stringify(this.fullMemesListSearch))
        const numberOfRecordsToDisplay = 6
        this.pages = Math.round(initialList.length / numberOfRecordsToDisplay) - 1
        const itemsToRemove = (this.page - 1) * numberOfRecordsToDisplay
        if (itemsToRemove > 0) {
          for (let itemRecord = 0; itemsToRemove > itemRecord; itemRecord++) {
            initialList.splice(0, 1 )
          }
        }
        
        const records = []
        for (let record = 0; (numberOfRecordsToDisplay > record) && (record < this.fullMemesListSearch.length) ; record++) {
          records.push(initialList[record])
        }
        this.memes = records
      },
      getApplicationsOnPagination (page) {
        this.page = page
        this.getMemeListToShow()
      }
    }
  }