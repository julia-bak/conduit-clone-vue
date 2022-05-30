<template>
  <div class="home-page">
    <Banner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <FeedToggler />
          <Feed :api-url="apiUrl" />
        </div>
        <div class="col-md-3">
          <PopularTags />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Feed from '@/components/Feed'
import PopularTags from '@/components/PopularTags'
import Banner from '@/components/Banner'
import FeedToggler from '@/components/FeedToggler'

export default {
  name: 'AppYourFeed',
  components: {
    Feed,
    PopularTags,
    Banner,
    FeedToggler
  },
  data() {
    return {
      apiUrl: '/articles/feed'
    }
  }
}
</script>