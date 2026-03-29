/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

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
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
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
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  courseImage?: string;
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
  /** @wixFieldType number */
  sortOrder?: number;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
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
