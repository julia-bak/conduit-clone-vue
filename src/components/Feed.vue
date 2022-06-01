<template>
  <div>
    <Loader v-if="isLoading" />

    <ErrorMessage v-if="error" />

    <div v-if="feed">
      <div
        class="article-preview"
        v-for="(article, index) in feed.articles"
        :key="index"
      >
        <div class="article-meta">
          <router-link 
            :to="{
              name: 'userProfile', 
              params: {slug: article.author.username}
            }"
          >
            <img :src="article.author.image">
          </router-link>

          <div class="info">
            <router-link
              class="author" 
              :to="{
                name: 'userProfile', 
                params: {slug: article.author.username}
              }"
          >
            {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <div class="pull-xs-right">
            <AddToFavorites
              :is-favorited="article.favorited"
              :article-slug="article.slug"
              :favorites-count="article.favoritesCount"
            />
          </div>
        </div>
        <router-link :to="{name: 'article', params: {slug: article.slug}}" class="preview-link">
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more...</span>
          <TagList :tags="article.tagList" />
        </router-link>
      </div>
      <Pagination 
        :total="feed.articlesCount" 
        :limit="limit"
        :current-page="currentPage"
        :url="baseUrl"

      />
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/feed'
import Pagination from '@/components/Pagination'
import {limit} from '@/helpers/vars'
import {stringify, parseUrl} from 'query-string'
import Loader from '@/components/Loader'
import ErrorMessage from '@/components/ErrorMessage'
import TagList from '@/components/TagList'
import AddToFavorites from '@/components/AddToFavorites'

export default {
  name: 'AppFeed',
  data() {
    return {
      limit,
    }
  },
  components: {
    Pagination,
    Loader,
    ErrorMessage,
    TagList,
    AddToFavorites
  },
  props: {
    apiUrl: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.feed.isLoading,
      feed: state => state.feed.data,
      error: state => state.feed.error
    }),
    currentPage() {
      return Number(this.$route.query.page || '1')
    },
    baseUrl() {
      return this.$route.path
    },
    offset(){
      return this.currentPage * limit - limit
    }
  },
  watch: {
    currentPage(){
      this.fetchFeed()
    },
    apiUrl() {
      this.fetchFeed()
    }
  },
  methods: {
    fetchFeed(){
      const parsedUrl = parseUrl(this.apiUrl)
      const stringifiedParams = stringify({
        limit,
        offset: this.offset,
        ...parsedUrl.query
      })
      const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
      this.$store.dispatch(actionTypes.getFeed, {apiUrl: apiUrlWithParams})
    }
  },
  mounted() {
    this.fetchFeed()
  }
}
</script>