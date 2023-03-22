import range from 'lodash/range'

export default {
  name: 'BasePagination',
  props: {
    page: {
      type: Number,
      required: true,
      default: 1
    },
    pages: {
      type: Number,
      required: true,
      default: 0
    },
    action: {
      type: Function,
      required: true
    },
    displayPages: {
      type: Number,
      default: 5
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      emptyArray: 0,
      startPage: 1,
      secondPage: 2
    }
  },
  computed: {
    endPage () { return this.pages },
    secondLastPage () { return this.pages - 1 },
    normalizePagesForArray () { return this.pages + 1 },
    normalizeDisplayPages () { return this.displayPages + 1 },
    hiddenGoToFirst () { return this.page >= 5 },
    hiddenToLastPage () { return this.page <= (this.endPage - 5) },
    pagesArray () {
      const {
        page,
        pages,
        displayPages,
        normalizeDisplayPages,
        startPage,
        normalizePagesForArray
      } = this

      let startRange = this.startPage
      let endRange = this.normalizePagesForArray

      if (pages === startPage) return [1]
      if (pages === startRange) return [startRange]
      if (pages <= displayPages) return range(startRange, endRange)

      if (page >= (normalizePagesForArray - this.displayPages)) {
        startRange = normalizePagesForArray - this.displayPages
        endRange = this.normalizePagesForArray
      } else if (page >= displayPages) {
        startRange = this.isOdd(displayPages) ? (page + 1) - (normalizeDisplayPages / 2) : page - (displayPages / 2)
        endRange = this.isOdd(displayPages) ? page + (normalizeDisplayPages / 2) : page + (displayPages / 2)
      } else {
        endRange = normalizeDisplayPages
      }

      return range(startRange, endRange)
    }
  },
  methods: {
    isOdd (number) { return (number % 2) === 1 },
    toFirstPage () {
      if (this.page > this.secondPage) this.action(this.startPage)
    },
    toPreviousPage () {
      let previousPage = this.page - 1
      if (previousPage >= this.startPage) this.action(previousPage)
    },
    toNextPage () {
      let nextPage = this.page + 1
      if (nextPage <= this.endPage) this.action(nextPage)
    },
    toLastPage () {
      if (this.page < this.secondLastPage) this.action(this.endPage)
    },
    goToPage (page) {
      if (page !== this.page && !this.loading) this.action(page)
    },
    pageToIndexArrayValue: (value) => value - 1
  }
}