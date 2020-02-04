<template>
  <div class="recent-post melody-content">
    <transition-group name="fade">
      <template v-if="!loading">
        <div
          v-for="(article, idx) in $pagination.pages"
          :key="article.key"
          class="recent-post-item article-container"
        >
          <router-link
            :to="article.path"
            class="article-title"
          >
            {{ article.title || 'No title' }}
          </router-link>
          <time class="post_meta__date">
            <i
              class="fa fa-calendar"
              aria-hidden="true"
            />
            {{ formatDate(article.frontmatter.date) }}
          </time>
          <span class="article-meta__separator">|</span>
          <template v-if="hasCategoryList(article.frontmatter)">
            <span
              v-for="category in categoryList[idx]"
              :key="`category-${category.text}`"
              class="article-meta"
            >
              <i class="fa fa-inbox article-meta__icon" />
              <router-link
                :to="category.link"
                class="article-meta__categories"
              >
                {{ category.text }}
              </router-link>
              <span class="article-meta__separator">|</span>
            </span>
          </template>
          <template v-if="hasTagList(article.frontmatter)">
            <span
              v-for="(tag, index) in tagList[idx]"
              :key="`tag-${tag.text}`"
              class="article-meta"
            >
              <i class="fa fa-tag article-meta__icon" />
              <router-link
                :to="tag.link"
                class="article-meta__categories"
              >
                {{ tag.text }}
              </router-link>
              <span
                v-if="index !== tagList[idx].length - 1"
                class="article-meta__separator"
              >-</span>
            </span>
          </template>
          <template v-if="article.excerpt">
            <div
              class="content"
              v-html="article.excerpt"
            />
          </template>
          <div class="content" />
          <router-link
            :to="article.path"
            class="more"
            style="margin-top: 14px"
          >
            {{ $t('read_more') }}
          </router-link>
          <div class="melody-hr">
            <hr>
          </div>
        </div>
      </template>
    </transition-group>
    <template v-if="loading">
      <!-- TODO: LOADING -->
      loading....
    </template>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  name: 'RecentPost',
  data () {
    return {
      loading: true
    }
  },
  computed: {
    tagList () {
      const pages = this.$pagination.pages
      const result = []
      pages.forEach(pageData => {
        const data = pageData.frontmatter
        if (data.tag || data.tags) {
          let tags = data.tag || data.tags
          if (!Array.isArray(tags)) {
            tags = [tags]
          }
          if (data.tag) {
            result.push(tags.map(item => ({
              text: item,
              link: this.$withBase(`/tag/${item}`)
            })))
          } else {
            result.push(tags.map(item => ({
              text: item,
              link: this.$withBase(`/tags/${item}`)
            })))
          }
        } else {
          return []
        }
      })
      return result
    },
    categoryList () {
      const pages = this.$pagination.pages
      const result = []
      pages.forEach(pageData => {
        const data = pageData.frontmatter
        if (data.category || data.categories) {
          let categories = data.category || data.categories
          if (!Array.isArray(categories)) {
            categories = [categories]
          }
          if (data.category) {
            result.push(categories.map(item => ({
              text: item,
              link: this.$withBase(`/category/${item}`)
            })))
          } else {
            result.push(categories.map(item => ({
              text: item,
              link: this.$withBase(`/categories/${item}`)
            })))
          }
        } else {
          return []
        }
      })
      return result
    }
  },
  created () {
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 500)
  },
  methods: {
    formatDate (date) {
      return dayjs(date).format('YYYY-MM-DD')
    },
    hasTagList (data) {
      if (data.tag || data.tags) {
        return true
      } else {
        return false
      }
    },
    hasCategoryList (data) {
      if (data.category || data.categories) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style lang='stylus'>
</style>
