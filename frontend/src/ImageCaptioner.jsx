import React, { useState } from "react";
import axios from "axios";

export default function ImageCaptioner() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);
    setCaption("");

    try {
      const res = await axios.post("http://localhost:5000/caption", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setCaption(res.data.caption);
    } catch (err) {
      console.error(err);
      setCaption("❌ Error generating caption");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-captioner">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Generate Caption</button>

      {image && (
        <div className="preview">
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            style={{ width: "30%", marginTop: "10px" }}
          />
        </div>
      )}

      {loading && <p>⏳ Generating caption...</p>}
      {caption && <p><strong>Caption:</strong> {caption}</p>}
    </div>
  );
}
