import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const PortfolioUpload = ({ 
  category, 
  onUpload, 
  existingFiles = [] 
}) => {
  const [files, setFiles] = useState(existingFiles);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkDescription, setLinkDescription] = useState('');
  const [showLinkForm, setShowLinkForm] = useState(false);

  const handleFileSelect = (event) => {
    const selectedFiles = Array.from(event?.target?.files);
    const newFiles = selectedFiles?.map(file => ({
      id: `file-${Date.now()}-${Math.random()}`,
      name: file?.name,
      size: file?.size,
      type: file?.type,
      uploadDate: new Date()?.toISOString()
    }));
    const updatedFiles = [...files, ...newFiles];
    setFiles(updatedFiles);
    onUpload(updatedFiles);
  };

  const handleAddLink = () => {
    if (linkUrl && linkDescription) {
      const newLink = {
        id: `link-${Date.now()}`,
        name: linkDescription,
        url: linkUrl,
        type: 'link',
        uploadDate: new Date()?.toISOString()
      };
      const updatedFiles = [...files, newLink];
      setFiles(updatedFiles);
      onUpload(updatedFiles);
      setLinkUrl('');
      setLinkDescription('');
      setShowLinkForm(false);
    }
  };

  const handleRemoveFile = (fileId) => {
    const updatedFiles = files?.filter(f => f?.id !== fileId);
    setFiles(updatedFiles);
    onUpload(updatedFiles);
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024)?.toFixed(1) + ' KB';
    return (bytes / 1048576)?.toFixed(1) + ' MB';
  };

  const getFileIcon = (file) => {
    if (file?.type === 'link') return 'Link';
    if (file?.type?.includes('image')) return 'Image';
    if (file?.type?.includes('pdf')) return 'FileText';
    if (file?.type?.includes('video')) return 'Video';
    return 'File';
  };

  return (
    <div className="bg-card rounded-xl border border-border p-4 md:p-6">
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
          Portfolio & Evidence
        </h3>
        <p className="text-sm text-muted-foreground">
          Upload files or add links to demonstrate your {category} skills
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="cursor-pointer">
            <input
              type="file"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.mov"
            />
            <div className="flex items-center justify-center gap-2 h-12 px-4 rounded-lg border-2 border-dashed border-border hover:border-primary transition-colors bg-muted/50 touch-target">
              <Icon name="Upload" size={18} color="var(--color-primary)" />
              <span className="text-sm font-medium text-foreground">Upload Files</span>
            </div>
          </label>

          <Button
            variant="outline"
            onClick={() => setShowLinkForm(!showLinkForm)}
            iconName="Link"
            fullWidth
          >
            Add Link
          </Button>
        </div>

        {showLinkForm && (
          <div className="bg-muted rounded-lg p-4 space-y-3">
            <Input
              type="url"
              label="URL"
              placeholder="https://example.com/portfolio"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e?.target?.value)}
            />
            <Input
              type="text"
              label="Description"
              placeholder="Describe what this link demonstrates"
              value={linkDescription}
              onChange={(e) => setLinkDescription(e?.target?.value)}
            />
            <div className="flex gap-2">
              <Button
                variant="default"
                onClick={handleAddLink}
                disabled={!linkUrl || !linkDescription}
                iconName="Plus"
                size="sm"
              >
                Add Link
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setShowLinkForm(false);
                  setLinkUrl('');
                  setLinkDescription('');
                }}
                size="sm"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}

        {files?.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-foreground">
              Uploaded Items ({files?.length})
            </h4>
            <div className="space-y-2">
              {files?.map((file) => (
                <div
                  key={file?.id}
                  className="flex items-center gap-3 p-3 bg-muted rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={getFileIcon(file)} size={18} color="var(--color-primary)" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm font-medium text-foreground truncate">
                      {file?.name}
                    </h5>
                    <p className="text-xs text-muted-foreground">
                      {file?.type === 'link' ? file?.url : formatFileSize(file?.size)}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveFile(file?.id)}
                    className="w-8 h-8 rounded flex items-center justify-center hover:bg-background transition-colors flex-shrink-0 touch-target"
                    aria-label="Remove file"
                  >
                    <Icon name="X" size={16} color="var(--color-error)" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-accent/5 rounded-lg p-4 border border-accent/20">
          <div className="flex gap-3">
            <Icon name="Info" size={18} color="var(--color-accent)" className="flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="text-xs md:text-sm text-foreground">
                <strong>Accepted formats:</strong> PDF, DOC, DOCX, JPG, PNG, MP4, MOV (max 10MB per file)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioUpload;