export const uploadFiles = (req, res) => {
    if(!req.files || req.files.length == 0) {
        return res.status(400).json({ message: "No files uploaded" });
    }

    const files = req.files.map(file => ({
        originalName: file.originalname,
        storageName: file.filename,
        destination: file.destination,
        sizeMB: (file.size / (1024 * 1024)).toFixed(2)
    }));

    res.json({
        message: "Upload successful",
        files
    });
};
