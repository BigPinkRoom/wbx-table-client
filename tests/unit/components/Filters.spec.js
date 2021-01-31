import { mount, createLocalVue } from '@vue/test-utils';
import Filters from '@/components/filters';
import Vuetify from 'vuetify';

const localVue = createLocalVue();

jest.mock('@/js/helpers/filter', () => {
  return {
    filter(value) {
      return value;
    },
  };
});

describe('Filters.vue component', () => {
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  const defaultStub = {
    AppDropDownList: true,
    AppInput: true,
  };

  const mountFunction = (options, stubs = defaultStub, mocks) => {
    return mount(Filters, {
      localVue,
      vuetify,
      stubs: stubs,
      propsData: {
        ...options,
      },
      mocks: {
        ...mocks,
      },
    });
  };

  it('Show correct title', () => {
    const wrapper = mountFunction();

    expect(wrapper.find({ ref: 'filters-title' }).text()).toBe('Filter:');
  });

  describe('Child components', () => {
    it('Show child components', () => {
      const wrapper = mountFunction();

      expect(wrapper.findComponent({ name: 'Input' }).exists()).toBe(true);
      expect(wrapper.findAllComponents({ name: 'DropDownList' })).toHaveLength(
        2
      );
    });

    describe('DropDownList(columns)', () => {
      let textPlaceholder;
      let values;

      const stub = {
        AppDropDownList: {
          template: '<div></div>',
          props: {
            textPlaceholder,
            values,
          },
        },
        AppInput: true,
      };

      it('Correct payload', () => {
        const wrapper = mountFunction(null, stub);

        values = wrapper.vm.$data.columnsData.values;
        textPlaceholder = wrapper.vm.$data.columnsData.textPlaceholder;

        const component = wrapper
          .findAllComponents({ name: 'DropDownList' })
          .at(0);

        expect(component.props('values')).toEqual([
          'Title',
          'Quantity',
          'Distance',
        ]);

        expect(component.props('textPlaceholder')).toEqual('Column');
      });

      it('Correct result of event handler', () => {
        const wrapper = mountFunction();

        wrapper
          .findAllComponents({ name: 'DropDownList' })
          .at(0)
          .vm.$emit('changeSelect', 'TestValue');

        expect(wrapper.vm.$data.selectColumn).toEqual('TestValue');
      });
    });

    describe('DropDownList(conditions)', () => {
      let textPlaceholder;
      let values;

      const stub = {
        AppDropDownList: {
          template: '<div></div>',
          props: {
            textPlaceholder,
            values,
          },
        },
        AppInput: true,
      };

      it('Correct payload', () => {
        const wrapper = mountFunction(null, stub);

        values = wrapper.vm.$data.conditionsData.values;
        textPlaceholder = wrapper.vm.$data.conditionsData.textPlaceholder;

        const component = wrapper
          .findAllComponents({ name: 'DropDownList' })
          .at(1);

        expect(component.props('values')).toEqual([
          'Equal',
          'Contain',
          'More',
          'Less',
        ]);

        expect(component.props('textPlaceholder')).toEqual('Conditions');
      });

      it('Correct result of event handler', () => {
        const wrapper = mountFunction();

        wrapper
          .findAllComponents({ name: 'DropDownList' })
          .at(1)
          .vm.$emit('changeSelect', 'TestValue');

        expect(wrapper.vm.$data.selectCondition).toEqual('TestValue');
      });
    });
    describe('Input', () => {
      let textPlaceholder;

      const stub = {
        AppDropDownList: {
          template: '<div></div>',
          props: {
            textPlaceholder,
          },
        },
        AppInput: true,
      };

      it('Correct payload', () => {
        const wrapper = mountFunction(null, stub);

        textPlaceholder = wrapper.vm.$data.conditionsData.textPlaceholder;

        expect(
          wrapper.findComponent({ name: 'Input' }).props('textPlaceholder')
        ).toEqual('Search...');
      });

      describe('Correct result of event handler', () => {
        jest.useFakeTimers();

        const mockTableData = [
          {
            date: '01.01.2000',
            title: 'Test title',
            quantity: 'Test quantity',
            distance: 'Test distance',
          },
        ];

        const wrapper = mountFunction(null, stub, {
          $store: {
            getters: {
              tableDataFilteredPaginated: [{}, {}, {}],
              tableData: mockTableData,
              paginationCurrentPage: 1,
            },
            commit: jest.fn(),
            dispatch: jest.fn(),
          },
        });

        wrapper.setData({
          selectColumn: 'Title',
          selectCondition: 'Equal',
          inputValue: 'Test title',
        });

        wrapper
          .findComponent({ name: 'Input' })
          .vm.$emit('changeInput', 'Test title');

        jest.runAllTimers();

        it('Correct change value', () => {
          expect(wrapper.vm.$data.inputValue).toEqual('Test title');
        });

        it('Correct use of dispatch', () => {
          expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith(
            'setTableDataFiltered',
            mockTableData
          );
        });
        it('Correct use of mutation', () => {
          expect(wrapper.vm.$store.commit).toHaveBeenCalledWith(
            'SET_PAGINATION_CURRENT_PAGE',
            0
          );
        });
      });
    });
  });
});
