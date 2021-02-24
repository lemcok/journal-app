
export const fileUpload = async( file ) => {
    const cloundUrl = 'https://api.cloudinary.com/v1_1/dy2wfpgus/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch( cloundUrl, {
            method: 'POST',
            body: formData
        } )

        if ( resp.ok ) {
            const cloundResp = await resp.json();
            return cloundResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (error) {
        throw error;
    }

    //return url de la imagen
}
