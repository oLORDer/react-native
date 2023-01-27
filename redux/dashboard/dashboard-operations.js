import { db, storage } from '../../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import uuid from 'react-native-uuid';

export const sendPostToServer = async () => {
  const photoURL = await uploadPhotoToServer();
  const postsStorageRef = doc(db, `posts`, uuid.v4());
  await setDoc(postsStorageRef, {
    title,
    userId,
    login,
    Location,
    photo: photoURL,
    comments: [],
    creationDate: new Date().getTime(),
  });
};
const uploadPhotoToServer = async () => {
  const response = await fetch(photo);
  const file = await response.blob();
  const id = uuid.v4();
  const storageRef = ref(storage, `posts/${id}`);
  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob!');
  });
  const photoUrl = await getDownloadURL(storageRef).then((snapshot) => {
    console.log('photoRef:', snapshot);
    return snapshot;
  });
  return photoUrl;
};
