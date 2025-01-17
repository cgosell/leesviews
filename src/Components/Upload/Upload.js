import React, { useState } from "react";
import { Box, Button, CircularProgress } from "@mui/material";
import axios from "axios";
import { TextField } from "@mui/material";

const Upload = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [status, setStatus] = useState("idle");
	const [statusMessage, setStatusMessage] = useState("");
	const [caption, setCaption] = useState("");

	const handleFileChange = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleCaptionChange = (event) => {
		setCaption(event.target.value);
	};

	const handleUpload = async () => {
		if (selectedFile) {
			const formData = new FormData();
			formData.append("file", selectedFile);
			formData.append("caption", caption); // Append the caption to the FormData
			setStatus("submitting");
			try {
				await axios.post(
					"https://sabezametizueocpajkl.supabase.co/functions/v1/upload-photo",
					formData,
					{
						headers: {
							"Content-Type": "multipart/form-data",
							Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`, // Add the authorization header
						},
					}
				);
				setStatus("success");
			} catch (error) {
				setStatus("error");
				setStatusMessage(error?.response?.data?.error);
				setTimeout(() => {
					setStatus("idle");
					setStatusMessage("");
				}, 2000);
			}
		} else {
			setStatus("error");
			setStatusMessage("Please select a file to upload.");
			setTimeout(() => {
				setStatus("idle");
				setStatusMessage("");
			}, 2000);
		}
	};

	return (
		<Box display="flex" flexDirection="column" alignItems="center" padding={2}>
			{status === "success" ? (
				<Box>
					<Box mt={2} color="green">
						File uploaded successfully!
					</Box>
					<Box p={1}>
						<Button
							variant="contained"
							onClick={() => {
								window.location.reload();
							}}
						>
							Upload Another
						</Button>
					</Box>
				</Box>
			) : (
				<Box>
					<input type="file" onChange={handleFileChange} />
					<Box display="flex" flexDirection="column" alignItems="center">
						<TextField
							label="Caption"
							value={caption}
							onChange={handleCaptionChange}
							variant="outlined"
							fullWidth
							margin="normal"
						/>
					</Box>

					<Box display="flex" flexDirection="column" alignItems="center">
						{status === "error" ? (
							<Box pb={1} color="red">
								{statusMessage}
							</Box>
						) : null}
						{status === "idle" ? (
							<Button variant="contained" onClick={handleUpload}>
								Upload
							</Button>
						) : status === "submitting" ? (
							<Button
								variant="contained"
								onClick={handleUpload}
								startIcon={<CircularProgress size={20} />}
								disabled
							>
								Uploading
							</Button>
						) : status === "error" ? (
							<Button variant="contained" onClick={handleUpload}>
								Upload
							</Button>
						) : null}
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default Upload;
