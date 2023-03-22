<template>
  <nav
    class="pagination-content"
    role="navigation"
  >
    <a
      class="pagination-previous"
      :disabled="page <= startPage || loading"
      @click="toPreviousPage"
    >
      anterior
    </a>
    <ul class="pagination-list">
      <li v-show="hiddenGoToFirst">
        <a
          class="pagination-link"
          :disabled="page <= secondPage || loading"
          @click="toFirstPage"
        >
          {{ startPage }}
        </a>
      </li>
      <li v-show="hiddenGoToFirst">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <template v-for="(currentPage, index) in pagesArray">
        <li :key="index">
          <a
            @click="goToPage(currentPage)"
            :class="['pagination-link', { 'is-current': currentPage === page }]"
            :disabled="loading"
          >
           {{ currentPage }}
          </a>
        </li>
      </template>
      <li v-show="hiddenToLastPage">
        <span class="pagination-ellipsis">&hellip;</span>
      </li>
      <li
        v-show="hiddenToLastPage"
      >
        <a
          class="pagination-link"
          :disabled="page >= secondLastPage || loading"
          @click="toLastPage"
        >
          {{ endPage }}
        </a>
      </li>
    </ul>
    <a
      class="pagination-next"
      :disabled="page >= endPage || loading"
      @click="toNextPage"
    >
      siguiente
    </a>
  </nav>
</template>

<script src="./BasePagination.js" />

<style scoped>
  .pagination-content {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  .pagination-link.is-current {
    color: #e6e6e6;
    font-weight: bold;
    background: #3956bf;
    border-color: #3956bf;
  }

  .pagination-previous {
    order: inherit;
  }

  .pagination-list {
    flex-grow: inherit;
  }

  ul > li.active {
    color: #3956bf;
    font-weight: bold;
  }

  ul > li[disabled] {
    cursor: not-allowed;
    background-color: #e6e6e6;
  }

  @media screen and (max-width: 768px) {
    .pagination-content {
      flex-direction: column;
    }

    .is-medium {
      font-size: .75rem;
    }
  }
</style>
