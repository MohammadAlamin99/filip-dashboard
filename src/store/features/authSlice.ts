import { createSlice, createAsyncThunk, type PayloadAction} from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { query, where, getDocs, collection } from "firebase/firestore";
import { auth, firestore } from "../../firebaseConfig";

// Type for admin data
interface Admin {
  id?: string;
  name: string;
  email: string;
  [key: string]: unknown; // For extra fields
}

// Type for thunk argument
interface LoginArgs {
  email: string;
  password: string;
}

// Type for slice state
interface AuthState {
  admin: Admin | null;
  loading: boolean;
  error: string | null;
}

export const loginAdmin = createAsyncThunk<
  Admin,
  LoginArgs,
  { rejectValue: string }
>(
  "auth/loginAdmin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Login with Firebase (no need to use 'user' here)
      await signInWithEmailAndPassword(auth, email, password);

      const adminRef = collection(firestore, "admin");
      const q = query(adminRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const adminDoc = querySnapshot.docs[0];
        const adminData = adminDoc.data() as Admin;

        localStorage.setItem("admin", JSON.stringify(adminData));
        return adminData;
      } else {
        return rejectWithValue("Admin data not found in Firestore.");
      }
    } catch (error: unknown) {
      let errorMessage = "Unknown error";

      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      }

      return rejectWithValue(errorMessage);
    }
  }
);

const initialState: AuthState = {
  admin: localStorage.getItem("admin") ? JSON.parse(localStorage.getItem("admin")!) : null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.admin = null;
      localStorage.removeItem("admin");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action: PayloadAction<Admin>) => {
        state.loading = false;
        state.admin = action.payload;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;