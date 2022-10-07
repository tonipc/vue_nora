/**
 * <display-loading></display-loading>
 */

parasails.registerComponent("displayLoading", {
  props: [],
  data() {
    return {};
  },
  template: `
  <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
  `,
});
