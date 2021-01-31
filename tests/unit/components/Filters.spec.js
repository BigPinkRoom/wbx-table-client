import { shallowMount, createLocalVue } from '@vue/test-utils';
import Main from '@/views/Main';
import Vuetify from 'vuetify';

const localVue = createLocalVue();

describe('Filters.vue component', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const shallowMountFunction = (options) => {
    return shallowMount(Main, {
      localVue,
      vuetify,
      propsData: {
        ...options,
      },
    });
  };
});
