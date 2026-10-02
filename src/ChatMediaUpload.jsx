import React, { useState } from 'react';
import { supabase } from './supabaseClient';

const ChatMediaUpload = ({ onMediaUploaded }) => {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (event) => {
    try {
      setUploading(true);
      const file = event.target.files[0];
      if (!file) return;

      // Guhitamo izina n'inzira ya file muri bucket
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `chat_media/${fileName}`;

      // 1. Gushyira file muri Supabase Storage (chat-attachments bucket)
      const { error: uploadError } = await supabase.storage
        .from('chat-attachments')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 2. Kuzana Public URL ifunguye
      const { data } = supabase.storage
        .from('chat-attachments')
        .getPublicUrl(filePath);

      const publicUrl = data.publicUrl;
      const isVideo = file.type.startsWith('video/');
      const isImage = file.type.startsWith('image/');

      // Yoherereza URL n'ubwoko bwa media ku component nkuru
      onMediaUploaded({
        url: publicUrl,
        type: isVideo ? 'video' : isImage ? 'image' : 'file'
      });

    } catch (error) {
      alert('Ikosa mu kuzamura media: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="media-upload-btn">
      <label htmlFor="file-input" style={{ cursor: 'pointer', fontSize: '20px' }}>
        📎
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/*,video/*"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        disabled={uploading}
      />
      {uploading && <span style={{ fontSize: '12px', color: '#94a3b8' }}>Uploading...</span>}
    </div>
  );
};

export default ChatMediaUpload;
      
