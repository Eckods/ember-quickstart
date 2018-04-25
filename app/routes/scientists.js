import Route from '@ember/routing/route';

export default Route.extend({
  // Return whatever data you wish to make available to the template
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  }
});
