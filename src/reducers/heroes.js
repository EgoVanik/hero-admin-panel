import { createReducer } from "@reduxjs/toolkit";

// createReducer example, импортируем все action creators
import {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted
} from '../actions';

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

// createReducer example
// toolkit запускает библиотеку inner.js которая делает иммутабельность за нас и нам её уже делать не нужно
// const heroes = createReducer(initialState, builder => {
//     builder
//         .addCase(heroesFetching, state => {
//             // не подходит по иммутабельность, но createReducer запускает  inner.js которая сохраняет иммутабельность
//             // из addCase не нужно ничего возвращать - всё делается автоматически
//             state.heroesLoadingStatus = 'loading';
//         })
//         .addCase(heroesFetched, (state, action) => {
//             state.heroesLoadingStatus = 'idle';
//             state.heroes = action.payload;
//         })
//         .addCase(heroesFetchingError, state => {
//             state.heroesLoadingStatus = 'error';
//         })
//         .addCase(heroCreated, (state, action) => {
//             state.heroes.push(action.payload)
//         })
//         .addCase(heroDeleted, (state, action) => {
//             state.heroes = state.heroes.filter(item => item.id !== action.payload);
//         })
//         .addDefaultCase(() => {});
// });

// createReducer example with object
const heroes = createReducer(initialState, {
        [heroesFetching]: state => {
            state.heroesLoadingStatus = 'loading';
            },
        [heroesFetched]: (state, action) => {
            state.heroesLoadingStatus = 'idle';
            state.heroes = action.payload;
            },
        [heroesFetchingError]: state => {
            state.heroesLoadingStatus = 'error';
            },
        [heroCreated]: (state, action) => {
            state.heroes.push(action.payload)
            },
        [heroDeleted]: (state, action) => {
            state.heroes = state.heroes.filter(item => item.id !== action.payload);
        }
    },
    [],
    state => state
);

export default heroes;