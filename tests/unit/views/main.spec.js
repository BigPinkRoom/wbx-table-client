import { mount, createLocalVue } from '@vue/test-utils';
import Main from '@/views/Main';
import Vuetify from 'vuetify';

const localVue = createLocalVue();

describe('Main.vue page', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const mountFunction = (options) => {
    return mount(Main, {
      localVue,
      vuetify,
      stubs: {
        AppFilter: true,
        AppTable: true,
      },
      propsData: {
        ...options,
      },
    });
  };

  it('Show child components', () => {
    const wrapper = mountFunction();

    expect(wrapper.findComponent({ name: 'filters' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'table' }).exists()).toBe(true);
  });
});
