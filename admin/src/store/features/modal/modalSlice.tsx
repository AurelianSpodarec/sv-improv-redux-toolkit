import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: true,
        config: {
            id: undefined,
            type: 'confirm',
            option: undefined,
            action: undefined,
            title: undefined,
            description: undefined,
            onAction: undefined,
        }
    },
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.config = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.config = {
                id: undefined,
                type: 'confirm',
                option: undefined,
                action: undefined,
                title: undefined,
                description: undefined,
                onAction: undefined
            }
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;