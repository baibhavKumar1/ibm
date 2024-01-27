"use client"
import { CldUploadButton } from 'next-cloudinary'
import React from 'react'

const Auth = () => {
    return (
        <div>
            <CldUploadButton
                className=""
                onUpload={(error, result, widget) => {
                    setResource(result?.info);
                    widget.close();
                }}
                signatureEndpoint="/api/sign-cloudinary-params"
                uploadPreset="next-cloudinary-signed"
            >
                Upload to Cloudinary
            </CldUploadButton>
        </div>
    )
}

export default Auth
