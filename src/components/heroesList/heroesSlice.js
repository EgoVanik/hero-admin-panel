import { createSlice, createAsyncThunk, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import {useHttp} from '../../hooks/http.hook';

const heroesAdapter = createEntityAdapter();


//получаем начальное состояние у heroesAdapter и добавляем методы
const initialState = heroesAdapter.getInitialState({
    heroesLoadingStatus: 'idle'
}); 
// console.log(initialState);

export const fetchHeroes = createAsyncThunk(
    'heroes/fetchHeroes',
    () => {
        const {request} = useHttp();
        return request("http://localhost:3001/heroes");
        // return request("https://hero-panel.herokuapp.com/heroes");
    }
);

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroCreated: (state, action) => {
            heroesAdapter.addOne(state, action.payload)
            },
        heroDeleted: (state, action) => {
            heroesAdapter.removeOne(state, action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroes.pending, state => {state.heroesLoadingStatus = 'loading'})
            .addCase(fetchHeroes.fulfilled, (state, action) => {
                state.heroesLoadingStatus = 'idle';
                heroesAdapter.setAll(state, action.payload); //получаем все сущности и заменяем ими те которые передаем
                })
            .addCase(fetchHeroes.rejected, state => {
                state.heroesLoadingStatus = 'error';
                })
            .addDefaultCase(() => {})
    }
});

const {actions, reducer} = heroesSlice; //вытаскиваем actions и reducer для формирования store

const {selectAll} = heroesAdapter.getSelectors(state => state.heroes); //привязываем state к героям, чтобы все селекторы обращалиьс сразу к героям и получаем список всех сущностей(selectAll)
// перенесённый селектор
// пример как работает createSelector в документации по библиотеке reselect
export const filteredHeroesSelector = createSelector(
    (state) => state.filters.activeFilter,
    selectAll,
    (filter, heroes) => {
        if (filter === 'all') {
            return heroes;
        } else {
            return heroes.filter(item => item.element === filter); //перебираем героев и если фильтр героя совпадает с активным фильтром, то он попадает в новый массив, если нет - просто отбрасывается
        }
    }
);

export default reducer;
export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroCreated,
    heroDeleted
} = actions;