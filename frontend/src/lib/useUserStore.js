import { create } from 'zustand'
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "./firebase";

const firestoreDB = getFirestore(app);

export const useUserStore = create((set) => ({
    currentUser: null,
    isLoading: true,
    fetchUserInfo: async (uid) => {
        if (!uid) return set({ currentUser: null, isLoading: false });

        try {
            const docRef = doc(firestoreDB, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                set({ currentUser: docSnap.data(), isLoading: false });
            } else {
                set({ currentUser: null, isLoading: false })
            }
        } catch (error) {
            console.log(error);
            if (!uid) return set({ currentUser: null, isLoading: false });
        }
    }
}));
