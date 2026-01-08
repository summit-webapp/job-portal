import { UploadSimpleIcon } from "@phosphor-icons/react";

const UploadFileField = ({ label }: { label: string }) => {
    return (
        <div className="upload-file-field">
            <label className="upload-file-field-label">
                <UploadSimpleIcon size={20} className="mr-4" />
                {label}
            </label>
            <input type="file" />
        </div>
    )
}

export default UploadFileField;
