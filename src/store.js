import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getContient = createAsyncThunk(
//     'global/getContient', async () => {
//         let res = await axios.get('https://FAKEAPI.com/continents');
//         return await res.data;
//     }
// )

export const globalSlice = createSlice(
    {
        name: "global",
        initialState: {
            data: [
                {
                    code: 1,
                    Name: 'Africa',
                    SurfaceArea: 302000,
                    Population: 14090000,
                    img: 'https://www.nationsonline.org/gallery/africa/Africa-region-map.jpg',
                    pays: [

                        {
                            Name: 'Morocco',
                            Population: 36000000,
                            Capital: 'Rabat',
                            IndepYear: 1956,
                            img: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg'
                        },

                        {
                            Name: 'Egypt',
                            Population: 101000000,
                            Capital: 'Cairo',
                            IndepYear: 1822,
                            img: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg'
                        },
                        {
                            Name: 'Qatar',
                            Population: 2800000,
                            Capital: 'Doha',
                            IndepYear: 1922,
                            img: 'https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg'
                        }
                    ]
                },
                {
                    code: 2,
                    Name: 'Europe',
                    SurfaceArea: 302000,
                    Population: 1300000,
                    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Europe_blank_laea_location_map.svg/1401px-Europe_blank_laea_location_map.svg.png',
                    pays: [
                        {
                            Name: 'France',
                            Population: 67000000,
                            Capital: 'Paris',
                            IndepYear: 1792,
                            img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_France_%281958%E2%80%931976%29.svg'
                        },
                        {
                            Name: 'Portugal',
                            Population: 10000000,
                            Capital: 'Lisbon',
                            IndepYear: 1143,
                            img: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg'
                        }
                    ]
                },
                {
                    code: 3,
                    Name: 'South America',
                    SurfaceArea: 3020000,
                    Population: 1900000,
                    img: 'https://www.worldatlas.com/r/w768/upload/9c/63/97/south-america-map.png',
                    pays: [
                        {
                            Name: 'Brazil',
                            Population: 212000000,
                            Capital: 'Brasília',
                            IndepYear: 1822,
                            img: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg'
                        }
                    ]
                }

            ]
        },reducers:{
            AddPay:(state,action)=>{
                state.data = [...action.payload];
            }
        }
        // extraReducers: {
        //     [getContient.pending]: (state) => {
        //         return state.isLoading = true;
        //     }, [getContient.pending]: (state,action) => {
        //         state.data = [...state.data,action.payload];
        //         state.isLoading = false;
        //     }, [getContient.pending]: (state) => {
        //         return state.isLoading = false;
        //     },
        // },
    }
)

export const { AddPay } = globalSlice.actions;

const store = configureStore({
    reducer: globalSlice.reducer
})

export default store;