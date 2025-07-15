
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, File, X, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DocumentUploadProps {
  onDocumentsChange: (documents: File[]) => void;
  requiredDocuments: string[];
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ onDocumentsChange, requiredDocuments }) => {
  const [uploadedDocuments, setUploadedDocuments] = useState<File[]>([]);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter(file => {
      const maxSize = 5 * 1024 * 1024; // 5MB
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
      
      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: `${file.name} is larger than 5MB`,
          variant: "destructive"
        });
        return false;
      }
      
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported file type`,
          variant: "destructive"
        });
        return false;
      }
      
      return true;
    });

    const newDocuments = [...uploadedDocuments, ...validFiles];
    setUploadedDocuments(newDocuments);
    onDocumentsChange(newDocuments);
  };

  const removeDocument = (index: number) => {
    const newDocuments = uploadedDocuments.filter((_, i) => i !== index);
    setUploadedDocuments(newDocuments);
    onDocumentsChange(newDocuments);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-sm font-medium">Required Documents</Label>
        <div className="mt-2 space-y-2">
          {requiredDocuments.map((doc, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>{doc}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="documents" className="text-sm font-medium">Upload Documents</Label>
        <div className="mt-2">
          <Input
            id="documents"
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileUpload}
            className="hidden"
          />
          <label
            htmlFor="documents"
            className="flex items-center justify-center w-full h-32 border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-accent/50 transition-colors"
          >
            <div className="text-center">
              <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-muted-foreground">
                PDF, JPG, PNG up to 5MB each
              </p>
            </div>
          </label>
        </div>
      </div>

      {uploadedDocuments.length > 0 && (
        <div className="space-y-2">
          <Label className="text-sm font-medium">Uploaded Documents</Label>
          {uploadedDocuments.map((file, index) => (
            <Card key={index} className="p-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <File className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeDocument(index)}
                    className="text-destructive hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;
