export interface IMedia {
  id: number;
  attributes: IIconAttributes;
}

interface IIconAttributes {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: IIconFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: string;
  createdAt: string;
  updatedAt: string;
}

interface IIconFormats {
  small: IIconDetails;
  media?: IIconDetails;
  thumbnail: IIconDetails;
}

interface IIconDetails {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}
