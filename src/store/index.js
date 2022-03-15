import { createStore } from 'vuex'

export default createStore({
  state: {
    recipes: [
      {
        slug: 'Yam-Porridge',
        title: 'Yam Porridge',
        description: 'A delicious yam porridge for the family',
        ingredients: [
          '10 tablespoon of palm oil',
          '2 diced onions',
          '1 tablespoon of salt',
          'a pinch of powdered pepper'

        ],
        methods: []
      },
      {
        slug: 'spicy-indomie',
        title: 'Spicy Indomie',
        description: 'A delicious Indomie as a fast food',
        ingredeints: [
          '3/4 filled teaspoon of vegetable oil',
          'salt + maggi comes with the pack',
          'cray fish'
        ],
        methods: []
      }
    ]
  },
  
  mutations: {
    ADD_RECIPE (state, recipe){
      state.recipes.push(recipe)
    }
  }
})
