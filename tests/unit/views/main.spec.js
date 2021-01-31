import { shallowMount, createLocalVue } from '@vue/test-utils';
import Main from '@/views/Main';
import Vuetify from 'vuetify';

const localVue = createLocalVue();

describe('Main.vue page', () => {
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

  it('Show child components', () => {
    const wrapper = shallowMountFunction();

    expect(wrapper.findComponent({ name: 'filters' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'table' }).exists()).toBe(true);
  });
});
