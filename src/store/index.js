import { configureStore } from '@reduxjs/toolkit';
import heroes from '../components/heroesList/heroesSlice'; //slice
import filters from '../components/heroesFilters/filtersSlice'; //slice

// enhancer
// принимаем createStore и возвращаем ф-цию
// const enhancer = (createStore) => (...args) => {
//     const store = createStore(...args); // создаем хранилище

//     const oldDispatch = store.dispatch; //сохраняем оригинальный disptach, ложим сылку на него в значение переменной
//     // берем старый disptach и меняем его значение
//     store.dispatch = (action) => {
//         // если в dispatch приходит action строка - то мы перезаписываем dispatch 
//         if (typeof action === 'string') {
//             return oldDispatch({
//                 type: action
//             })
//         } else {
//             return oldDispatch(action); //если не строка, то возвращае старый disptach с action
//         }
//     }
//     return store;
// }

// middleware
// 3-я возвращаемая ф-ция это и есть новая ф-ция dispatch с изменённым функционалом
// store передается не весь, а только 2 сущности: dispatch и getState
const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

// store witch redux-toolkit
// getDefaultMiddleware - в нем ReduxThunk
const store = configureStore({
    reducer: {heroes, filters},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production', //выключаем devtools в продакшене
})

export default store;