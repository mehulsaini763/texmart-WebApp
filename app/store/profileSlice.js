import { auth, db } from "../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const profileSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      // console.log(action);
       setDoc(doc(db, "users", auth.currentUser.uid), {
        ...action.payload,
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;

export const getProfile = createAsyncThunk("profile", async () => {
  const res = await getUser();
  
  if (res) {
    const docRef = doc(db, "users", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } else return null;
});

const getUser = async () => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  });
};
