import React, { useCallback } from 'react'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core'
import { storage } from '../../firebase'
import ImagePreview from './ImegePreview'

const useStyles = makeStyles({
  icon: {
    color: "green",
    '&:hover': {
      background: "#c5e1a5",
    },

  }
})
const ImageArea = (props) => {
  const classes = useStyles();

  const deleteImage = useCallback(async (id) => {
    const ret = window.confirm("この画像を削除しますか？");
    if (!ret) {
      return false
    } else {
      const newImages = props.images.filter(image => image.id !== id)
      props.setImages(newImages);
      return storage.ref("image").child(id).delete()
    }
  }, [props.images])

  const uploadImage = useCallback((event) => {
    const file = event.target.files;
    let blob = new Blob(file, { type: "image/jpeg" });

    const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const N = 16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n) => S[n % S.length]).join('')

    const uploadRef = storage.ref('images').child(fileName);
    const uploadTask = uploadRef.put(blob);

    uploadTask.then(() => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        const newImage = { id: fileName, path: downloadURL };
        props.setImages((prevState => [...prevState, newImage]))
      });
    })
  }, [props.setImages])

  return (
    <>
      <div className="list-image-size">
        {props.images.length > 0 && (
          props.images.map(image => <ImagePreview id={image.id} path={image.path} key={image.id} deleteImage={deleteImage} />)
        )}
      </div>
      <div className="text-right">
        <IconButton className={classes.icon}>
          <label>
            <AddAPhotoIcon />
            <input
              className="display-none"
              type="file"
              id="image"
              onChange={(event) => uploadImage(event)}
            />
          </label>
        </IconButton>
      </div>
    </>
  )
}

export default ImageArea