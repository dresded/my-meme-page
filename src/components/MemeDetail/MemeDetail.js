import withoutResults from '../WithoutResults/WithoutResults.vue'

export default {
    props: {
        memeList: {
          type: Array,
          required: true
        }
    },
    components: {
      withoutResults
    }
}