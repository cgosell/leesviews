import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress, Box } from "@mui/material";

const Gallery = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		const fetchPhotos = async () => {
			try {
				const response = await axios.get(
					"https://sabezametizueocpajkl.supabase.co/functions/v1/retrieve-photos",
					{
						headers: {
							Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_ANON_KEY}`, // Add the authorization header
						},
					}
				);
				setPhotos(response.data.data);
				setIsLoading(false);
			} catch (error) {
				console.error("Error fetching photos:", error);
			}
		};

		fetchPhotos();
	}, []);

	return (
		<div>
			{isLoading ? (
				<Box textAlign="center" mt={2}>
					<CircularProgress />
				</Box>
			) : photos.length === 0 ? (
				<Box textAlign="center" mt={2}>
					No photos to display
				</Box>
			) : (
				<Box display="flex" flexWrap="wrap">
					{photos?.map((photo) => (
						<Box key={photo.id} p={1}>
							<img
								src={`https://sabezametizueocpajkl.supabase.co/storage/v1/object/public/photos/public/${photo.name}`}
								alt={photo.name}
								style={{ width: 300, height: 300, objectFit: "cover" }}
							/>
							<Box textAlign="center">{photo.caption}</Box>
						</Box>
					))}
				</Box>
			)}
		</div>
	);
};
export default Gallery;
