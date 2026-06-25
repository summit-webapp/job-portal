import React, { useRef, useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import UploadFileApi from "@/services/api/auth_api/upload_file_api";

interface ApplyJobModalProps {
  show: boolean;
  onClose: () => void;
  designation: string;
  jobName: string;
  createJobApplicantFunction: (
    designation: string,
    name: string,
    status: string,
    resume?: string
  ) => Promise<any>;
}

const ApplyJobModal = ({
  show,
  onClose,
  designation,
  jobName,
  createJobApplicantFunction,
}: ApplyJobModalProps) => {
  const [uploading, setUploading] = useState(false);
  const [applying, setApplying] = useState(false);
  const [msgSuccess, setMsgSuccess] = useState<string | null>(null);
  const [msgError, setMsgError] = useState<string | null>(null);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string>("");
  const [uploadedFileName, setUploadedFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    if (uploading || applying) return;
    setMsgError(null);
    setMsgSuccess(null);
    setUploadedFileUrl("");
    setUploadedFileName("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    onClose();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;

    // Check size limit: e.g. 5MB
    if (file.size > 5 * 1024 * 1024) {
      setMsgError("File size exceeds 5 MB limit.");
      return;
    }

    setMsgError(null);
    setMsgSuccess(null);
    setUploading(true);

    try {
      const uploadRes = await UploadFileApi({ file });

      if (typeof uploadRes === "string") {
        setMsgError(`Resume upload failed: ${uploadRes}`);
        setUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }

      const uploadMsg = uploadRes?.data?.message;
      if (uploadMsg?.msg === "error" || uploadMsg?.error) {
        setMsgError(uploadMsg?.error ?? "Resume upload failed.");
        setUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }

      const resumeUrl = uploadMsg?.file_url ?? "";
      if (!resumeUrl) {
        setMsgError("Resume upload failed to return a file URL.");
        setUploading(false);
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }

      setUploadedFileUrl(resumeUrl);
      setUploadedFileName(file.name);
    } catch (err: any) {
      console.error(err);
      setMsgError("An unexpected error occurred during upload. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleApply = async () => {
    if (!uploadedFileUrl) return;

    setMsgError(null);
    setMsgSuccess(null);
    setApplying(true);

    try {
      const applyRes = await createJobApplicantFunction(
        designation,
        jobName,
        "Apply",
        uploadedFileUrl
      );

      console.log("applyRes response in modal:", applyRes);

      // Check response status and data/message error
      if (
        !applyRes ||
        applyRes === "Request timed out" ||
        applyRes === "Bad Request" ||
        applyRes === "Invalid URL"
      ) {
        setMsgError(typeof applyRes === "string" ? applyRes : "Failed to apply for job.");
        setApplying(false);
        return;
      }

      const applyData = applyRes?.data || applyRes;
      const applyMsg = applyData?.message;

      if (applyMsg?.msg === "error" || applyMsg?.error) {
        setMsgError(applyMsg?.error ?? "Failed to apply for job.");
        setApplying(false);
        return;
      }

      // Success!
      setMsgSuccess("Successfully applied for the job!");
      setUploadedFileUrl("");
      setUploadedFileName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      setTimeout(() => {
        setMsgSuccess(null);
        onClose();
      }, 2000);

    } catch (err: any) {
      console.error(err);
      setMsgError("An unexpected error occurred. Please try again.");
    } finally {
      setApplying(false);
    }
  };

  const isBusy = uploading || applying;

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop={isBusy ? "static" : true}
    >
      <Modal.Header closeButton={!isBusy} className="border-0 pb-0">
        <Modal.Title
          className="font-size-6 font-weight-bold"
          style={{ color: "#1b2d5b" }}
        >
          Apply for {designation}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="px-8 py-6">
        <p className="font-size-4 text-gray mb-6">
          Please upload your latest resume to complete your application for this position.
        </p>

        {/* Upload/Uploaded State Container */}
        {uploading ? (
          <div
            className="border rounded-4 text-center py-8 px-5"
            style={{
              borderColor: "#e2e8f0",
              background: "#f8fafc",
              borderStyle: "dashed",
              borderWidth: "2px",
            }}
          >
            <Spinner
              animation="border"
              style={{ color: "#40a87b" }}
              className="mb-3"
            />
            <p className="font-size-4 mb-0 font-weight-semibold text-black-2">
              Uploading resume...
            </p>
          </div>
        ) : uploadedFileUrl ? (
          <div
            className="border rounded-4 text-center py-6 px-5"
            style={{
              borderColor: "#bbf7d0",
              background: "#f0fdf4",
              borderStyle: "solid",
              borderWidth: "2px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
            }}
          >
            <i
              className="fas fa-check-circle mb-2"
              style={{ fontSize: "2.2rem", color: "#16a34a" }}
            ></i>
            <p className="font-size-4 mb-2 font-weight-bold text-success">
              Resume uploaded successfully!
            </p>
            <div className="font-size-4 font-weight-semibold text-black-2 mb-3 text-break">
              <i className="fas fa-file-alt mr-2 text-gray"></i>
              {uploadedFileName}
            </div>
            <Button
              variant="outline-secondary"
              size="sm"
              className="rounded-5 font-size-3 px-4 py-2"
              onClick={() => {
                setUploadedFileUrl("");
                setUploadedFileName("");
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
              disabled={isBusy}
            >
              Change File
            </Button>
          </div>
        ) : (
          <div
            className="border rounded-4 text-center py-8 px-5 position-relative"
            style={{
              borderColor: "#cbd5e1",
              background: "#ffffff",
              cursor: "pointer",
              borderStyle: "dashed",
              borderWidth: "2px",
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)",
              transition: "all 0.2s ease-in-out",
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="py-2">
              <i
                className="fas fa-cloud-upload-alt mb-3"
                style={{ fontSize: "2rem", color: "#40a87b" }}
              ></i>
              <p className="font-size-4 mb-1 font-weight-bold text-black-2">
                Upload your resume
              </p>
              <p className="font-size-3 text-gray mb-0">
                PDF, DOC, DOCX up to 5MB
              </p>
            </div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          style={{ display: "none" }}
          onChange={handleFileChange}
          disabled={isBusy}
        />

        {/* Feedback alerts */}
        {msgSuccess && (
          <div className="alert alert-success font-size-4 py-4 mt-6 mb-0 d-flex align-items-center">
            <i className="fas fa-check-circle mr-3" style={{ fontSize: "1.2rem" }}></i>
            <div>{msgSuccess}</div>
          </div>
        )}
        {msgError && (
          <div className="alert alert-danger font-size-4 py-4 mt-6 mb-0 d-flex align-items-center">
            <i className="fas fa-exclamation-circle mr-3" style={{ fontSize: "1.2rem" }}></i>
            <div>{msgError}</div>
          </div>
        )}
      </Modal.Body>

      <Modal.Footer className="border-0 pt-0 pb-6 px-8 d-flex justify-content-end gap-3">
        <Button
          variant="light"
          className="rounded-5 py-5 px-7 font-size-4 font-weight-semibold"
          onClick={handleClose}
          disabled={isBusy}
          style={{ background: "#f1f5f9", border: "none", color: "#475569" }}
        >
          Cancel
        </Button>
        <Button
          className="btn btn-green text-uppercase rounded-5 py-5 px-7 font-size-4 font-weight-semibold d-flex align-items-center gap-2"
          onClick={handleApply}
          disabled={!uploadedFileUrl || isBusy}
          style={{ border: "none" }}
        >
          {applying ? (
            <>
              <Spinner animation="border" size="sm" />
              Applying…
            </>
          ) : (
            "Apply Now"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ApplyJobModal;
