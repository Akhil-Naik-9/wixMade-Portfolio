/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: blogposts
 * Interface for BlogPosts
 */
export interface BlogPosts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  slug?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType datetime */
  publicationDate?: Date | string;
  /** @wixFieldType text */
  author?: string;
  /** @wixFieldType image */
  featuredImage?: string;
  /** @wixFieldType text */
  excerpt?: string;
  /** @wixFieldType text */
  content?: string;
}


/**
 * Collection ID: certificates
 * Interface for Certificates
 */
export interface Certificates {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  certificateName?: string;
  /** @wixFieldType text */
  issuingOrganization?: string;
  /** @wixFieldType date */
  dateIssued?: Date | string;
  /** @wixFieldType text */
  credentialId?: string;
  /** @wixFieldType url */
  certificateUrl?: string;
  /** @wixFieldType image */
  certificateImage?: string;
  /** @wixFieldType text */
  description?: string;
}


/**
 * Collection ID: coursework
 * Interface for Coursework
 */
export interface Coursework {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  courseTitle?: string;
  /** @wixFieldType text */
  institution?: string;
  /** @wixFieldType date */
  completionDate?: Date | string;
  /** @wixFieldType text */
  gradeResult?: string;
  /** @wixFieldType text */
  courseDescription?: string;
  /** @wixFieldType url */
  certificateUrl?: string;
  /** @wixFieldType image */
  courseImage?: string;
}


/**
 * Collection ID: photogalleries
 * Interface for PhotoGalleries
 */
export interface PhotoGalleries {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  galleryName?: string;
  /** @wixFieldType text */
  galleryDescription?: string;
  /** @wixFieldType image */
  coverImage?: string;
  /** @wixFieldType image */
  photoOne?: string;
  /** @wixFieldType image */
  photoTwo?: string;
  /** @wixFieldType image */
  photoThree?: string;
  /** @wixFieldType date */
  datePublished?: Date | string;
}


/**
 * Collection ID: projects
 * Interface for Projects
 */
export interface Projects {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  projectName?: string;
  /** @wixFieldType image */
  projectImage?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  fullDescription?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType text */
  skillsUsed?: string;
  /** @wixFieldType url */
  liveDemoUrl?: string;
  /** @wixFieldType url */
  githubRepoUrl?: string;
  /** @wixFieldType date */
  completionDate?: Date | string;
}
