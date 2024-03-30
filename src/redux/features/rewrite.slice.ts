import { languages } from '@/app/constants/languages';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface language {
    name: string;
    local: string;
}
interface rewrite {
    languagesBox: boolean;
    input: string;
    lenght: string;
    viewPoint: string;
    tone: string;
    creativity: string;
    output: any;
    languages: language[];
    selectedLanguage: string;
    isLoading: boolean
    mode: string;
    engine: string;
    showHistories: boolean

}

const initialState: rewrite = {
    languagesBox: false,
    input: '',
    output: [],
    viewPoint: '',
    tone: '',
    lenght: '',
    creativity: 'Original',
    languages: languages,
    selectedLanguage: "English",
    isLoading: false,
    mode: 'simple',
    engine: 'GPT-3.5',
    showHistories: false
};

const RewriteSlice = createSlice({
    name: 'Rewrite',
    initialState,
    reducers: {
        setOutput(state, { payload }: PayloadAction<any>) {
            state.output = payload;
        },
        setLanguage(
            state,
            { payload },
        ) {
            state.selectedLanguage = payload;
            console.log(payload)
        },
        setTone(state, { payload }) {
            state.tone = payload;
        },
        setViewPoint(state, { payload }) {
            state.viewPoint = payload;
        },
        setLength(state, { payload }) {
            state.lenght = payload;
        },
        setCreativity(state, { payload }) {
            state.creativity = payload;
        },
        setEngine(state, { payload }) {
            state.engine = payload;
        },
        setOptions(state, { payload }) {
            state.tone = payload.tone;
            state.viewPoint = payload.format;
            state.lenght = payload.lenght;
        },
        toggleIsLoading(state) {
            state.isLoading = !state.isLoading;
        },
        setMode(state, { payload }) {
            state.mode = payload;
            state.input = "";
            state.output = [];
        },
        toggelShowHistories(state) {
            state.showHistories = !state.showHistories;
        }
    },
});

export const {
    setOutput,
    setLanguage,
    setOptions,
    setViewPoint,
    setLength,
    setTone,
    setCreativity,
    setEngine,
    toggleIsLoading,
    setMode,
    toggelShowHistories
} =
    RewriteSlice.actions;

export default RewriteSlice.reducer;
