import data from './image-assets.json';

export type ImageAsset = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const portfolioImages: ImageAsset[] = data.portfolioImages;
export const globalImages: ImageAsset[] = data.globalImages;
export const archiveImages: ImageAsset[] = data.archiveImages;

export const allImages: ImageAsset[] = [
  ...portfolioImages,
  ...globalImages,
  ...archiveImages
];
