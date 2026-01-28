import React from 'react'

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
        <div>
            <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
            <input
                type="file"
                id="profilePic"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
        </div>
    )
}

export default ProfilePhotoSelector