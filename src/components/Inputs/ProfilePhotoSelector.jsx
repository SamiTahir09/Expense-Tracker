import React from 'react'
import { LuUser, LuUpload, LuTrash } from 'react-icons/lu'

const ProfilePhotoSelector = ({ image, setImage }) => {

    const inputRef = React.useRef(null);
    const [previewUrl, setPreviewUrl] = React.useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImage(file)

            // generate url for preview
            const preview = URL.createObjectURL(file)
            setPreviewUrl(preview)
        }
    }
    const handleRemoveImage = () => {
        setImage(null)
        setPreviewUrl(null)
        if (inputRef.current) {
            inputRef.current.value = null
        }
    }
    const onChooseFile = () => {
        if (inputRef.current) {
            inputRef.current.click()
        }
    }
    return (
        <div className='flex justify-center mb-6'>
            <input
                type="file"
                id="profilePic"
                accept="image/*"
                label="Profile Photo"
                ref={inputRef}
                onChange={handleImageChange}
                className=""
            />
        </div>
    )
}

export default ProfilePhotoSelector