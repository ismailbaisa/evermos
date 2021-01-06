export default {
  nuxtServerInit(vuexContext, context) {
    return context.app.$axios
      .$get("cakes")
      .then(data => {
        vuexContext.commit("setCakes", data);
      })
      .catch(e => context.error(e));
  },
}