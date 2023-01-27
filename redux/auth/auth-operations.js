import { auth, storage } from '../../firebase/config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { authSlice } from './auth-reducer';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const { updateUserProfile, authStateChange, authLogOut } = authSlice.actions;

export const register =
  ({ login, email, password, avatarURL }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      let avatar;
      if (avatarURL) {
        const response = await fetch(avatarURL);
        const file = await response.blob();
        const avatarStorageRef = ref(storage, `avatars/${user.uid}`);

        await uploadBytes(avatarStorageRef, file);

        avatar = await getDownloadURL(avatarStorageRef);
      }
      await updateProfile(auth.currentUser, {
        displayName: login,
        photoURL: avatar,
      });

      dispatch(
        updateUserProfile({
          userId: user.uid,
          login,
          email: user.email,
          avatarURL: user.photoURL,
        })
      );
    } catch (error) {
      console.log('error', error);
    }
  };

export const login =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      dispatch(
        updateUserProfile({
          userId: user.uid,
          login: user.displayName,
          email: user.email,
          avatarURL: user.photoURL,
        })
      );
    } catch (error) {
      console.log('error', error.message);
    }
  };

export const logOut = () => async (dispatch, getState) => {
  await auth.signOut();
  dispatch(authLogOut());
};

export const getCurrentUser = () => (dispatch, getState) => {
  onAuthStateChanged(auth, (user) => {
    if (!user) return;

    dispatch(
      updateUserProfile({
        userId: user.uid,
        login: user.displayName,
        avatarURL: user.photoURL,
        email: user.email,
      })
    );
  });
};
