import articleApi from '@/api/article'

const state = {
  isSubmitting: false,
  validationErrors: null,
  isLoading: false,
  article: null
}

export const mutationTypes = {
  editArticleStart: '[editArticle] Edit article start',
  editArticleSuccess: '[editArticle] Edit article success',
  editArticleFailure: '[editArticle] Edit article failure',

  getArticleStart: '[getArticle] Get article start',
  getArticleSuccess: '[getArticle] Get article success',
  getArticleFailure: '[getArticle] Get article failure',
}

export const actionTypes = {
  editArticle: '[editArticle] Edit article',
  getArticle: '[getArticle] Get article'
}

const mutations = {
  [mutationTypes.editArticleStart](state) {
    state.isSubmitting = true
  },
  [mutationTypes.editArticleSuccess](state) {
    state.isSubmitting = false
  },
  [mutationTypes.editArticleFailure](state, payload) {
    state.isSubmitting = false
    state.validationErrors = payload
  },
  [mutationTypes.getArticleStart](state) {
    state.isLoading = true
  },
  [mutationTypes.getArticleSuccess](state, payload) {
    state.isLoading = false
    state.article = payload
  },
  [mutationTypes.getArticleFailure](state) {
    state.isSubmitting = false
  },
}

const actions = {
  [actionTypes.editArticle](context, {slug, articleInput}){
    return new Promise(resolve => {
      context.commit(mutationTypes.editArticleStart)
      articleApi.editArticle(slug, articleInput)
        .then(article => {
          context.commit(mutationTypes.editArticleSuccess, article)
          resolve(article)
        }).catch(result => {
          context.commit(mutationTypes.editArticleFailure, result.response.data.errors)
      })
    })
  },
  [actionTypes.getArticle](context, {slug}){
    return new Promise(resolve => {
      context.commit(mutationTypes.getArticleStart)
      articleApi.getArticle(slug)
        .then(article => {
          context.commit(mutationTypes.getArticleSuccess, article)
          resolve(article)
        }).catch(() => {
          context.commit(mutationTypes.getArticleFailure)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}