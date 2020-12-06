import React, { useCallback } from 'react'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core'
import { getThemeProps } from '@material-ui/styles'
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

    const uploadImage = useCallback((event) => {
        const file = event.target.files;
        let blob = new Blob(file,{type:"image/jpeg"});

        const S ="abcdefghijelmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const N =16;
        const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n)=>S[n%S.length]).join('')
    
        const uploadRef = storage.ref('images').child(fileName);
        const uploadTask = uploadRef.put(blob);

        uploadTask.then(()=>{
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
                const newImage = {id:fileName,path:downloadURL};
                props.setImages((prevState=>[...prevState,newImage]))
            });
        })
    },[props.setImages])

    const deleteImage = useCallback(async(id)=>{
        const ret = window.confirm("選択した画像を削除しますか")
        if (!ret){
            return false
        }else{
            // yesだったら処理
            // 削除されていない写真を残す
            const newImages = props.images.filter(image=>image.id !== id)
            props.setImages(newImages);
            return storage.ref("images").child(id).delete()
        }
    },[props.images])
    return (
        <>
            <div className="list-image-size">
                {props.images.length > 0 && (
                    props.images.map(image=><ImagePreview id={image.id} path={image.path} key={image.id} deleteImage={deleteImage}/>)
                )}
            </div>
            <div className="text-right">
                <span>画像を選択</span>
                <IconButton className={classes.icon}>
                    <label>
                        <AddAPhotoIcon />
                        <input className="display-none" type="file" id="image"
                        onChange={(event)=>uploadImage(event)} />
                    </label>
                </IconButton>
            </div>
        </>
    )
}

export default ImageArea